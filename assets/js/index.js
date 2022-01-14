(function(){
  const doc = document.documentElement;
  const parentURL = '{{ absURL "/" }}';

  function createEl(element='div') {
    return document.createElement(element);
  }

  function elem(selector){
    let elem = document.querySelector(selector);
    return elem != false ? elem : false;
  }

  function elems(selector, parent = document) {
    let elems = parent.querySelectorAll(selector);
    return elems.length ? elems : false;
  }

  function pushClass(el, targetClass) {
    // equivalent to addClass
    if (el && typeof el == 'object' && targetClass) {
      elClass = el.classList;
      elClass.contains(targetClass) ? false : elClass.add(targetClass);
    }
  }

  function deleteClass(el, targetClass) {
    // equivalent to removeClass
    if (el && typeof el == 'object' && targetClass) {
      elClass = el.classList;
      elClass.contains(targetClass) ? elClass.remove(targetClass) : false;
    }
  }

  function modifyClass(el, targetClass) {
    if (el && typeof el == 'object' && targetClass) {
      elClass = el.classList;
      elClass.contains(targetClass) ? elClass.remove(targetClass) : elClass.add(targetClass);
    }
  }

  function containsClass(el, targetClass) {
    if (el && typeof el == 'object' && targetClass) {
      return el.classList.contains(targetClass) ? true : false;
    }
  }

  function isChild(node, parentClass) {
    let isNode = node && typeof node == 'object';
    if (isNode){
      if (Array.isArray(parentClass)) {
        // return true if at least one is child
        let child = false;
        parentClass.forEach(function(parent){
          if (node.closest(parent) != null) {
            child = true;
          }
        });
        return child ? true : false;
      } else if (typeof parentClass == 'string') {
        return node.closest(parentClass) ? true : false;
      }
    }
  }

  function isTarget(target,selector,specifity=false) {
    const isIt = containsClass(target, selector);
    const isInIt = target.closest(`.${selector}`);
    if(specifity && isIt) {
      return isIt;
    }
    if(!specifity) {
      return isIt || isInIt;
    }
  }

  function wrapEl(el, wrapper) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
  }

  (function updateDate() {
    const dateElem = elem('.year')
    if (dateElem) {
      const date = new Date();
      const year = date.getFullYear();
      dateElem.innerHTML = year;
    }
  })();

  (function() {
    let bar = 'nav_bar-wrap';
    let navBar = elem(`.${bar}`);
    let nav = elem('.nav-body');
    let open = 'nav-open';
    let exit = 'nav-exit';
    let drop = 'nav-drop';
    let pop = 'nav-pop';
    let navDrop = elem(`.${drop}`);
    let hidden = 'hidden';

    function toggleMenu(){
      modifyClass(navDrop, pop);
      modifyClass(navBar, hidden);
      let menuOpen = containsClass(nav, open);
      let menuPulled = containsClass(nav, exit);

      let status = menuOpen || menuPulled ? true : false;

      status ? modifyClass(nav, exit) : modifyClass(nav, open);
      status ? modifyClass(nav, open) : modifyClass(nav, exit);
    }

    doc.addEventListener('click', function(event) {
      let target = event.target;
      const isNavDrop = isTarget(target, 'nav-drop', true);
      const isNavClose = isTarget(target,'nav-close', true);
      const isNavBar = isTarget(target, 'nav_bar-wrap');
      isNavDrop || isNavClose || isNavBar ? toggleMenu() : false;
    });
  })();

  (function share(){
    let share = elem('.share');
    let open = 'share-open';
    let close = 'share-close';
    let button = elem('.share-trigger');

    function showShare() {
      pushClass(share, open);
      deleteClass(share, close);
    }

    function hideShare() {
      pushClass(share, open);
      deleteClass(share, close);
    }
    if (button) {
      button.addEventListener('click', function() {
        showShare();
        setTimeout(hideShare, 5000);
      });
    }
  })();

  function elemAttribute(elem, attr, value = null) {
    if (value) {
      elem.setAttribute(attr, value);
    } else {
      value = elem.getAttribute(attr);
      return value ? value : false;
    }
  }

  (function wrapOrphanedPreElements() {
    const pres = elems('pre');
    if(pres) {
      Array.from(pres).forEach(function(pre){
        const parent = pre.parentNode;
        const isOrpaned = !containsClass(parent, 'highlight');
        if(isOrpaned) {
          const preWrapper = createEl();
          pushClass(preWrapper, 'highlight');
          pushClass(preWrapper, 'sans'); // has no lines
          wrapEl(pre, preWrapper);
        }
      })
    }
    /*
    @Todo
    1. Add UI controls to all pre blocks
    */
  })();

  (function(){
    let links = document.querySelectorAll('a');
    if(links) {
      Array.from(links).forEach(function(link){
        let target, rel, blank, noopener, attr1, attr2, url, isExternal;
        url = elemAttribute(link, 'href');
        isExternal = (url && typeof url == 'string' && url.startsWith('http')) && !containsClass(link, 'nav_item') && !isChild(link, ['.archive', '.article', '.post_nav', '.pager']) ? true : false;
        if(isExternal) {
          target = 'target';
          rel = 'rel';
          blank = '_blank';
          noopener = 'noopener';
          attr1 = elemAttribute(link, target);
          attr2 = elemAttribute(link, noopener);
          attr1 ? false : elemAttribute(link, target, blank);
          attr2 ? false : elemAttribute(link, rel, noopener);
        }
      });
    }
  })();

  function loadSvg(file, parent, path = 'icons/') {
    const link = `${parentURL}${path}${file}.svg`;
    fetch(link)
    .then((response) => {
      const data = response.status == 200 ? response.text() : "";
      return data;
    })
    .then((data) => {
      parent.innerHTML = data;
    });
  }

  let headingNodes = [], results, link, icon, current, id,
  tags = ['h2', 'h3', 'h4', 'h5', 'h6'];

  current = document.URL;

  tags.forEach(function(tag){
    results = document.getElementsByTagName(tag);
    Array.prototype.push.apply(headingNodes, results);
  });

  headingNodes.forEach(function(node){
    link = createEl('a');
    link.className = 'link';
    id = node.getAttribute('id');
    loadSvg('link', link, 'images/icons/')
    if(id) {
      link.href = `${current}#${id}`;
      node.appendChild(link);
      pushClass(node, 'link_owner');
    }
  });

  function copyToClipboard(str) {
    // Create a <textarea> element
    const el = createEl('textarea');
    // Set its value to the string that you want copied
    el.value = str;
    // Make it readonly to be tamper-proof
    el.setAttribute('readonly', '');
    // Move outside the screen to make it invisible
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    // Append the <textarea> element to the HTML document
    document.body.appendChild(el);
    // Check if there is any content selected previously
    const selected =
    document.getSelection().rangeCount > 0
    ? document.getSelection().getRangeAt(0)   // Store selection if found
    : false;                                  // Mark as false to know no selection existed before
    el.select();                              // Select the <textarea> content
    document.execCommand('copy'); // Copy - only works as a result of a user action (e.g. click events)
    document.body.removeChild(el);                  // Remove the <textarea> element
    if (selected) {                                 // If a selection existed before copying
      document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
      document.getSelection().addRange(selected);   // Restore the original selection
    }
  };

  (function copyHeadingLink() {
    let deeplink = 'link';
    let deeplinks = document.querySelectorAll(`.${deeplink}`);
    if(deeplinks) {
      document.body.addEventListener('click', function(event)
      {
        let target = event.target;
        if (target.classList.contains(deeplink) || target.parentNode.classList.contains(deeplink)) {
          event.preventDefault();
          let newLink = target.href != undefined ? target.href : target.parentNode.href;
          copyToClipboard(newLink);
        }
      });
    }
  })();

  (function copyLinkToShare() {
    let  copy, copied, excerpt, isCopyIcon, isInExcerpt, link, page, postCopy, postLink, target;
    copy = 'copy';
    copied = 'copy_done';
    excerpt = 'excerpt';
    postCopy = 'post_copy';
    postLink = 'post_card';

    doc.addEventListener('click', function(event) {
      target = event.target;
      const isInCopyIcon = target.closest(`.${copy}`)
      isCopyIcon = isTarget(target,copy);
      isInExcerpt = containsClass(target, postCopy);
      if (isCopyIcon) {
        event.preventDefault();
        if (isInExcerpt) {
          link = target.closest(`.${excerpt}`).previousElementSibling;
          link = containsClass(link, postLink)? elemAttribute(link, 'href') : false;
        } else {
          link = window.location.href;
        }
        if(link) {
          copyToClipboard(link);
          isInCopyIcon ? pushClass(isInCopyIcon, copied): pushClass(target, copied);
        }
      }
    });
  })();

  (function hideAside(){
    let aside, title, posts;
    aside = elem('.aside');
    title = aside ? aside.previousElementSibling : null;
    if(aside && title.nodeName.toLowerCase() === 'h3') {
      posts = Array.from(aside.children);
      posts.length < 1 ? title.remove() : false;
    }
  })();

  (function goBack() {
    let backBtn = elem('.btn_back');
    let history = window.history;
    if (backBtn) {
      backBtn.addEventListener('click', function(){
        history.back();
      });
    }
  })();

  const light = 'lit';
  const dark = 'dim';
  const storageKey = 'colorMode';
  const key = '--color-mode';
  const data = 'data-mode';
  const bank = window.localStorage;

  function currentMode() {
    let acceptableChars = light + dark;
    acceptableChars = [...acceptableChars];
    let mode = getComputedStyle(doc).getPropertyValue(key).replace(/\"/g, '').trim();

    mode = [...mode].filter(function(letter){
      return acceptableChars.includes(letter);
    });

    return mode.join('');
  }

  function changeMode(isDarkMode) {
    if(isDarkMode) {
      bank.setItem(storageKey, light)
      elemAttribute(doc, data, light);
    } else {
      bank.setItem(storageKey, dark);
      elemAttribute(doc, data, dark);
    }
  }

  (function lazy() {
    function lazyLoadMedia(element) {
      let mediaItems = elems(element);
      if(mediaItems) {
        Array.from(mediaItems).forEach(function(item) {
          item.loading = "lazy";
        });
      }
    }
    lazyLoadMedia('iframe');
    lazyLoadMedia('img');
  })();

  function setUserColorMode(mode = false) {
    const isDarkMode = currentMode() == dark;
    const storedMode = bank.getItem(storageKey);
    if(storedMode) {
      if(mode) {
        changeMode(isDarkMode);
      } else {
        elemAttribute(doc, data, storedMode);
      }
    } else {
      if(mode === true) {
        changeMode(isDarkMode)
      }
    }
  }

  setUserColorMode();

  doc.addEventListener('click', function(event) {
    let target = event.target;
    let modeClass = 'color_choice';
    let isModeToggle = containsClass(target, modeClass);
    if(isModeToggle) {
      setUserColorMode(true);
    }
  });
})();

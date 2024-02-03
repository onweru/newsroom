# Newsroom Theme

This is a simple, minimalistic theme, which is inspired by [Apple's Newsroom page](https://www.apple.com/newsroom/). It uses *grid css*, *flexbox* & js (no jQuery, or related libraries).

![Hugo Newsroom Theme](https://raw.githubusercontent.com/onweru/newsroom/master/images/screenshot.png)

## Features

* Blog
* Modern
* Responsive
* Deeplinks
* Dark Mode
* Supports native lazy loading of images & iframes
* Syntax highlighting

### Deeplinks

For all content published using markdown, deeplinks will be added to the pages so that you can share with precision 😃 Just   hover on a heading and the link button will pop. Click it to copy.

## Install Newsroom Theme

__Note:__ Newsroom uses is styled in sass. Thefore, __hugo-extended version__ must be installed on your system.

### Option 1: Add Newsroom as a git submodule

Add this theme as a Git submodule inside your Hugo site folder:

```bash
git submodule add https://github.com/onweru/newsroom.git themes/newsroom
```

### Option 2: Add Newsroom as a hugo module __(Recommended)__

In your config.toml file, set `theme` field value as follows

```toml
theme = ["github.com/onweru/newsroom"]
```

Then run

```
hugo mod init yourWebsiteName && hugo mod get -u .
```

### Option 3: Install Newsroom into your theme directory __(Least diserable)__

From the root of your Hugo website run:

```
git clone https://github.com/onweru/newsroom themes/newsroom
```

In your config.toml file, set `theme` field value as follows

```toml
theme = "newsroom"
```


## Configuration

You can configure the site as follows:

1. **General Information**

    Use `config.toml` file.

2. **menu**, **footer**

    See the yaml files inside the `data/` directory.

## Start publishing

Follow the `exampleSite/`; specifically, the [content](https://github.com/onweru/newsroom/tree/master/exampleSite/content/post) directory

### Dark Mode

Today, operating systems have a system-wide __light ~ dark mode__ switch. Your website will adapt to the user's preferred lighting mode. Still, if the user wants to opt in or out of darkmode, there's a UI control for that too in the menu 😊.

![Dark Mode](https://raw.githubusercontent.com/onweru/newsroom/master/images/screenshot-dark.png)

#### Set a default lighting mode

Using your site's config.toml file, set the value of `defaultMode` to either `"dark"` or `"light"`.

If your site is built from a copy of the exampleSite, the field is already included; you only need to uncomment and set its value.

> The UI control for toggling darkmode will remain in place. This way, the user can decide which mode they would like to use while browsing your website

### Custom 404 Page

![404 page](https://raw.githubusercontent.com/onweru/newsroom/master/images/404.png)

### Syntax highlighting

![Syntax Highlighting](https://raw.githubusercontent.com/onweru/newsroom/master/images/syntax.png) 

If you wish, you can opt to [use Chroma](./exampleSite/config.toml#L17-L27).

### I want to use disqus

If you like, you could [use disqus on your site](https://github.com/onweru/newsroom/issues/2). To enable disqus on your site, simply, add the line below to you `config.toml` file. If you're working off the [exampleSite](https://github.com/onweru/newsroom/tree/master/exampleSite), the line is [already there](https://github.com/onweru/newsroom/blob/ad9b7a9f7ea266b539f846a2f3bdf080e648bb84/exampleSite/config.toml#L15-L16); just uncomment it.

```toml
disqusShortname = "yourdiscussshortname"
```
> Remember to edit the `yourdiscussshortname` appropriately.

From your disqus dashboard, set your scripts `color scheme` to __auto__. See screenshot below

![](https://raw.githubusercontent.com/onweru/newsroom/master/images/disqus-color-scheme.png)

## Custom Shortcodes

This theme ships with __2 custom shortcodes__ (they both use positional parameters):

1. __Video__
    This shortcode can be used to embed a youtube video with custom styling. It takes a solo positional parameter.

    ```
    ...
    {{< video "youtubeVideoID" >}}
    ...
    ```

2. __Picture__
    You want to use darkmode images when darkmode is enabled on a device and a regular image on lightmode? It takes 3 positional parameter

    Store these images in the `static/images` directory.
    ```
    ...
    {{< picture "lightModeImage.png" "darkModeImage.png" "Image alt text" >}}
    ...
    ```

## From the same creator

1. [Clarity Theme](https://github.com/chipzoller/hugo-clarity)
2. [Compose Theme](https://github.com/onweru/compose)
3. [Swift Theme](https://github.com/onweru/hugo-swift-theme)
4. [Browse](https://github.com/onweru/browse)

## License

This theme is available under the [MIT license](https://github.com/onweru/newsroom/blob/master/LICENSE.md).

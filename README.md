# Newsroom Theme

This is a simple, minimalistic theme, which is inspired by [Apple's Newsroom page](https://www.apple.com/newsroom/). It uses *grid css*, *flexbox* & js (no jQuery, or related libraries).

![Hugo Newsroom Theme](https://github.com/onweru/newsroom/blob/master/images/screenshot.png)

## Features

* Blog
* Modern
* Responsive
* Deeplinks
* Dark Mode
* Supports native lazy loading of images & iframes
* Syntax highlighting

### Deeplinks

For all content published using markdown, deeplinks will be added to the pages so that you can share with precision :smiley: Just   hover on a heading and the link button will pop. Click it to copy.

## Installation

Add this theme as a Git submodule inside your Hugo site folder:

```bash
git submodule add https://github.com/onweru/newsroom.git themes/newsroom
```

> Theme hugo sass and hugo-extended version.

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

![Dark Mode](https://github.com/onweru/newsroom/blob/master/images/screenshot-dark.png)

#### How do I disable dark mode?

Under `params` add `disableDarkMode = true` to your `config.toml` file. If your site is based on the exampleSite, the value is already included; you only need to uncomment it.

> ⚠️ If you disable darkmode, the UI control for toggling darkmode will remain in place. This way, the user can decide which mode they would like to use while browsing your website

### Custom 404 Page

![404 page](https://github.com/onweru/newsroom/blob/master/images/404.png)

### Syntax highlighting

![404 page](https://github.com/onweru/newsroom/blob/master/images/syntax.png) 

If you wish, you can opt to [use Chroma](./exampleSite/config.toml#L17-L27).

### I want to use disqus

If you like, you could [use disqus on your site](https://github.com/onweru/newsroom/issues/2). To enable disqus on your site, simply, add the line below to you `config.toml` file. If you're working off the [exampleSite](https://github.com/onweru/newsroom/tree/master/exampleSite), the line is [already there](https://github.com/onweru/newsroom/blob/ad9b7a9f7ea266b539f846a2f3bdf080e648bb84/exampleSite/config.toml#L15-L16); just uncomment it.

```toml
disqusShortname = "yourdiscussshortname"
```
> Remember to edit the `yourdiscussshortname` appropriately.

From your disqus dashboard, set your scripts `color scheme` to __auto__. See screenshot below

![](https://github.com/onweru/newsroom/blob/master/images/disqus-color-scheme.png)

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

## License

This theme is available under the [MIT license](https://github.com/onweru/newsroom/blob/master/LICENSE.md).

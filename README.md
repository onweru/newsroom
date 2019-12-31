# Newsroom Theme

This a simple, minimalistic theme, which is inspired by [Apple's Newsroom page](https://www.apple.com/newsroom/). You won't find a single reference of monolithic libraries such as `jquery`, `bootstrap`, `bulma`.

All the templates herein use *grid css*, *flexbox* & *vanilla js*. You may,however, proceed and tweak everything as you wish.

![Hugo Newsroom Theme](https://github.com/onweru/newsroom/blob/master/images/screenshot.png)

## Features

* Blog
* Modern
* Responsive
* Deeplinks
* Dark Mode
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

You can configure the site using as follows:

1. **General Information**

    Use the file `config.toml`.

2. **menu**, **footer**

    See the **data** files inside the `data/` directory.

## Start publishing

Follow the `exampleSite/`; specifically, the [content](https://github.com/onweru/newsroom/tree/master/exampleSite/content/post) directory

### Dark Mode

Today most operating systems & browsers support dark mode. Like twitter, which automatically turns into dark mode when the user chooses darkmode, this theme does the same thing.

If the user wants to opt in or out of darkmode, there's a UI control for that too in the menu 😊.

![Dark Mode](https://github.com/onweru/newsroom/blob/master/images/screenshot-dark.png)

### Custom 404 Page

| Normal Mode | Dark Mode |
|--- | ---|
| ![404 page](https://github.com/onweru/newsroom/blob/master/images/404.png) | ![404 page on dark Mode](https://github.com/onweru/newsroom/blob/master/images/404-dark.png)|

### Syntax highlighting

| Normal Mode | Dark Mode |
|--- | ---|
| ![404 page](https://github.com/onweru/newsroom/blob/master/images/syntax.png) | ![404 page on dark Mode](https://github.com/onweru/newsroom/blob/master/images/syntax-dark.png)|

Depending on your fancy, you can opt to [use Chroma](./exampleSite/config.toml#L17-L27).

### I want to use disqus

Some folks may want to use disqus on their site. In fact, there [was an issue](https://github.com/onweru/newsroom/issues/2) for that express purpose.

To enable disqus on your site, simply, add the line below to you `config.toml` file. If you're working off the [exampleSite](https://github.com/onweru/newsroom/tree/master/exampleSite), the line is [already there](https://github.com/onweru/newsroom/blob/ad9b7a9f7ea266b539f846a2f3bdf080e648bb84/exampleSite/config.toml#L15-L16); just uncomment it.

```toml
disqusShortname = "yourdiscussshortname"
```
> remember to edit the `yourdiscussshortname` appropriately.

From your disqus dashboard, set your scripts `color scheme` to __auto__. See screenshot below

![](https://github.com/onweru/newsroom/blob/master/images/disqus-color-scheme.png)

## From the same creator

[Swift Theme](https://github.com/onweru/hugo-swift-theme)

## License

This theme is available under the [MIT license](https://github.com/onweru/newsroom/blob/master/LICENSE.md).

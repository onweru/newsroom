# Newsroom Theme

This theme is inspired by [Apple's Newsroom page](https://www.apple.com/newsroom/).

At its core, it's minimalistic; it doesn't rely on monolithic libraries such e.g jquery, bootstrap. Instead, it uses *grid css*, *flexbox* & *vanilla js* to facilitate the `features` outlined below:

![Hugo Newsroom Theme](https://github.com/onweru/hugo-newsroom-theme/blob/master/images/screenshot.png)

## Features

* Blog
* Modern
* Responsive
* Deeplinks
* Dark Mode

### Deeplinks

For all content published using markdown, deeplinks will be added to the pages so that you can share with precision :smiley: Just   hover on a heading and the link button will pop. Click it to copy.

### Dark Mode

Today most operating systems & browsers support dark mode. Like twitter, which automatically turns into dark mode when the user chooses darkmode, this theme does the same thing.

![Dark Mode](https://github.com/onweru/hugo-newsroom-theme/blob/master/images/screenshot-dark.png)

## Installation

Add this theme as a Git submodule inside your Hugo site folder:

```bash
git submodule add https://github.com/onweru/hugo-newsroom-theme.git themes/hugo-newsroom-theme
```

> Theme hugo sass and hugo-extended version.

## Configuration

You can configure the site using as follows:

1. **General Information**

    Use the file `config.toml`.

2. **menu**, **footer**

    See the **data** files inside the `data/` directory.

> Follow the `exampleSite/`.

## License

The code is available under the [MIT license](https://github.com/onweru/hugo-newsroom-theme/blob/master/LICENSE.md).

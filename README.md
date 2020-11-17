# QAware Blog Theme

This is the Hugo blog theme for the [QAware Blog](https://blog.qaware.de).

It is based on the [Hugo Newsroom](https://github.com/onweru/newsroom) theme and adjusted to look like [QAware Website](https://www.qaware.de).


## Features

* Responsive
* Deeplinks
* Syntax highlighting 

### Deeplinks

For all content published using markdown, deeplinks will be added to the pages so that you can share with precision :smiley: Just   hover on a heading and the link button will pop. Click it to copy.

## Installation

Add this theme as a Git submodule inside your Hugo site folder:

```bash
git submodule add https://github.com/qaware/qaware-blog-theme.git themes/qaware-blog-theme
```

> Theme hugo sass and hugo-extended version.

## Configuration

You can configure the site as follows:

1. **General Information**

    Use `config.toml` file.

2. **menu**, **footer**

    See the yaml files inside the `data/` directory.

## Start publishing

A good example is the actual [QAware Blog Source](https://github.com/qaware/qaware-blog-source).


### Dark Mode

The original theme featured a dark mode which we removed.

### Syntax highlighting

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

This theme ships with a custom shortcode:

1. __Video__
    This shortcode can be used to embed a youtube video with custom styling. It takes a solo positional parameter.
    
    ```
    ...
    {{< video "youtubeVideoID" >}}
    ...
    ```

## License

This theme is available under the [MIT license](https://github.com/onweru/newsroom/blob/master/LICENSE.md).

+++
title = "Welcome to Hugo: A Pinned Post Example"
description = "This post demonstrates the pinned/featured post feature of the Gooy theme."
tags = ["hugo", "features", "pinned"]
date = "2024-01-15"
categories = ["Features"]
image = "/images/stuck.jpg"
pinned = true
weight = 1
+++

## What Is a Pinned Post?

A **pinned** (or featured) post appears in a dedicated section at the top of the home page,
above the regular post feed. Use it to highlight announcements, important articles, or
evergreen content you always want visitors to see first.

## How to Pin a Post

Add `pinned = true` (TOML) or `pinned: true` (YAML) to your post's front matter:

```toml
+++
title  = "My Important Announcement"
pinned = true
weight = 1          # optional: lower number = higher position
pin_expires = "2025-12-31T23:59:59Z"  # optional expiry date (RFC 3339)
+++
```

### Controlling Order

When multiple posts are pinned, their display order is determined by the standard Hugo
`weight` field.  Lower values appear first.  Posts with `weight = 0` (the default) are
sorted by date.

| `weight` | Meaning |
|----------|---------|
| `1`      | Highest priority — shown first |
| `2`      | Second position |
| `0`      | Unordered — sorted by date among other weight-0 posts |

### Automatic Expiry

Use `pin_expires` to automatically un-pin a post after a specific date:

```toml
pin_expires = "2025-06-30T00:00:00Z"
```

After that date the post reverts to a regular article in the normal feed.

### Alternative: `featured`

The `featured = true` front matter parameter is treated identically to `pinned = true`.
Use whichever feels more natural for your content.

## Configuration

In your site's `params.toml` you can set the maximum number of pinned posts shown:

```toml
pinnedPostsLimit = 3   # default is 3
```

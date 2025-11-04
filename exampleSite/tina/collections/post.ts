import { Collection } from "tinacms";

const Post: Collection = {
  name: "post",
  label: "Posts",
  path: "content/posts",
  frontmatterFormat: "toml",
  frontmatterDelimiters: "+++",
  format: "md",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "string",
      name: "author",
      label: "Author",
    },
    {
      type: "string",
      name: "categories",
      label: "Categories",
      list: true
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true
    },
    {
      type: "image",
      name: "image",
      label: "Preview Image",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
    }
  ]
};

export default Post;

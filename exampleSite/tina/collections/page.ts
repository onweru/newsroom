import { Collection } from "tinacms";

const Page: Collection = {
  name: "docs",
  label: "Docs",
  path: "content/docs",
  frontmatterFormat: "toml",
  frontmatterDelimiters: "+++",
  format: "md",
  match: {
    exclude: "_index"
  },
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

export default Page;

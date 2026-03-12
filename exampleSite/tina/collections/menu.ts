import { Collection } from "tinacms";

const Menu: Collection = {
  name: "menu",
  label: "Navigation",
  path: "data",
  format: "yaml",
  match: {
    include: "menu"
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    }
  },
  fields: [
    {
      type: "object",
      name: "main",
      label: "Main Menu",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.item };
        }
      },
      fields: [
        {
          type: "string",
          name: "item",
          label: "Label"
        },
        {
          type: "string",
          name: "url",
          label: "URL"
        },
      ]
    }
  ]
};

export default Menu;

import { Collection } from "tinacms";

const Setting: Collection = {
  name: "setting",
  label: "Theme Params",
  path: "config/_default",
  format: "toml",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    }
  },
  match: {
    include: "*params*",
  },
  fields: [
    {
      type: "string",
      name: "logo",
      label: "Logo",
      description: "Path to logo image. Leave empty to show the site title instead."
    },
    {
      type: "string",
      name: "faviconsDir",
      label: "Favicons Directory",
      description: "Path with trailing slash, e.g. images/icons/"
    },
    {
      type: "string",
      name: "blogDir",
      label: "Blog Directory",
      description: "Content directory for blog posts, e.g. posts"
    },
    {
      type: "string",
      name: "defaultMode",
      label: "Default Color Mode",
      description: "Set to \"light\" or \"dark\". Leave empty for auto (follows system preference).",
      options: ["", "light", "dark"]
    },
    {
      type: "string",
      name: "ga_analytics",
      label: "Google Analytics ID",
      description: "e.g. UA-116386578-1"
    },
    {
      type: "string",
      name: "ga_verify",
      label: "Google Site Verification",
      description: "Google Search Console verification meta tag value"
    },
    {
      type: "string",
      name: "twitter",
      label: "Twitter Handle",
      description: "e.g. @weru"
    },
    {
      type: "string",
      name: "mainSections",
      label: "Main Sections",
      list: true,
      description: "Content sections shown on the homepage, e.g. [\"blog\", \"docs\"]"
    },
  ]
};

export default Setting;

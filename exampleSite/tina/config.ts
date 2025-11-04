import { defineConfig } from "tinacms";
import Config from "./collections/config";
import Page from "./collections/page";
import Menu from "./collections/menu";
import Post from "./collections/post";
import Setting from "./collections/setting";

export default defineConfig({
  clientId: process.env.TINA_CLIENT_ID!,
  branch:
    process.env.TINA_BRANCH! || // custom branch env override
    process.env.VERCEL_GIT_COMMIT_REF! || // Vercel branch env
    process.env.HEAD!, // Netlify branch env
  token: process.env.TINA_TOKEN!,
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      Page,
      Post,
      Menu,
      Config,
      Setting,
    ],
  },
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN!,
      stopwordLanguages: ["deu", "eng", "fra", "ita", "spa", "nld"]
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
  }
});

import { defineConfig } from "tinacms";
import { careersFields } from "./templates";
import { get_in_touchFields } from "./templates";
import { introFields } from "./templates";
import { partnersFields } from "./templates";
import { servicesFields } from "./templates";
import { storyFields } from "./templates";
import { updatesFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "fcf5cfd2-dba7-499d-8234-e6e51832ceb7", // Get this from tina.io
  token: "34547ced9daeff64fbe59fb37564d183a6672164", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Sections",
        name: "sections",
        path: "_sections",
        match: {
          include: "**/*",
        },
        templates: [
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...careersFields(),
            ],
            label: "careers",
            name: "careers",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...get_in_touchFields(),
            ],
            label: "get-in-touch",
            name: "get_in_touch",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...introFields(),
            ],
            label: "intro",
            name: "intro",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...partnersFields(),
            ],
            label: "partners",
            name: "partners",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...servicesFields(),
            ],
            label: "services",
            name: "services",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...storyFields(),
            ],
            label: "story",
            name: "story",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...updatesFields(),
            ],
            label: "updates",
            name: "updates",
          },
        ],
      },
    ],
  },
});

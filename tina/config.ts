import { defineConfig } from "tinacms";
import { careersFields } from "./templates";
import { get_in_touchFields } from "./templates";
import { introFields } from "./templates";
import { partnersFields } from "./templates";
import { servicesFields } from "./templates";
import { projectsFields } from "./templates";
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
      mediaRoot: "images",
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
              ...careersFields(),
              {
                type: 'boolean',
                name: 'published',
                label: 'Published',
                ui: {
                  description: 'Check to turn this section on/off',
                }
              },
              // {
              //   type: "rich-text",
              //   name: "body",
              //   label: "Body of Document",
              //   description: "This is the markdown body",
              //   isBody: true,
              // },
            ],
            label: "Careers",
            name: "careers",
          },
          {
            fields: [
              ...get_in_touchFields(),
              {
                type: 'boolean',
                name: 'published',
                label: 'Published',
                ui: {
                  description: 'Check to turn this section on/off',
                }
              },
              // {
              //   type: "rich-text",
              //   name: "body",
              //   label: "Body of Document",
              //   description: "This is the markdown body",
              //   isBody: true,
              // },
            ],
            label: "Get in touch",
            name: "get_in_touch",
          },
          {
            fields: [
              ...introFields(),
              // {
              //   type: "rich-text",
              //   name: "body",
              //   label: "Body of Document",
              //   description: "This is the markdown body",
              //   isBody: true,
              // },
            ],
            label: "Intro",
            name: "intro",
          },
          {
            fields: [
              ...partnersFields(),
              {
                type: 'boolean',
                name: 'published',
                label: 'Published',
                ui: {
                  description: 'Check to turn this section on/off',
                }
              },
              // {
              //   type: "rich-text",
              //   name: "body",
              //   label: "Body of Document",
              //   description: "This is the markdown body",
              //   isBody: true,
              // },
            ],
            label: "Partners",
            name: "partners",
          },
          {
            fields: [
              ...servicesFields(),
              {
                type: 'boolean',
                name: 'published',
                label: 'Published',
                ui: {
                  description: 'Check to turn this section on/off',
                }
              },
              // {
              //   type: "rich-text",
              //   name: "body",
              //   label: "Body of Document",
              //   description: "This is the markdown body",
              //   isBody: true,
              // },
            ],
            label: "Services",
            name: "services",
          },
          {
            fields: [
              ...projectsFields(),
              {
                type: 'boolean',
                name: 'published',
                label: 'Published',
                ui: {
                  description: 'Check to turn this section on/off',
                }
              },
              // {
              //   type: "rich-text",
              //   name: "body",
              //   label: "Body of Document",
              //   description: "This is the markdown body",
              //   isBody: true,
              // },
            ],
            label: "Projects",
            name: "projects",
          },
          {
            fields: [
              ...storyFields(),
              {
                type: 'boolean',
                name: 'published',
                label: 'Published',
                ui: {
                  description: 'Check to turn this section on/off',
                }
              },
              // {
              //   type: "rich-text",
              //   name: "body",
              //   label: "Body of Document",
              //   description: "This is the markdown body",
              //   isBody: true,
              // },
            ],
            label: "Story",
            name: "story",
          },
          {
            fields: [
              ...updatesFields(),
              {
                type: 'boolean',
                name: 'published',
                label: 'Published',
                ui: {
                  description: 'Check to turn this section on/off',
                }
              },
              // {
              //   type: "rich-text",
              //   name: "body",
              //   label: "Body of Document",
              //   description: "This is the markdown body",
              //   isBody: true,
              // },
            ],
            label: "Updates",
            name: "updates",
          },
        ],
      },
    ],
  },
});

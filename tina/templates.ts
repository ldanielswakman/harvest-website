import type { TinaField } from "tinacms";
export function careersFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
      isTitle: true,
    },
    {
      type: "number",
      name: "order",
      label: "Order",
      required: true,
    },
    {
      type: "string",
      name: "highlight",
      label: "Highlight",
    },
    {
      type: "string",
      name: "text",
      label: "Text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "apply_email",
      label: "Email address for applications",
    },
    {
      type: "object",
      name: "positions",
      label: "Positions",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "boolean",
          name: "is_visible",
          label: "Is Visible?",
        },
        {
          type: "string",
          name: "text",
          label: "Text",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ] as TinaField[];
}
export function get_in_touchFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
      isTitle: true,
    },
    {
      type: "number",
      name: "order",
      label: "Order",
      required: true,
    },
    {
      type: "string",
      name: "highlight",
      label: "Highlight",
    },
    {
      type: "string",
      name: "email",
      label: "Email",
    },
    {
      type: "string",
      name: "address",
      label: "Address",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "linkedin_url",
      label: "Linkedin URL",
    },
  ] as TinaField[];
}
export function introFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
      isTitle: true,
    },
    {
      type: "number",
      name: "order",
      label: "Order",
      required: true,
    },
    {
      type: "string",
      name: "tagline",
      label: "Tagline",
    },
    {
      type: "string",
      name: "subtext",
      label: "Subtext",
    },
  ] as TinaField[];
}
export function partnersFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
      isTitle: true,
    },
    {
      type: "number",
      name: "order",
      label: "Order",
      required: true,
    },
    {
      type: "string",
      name: "highlight",
      label: "Highlight",
    },
    {
      type: "string",
      name: "text",
      label: "Text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "industries",
      label: "Industries",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.title}`}
        },
      },
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true,
          isTitle: true,
        },
        {
          type: "string",
          name: "text",
          label: "Text",
        },
      ],
    },
  ] as TinaField[];
}
export function servicesFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
      isTitle: true,
    },
    {
      type: "number",
      name: "order",
      label: "Order",
      required: true,
    },
    {
      type: "object",
      name: "chapters",
      label: "Chapters",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.title}`}
        },
      },
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true,
          isTitle: true,
        },
        {
          type: "string",
          name: "highlight",
          label: "Highlight",
        },
        {
          type: "string",
          name: "text",
          label: "Text",
        },
        {
          type: "object",
          name: "services",
          label: "Services",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: `${item?.title}`}
            },
          },
          fields: [
            {
              type: "string",
              name: "title",
              label: "Title",
              required: true,
              isTitle: true,
            },
            {
              type: "image",
              name: "image",
              label: "Service image",
            },
            {
              type: "string",
              name: "text",
              label: "Text",
              ui: {
                component: "textarea",
              },
            },
          ],
        },
      ],
    },
    {
      type: "string",
      name: "highlight",
      label: "Highlight",
    },
    {
      type: "string",
      name: "text",
      label: "Text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "services",
      label: "Services",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.title}`}
        },
      },
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true,
          isTitle: true,
        },
        {
          type: "image",
          name: "image",
          label: "Service image",
        },
        {
          type: "string",
          name: "text",
          label: "Text",
        },
      ],
    },
  ] as TinaField[];
}
export function projectsFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
      isTitle: true,
    },
    {
      type: "number",
      name: "order",
      label: "Order",
      required: true,
    },
    {
      type: "object",
      name: "projects",
      label: "Projects",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.title}`}
        },
      },
      fields: [
        {
          type: "image",
          name: "image",
          label: "Project image",
        },
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true,
          isTitle: true,
        },
        {
          type: "string",
          name: "text",
          label: "Text",
        },
      ],
    },
    {
      type: "string",
      name: "highlight",
      label: "Highlight",
    },
    {
      type: "string",
      name: "text",
      label: "Text",
      ui: {
        component: "textarea",
      },
    },
  ] as TinaField[];
}
export function storyFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
      isTitle: true,
    },
    {
      type: "number",
      name: "order",
      label: "Order",
      required: true,
    },
    {
      type: "string",
      name: "highlight",
      label: "Highlight",
    },
    {
      type: "string",
      name: "text",
      label: "Text",
      ui: {
        component: "textarea",
      },
    },
  ] as TinaField[];
}
export function updatesFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
      isTitle: true,
    },
    {
      type: "number",
      name: "order",
      label: "Order",
      required: true,
    },
    {
      type: "object",
      name: "updates",
      label: "Updates",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.title}`}
        },
      },
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "text",
          label: "Text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "datetime",
          name: "date",
          label: "date",
        },
      ],
    },
  ] as TinaField[];
}

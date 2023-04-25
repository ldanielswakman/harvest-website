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
    {
      type: "datetime",
      name: "date",
      label: "date",
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
    {
      type: "datetime",
      name: "date",
      label: "date",
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
      type: "datetime",
      name: "date",
      label: "date",
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
        },
      ],
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
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
        },
      ],
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
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
    {
      type: "datetime",
      name: "date",
      label: "date",
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
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
  ] as TinaField[];
}

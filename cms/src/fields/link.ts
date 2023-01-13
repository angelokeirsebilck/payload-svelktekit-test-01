import { Field, GroupField } from "payload/types";
import deepMerge from "../utilities/deepMerge";

export const appearanceOptions = {
  primary: {
    label: "Primary Button",
    value: "primary",
  },
  secondary: {
    label: "Secondary Button",
    value: "secondary",
  },
};

export type LinkAppearances = "primary" | "secondary";

type LinkType = (options?: {
  appearances?: LinkAppearances[] | false;
  disableLabel?: boolean;
  overrides?: Partial<GroupField>;
}) => Field;

const link: LinkType = ({
  appearances,
  disableLabel = false,
  overrides = {},
} = {}) => {
  let linkResult: Field = {
    name: "link",
    type: "group",
    admin: {
      hideGutter: true,
      ...(overrides?.admin || {}),
    },
    fields: [
      {
        type: "row",
        fields: [
          {
            name: "type",
            type: "radio",
            required: true,
            options: [
              {
                label: "Internal link",
                value: "reference",
              },
              {
                label: "Custom URL",
                value: "custom",
              },
            ],
            defaultValue: "reference",
            admin: {
              layout: "horizontal",
              width: "50%",
            },
          },
          {
            name: "newTab",
            label: "Open in new tab",
            type: "checkbox",
            admin: {
              width: "50%",
              style: {
                alignSelf: "flex-end",
              },
            },
          },
        ],
      },
    ],
  };

  let linkTypes: Field[] = [
    {
      name: "reference",
      label: "Document to link to",
      type: "relationship",
      relationTo: ["pages"],
      required: true,
      maxDepth: 1,
      admin: {
        condition: (_, siblingData) => siblingData?.type === "reference",
      },
    },
    {
      name: "url",
      label: "Custom URL",
      type: "text",
      required: true,
      validate: async (val, { operation, t }) => {
        var httpRegex =
          /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
        if (httpRegex.test(val)) return true;

        return t("validationMessages:urlRegEx");
      },
      admin: {
        condition: (_, siblingData) => siblingData?.type === "custom",
      },
    },
  ];

  if (!disableLabel) {
    linkTypes[0].admin.width = "50%";
    linkTypes[1].admin.width = "50%";

    linkResult.fields.push({
      type: "row",
      fields: [
        ...linkTypes,
        {
          name: "label",
          label: "Label",
          type: "text",
          required: true,
          admin: {
            width: "50%",
          },
        },
      ],
    });
  } else {
    linkResult.fields = [...linkResult.fields, ...linkTypes];
  }

  if (appearances !== false) {
    let appearanceOptionsToUse = [
      appearanceOptions.primary,
      appearanceOptions.secondary,
    ];

    if (appearances) {
      appearanceOptionsToUse = appearances.map(
        (appearance) => appearanceOptions[appearance]
      );
    }

    linkResult.fields.push({
      name: "appearance",
      type: "select",
      defaultValue: "primary",
      options: appearanceOptionsToUse,
      admin: {
        description: "Choose how the link should be rendered.",
      },
    });
  }

  return deepMerge(linkResult, overrides);
};

export default link;

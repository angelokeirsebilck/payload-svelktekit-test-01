import { Field } from "payload/types";

const SocialsList: Field = {
  name: "social",
  label: {
    en: "Socials List",
    nl: "Sociale media",
  },
  type: "array",
  fields: [
    {
      name: "social", // required
      type: "select", // required
      required: true,
      options: [
        {
          label: "Facebook",
          value: "facebook",
        },
        {
          label: "Instagram",
          value: "instagram",
        },
      ],
    },
    {
      type: "text",
      name: "url",
      required: true,
      validate: async (val, { operation, t }) => {
        var httpRegex =
          /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
        if (httpRegex.test(val)) return true;

        return t("validationMessages:urlRegEx");
      },
    },
  ],
};

export { SocialsList };

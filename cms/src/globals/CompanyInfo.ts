import { GlobalConfig } from "payload/types";

const CompanyInfo: GlobalConfig = {
  slug: "companyInfo",
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: {
            en: "Contact",
            nl: "Contact",
          },
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "email", // required
                  type: "email", // required
                  label: {
                    en: "Email",
                    nl: "E-mailadres",
                  },
                  required: true,
                  admin: {
                    width: "50%",
                  },
                },
                {
                  name: "tel",
                  type: "text",
                  required: true,
                  validate: async (val, { t }) => {
                    var telRegex =
                      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
                    if (telRegex.test(val)) return true;

                    return t("validationMessages:telRegEx");
                  },
                  label: {
                    en: "Telephonenumber",
                    nl: "Telefoonnummer",
                  },
                  admin: {
                    width: "50%",
                  },
                },
                {
                  name: "addressLine1",
                  type: "text",
                  required: true,
                  admin: {
                    width: "50%",
                  },
                },
                {
                  name: "addressLine2",
                  type: "text",
                  required: true,
                  admin: {
                    width: "50%",
                  },
                },
                {
                  name: "addressLine3",
                  type: "text",
                  required: true,
                  admin: {
                    width: "50%",
                  },
                },
              ],
            },
          ],
        },
        {
          label: {
            nl: "Logo",
            en: "Logo",
          },
          fields: [
            {
              name: "logo", // required
              label: {
                nl: "Company Logo",
                en: "Company Logo",
              },
              type: "upload", // required
              relationTo: "image", // required
              required: true,
            },
          ],
        },
      ],
    },
  ],
};

export default CompanyInfo;

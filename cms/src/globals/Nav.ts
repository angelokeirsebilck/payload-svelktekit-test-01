import { GlobalConfig } from "payload/types";

const Nav: GlobalConfig = {
  slug: "nav",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "items",
      type: "array",
      required: true,
      localized: true,
      unique: true,
      maxRows: 5,
      fields: [
        {
          name: "page",
          type: "relationship",
          relationTo: "pages",
          required: true,
        },
      ],
    },
  ],
};

export default Nav;

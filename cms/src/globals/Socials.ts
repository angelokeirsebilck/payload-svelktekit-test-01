import { GlobalConfig } from "payload/types";
import { SocialsList } from "../fields/SocialList";

const Socials: GlobalConfig = {
  slug: "socials",
  access: {
    read: () => true,
  },
  fields: [SocialsList],
};

export default Socials;

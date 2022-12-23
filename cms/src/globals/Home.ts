import { GlobalConfig } from "payload/types";
import { pageBuilder } from "../blocks";
import formatSlug from "../utlitites/formatSlug";
const Home: GlobalConfig = {
  slug: "home",
  access: {
    read: () => true,
  },
  fields: [pageBuilder],
};

export default Home;

import { GlobalConfig } from "payload/types";
import { pageBuilder } from "../blocks/PageBuilder";

const Home: GlobalConfig = {
  slug: "home",
  access: {
    read: () => true,
  },
  fields: [pageBuilder],
};

export default Home;

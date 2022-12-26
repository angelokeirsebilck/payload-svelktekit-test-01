import { buildConfig } from "payload/config";
import nestedDocs from "@payloadcms/plugin-nested-docs";
import formBuilder from "@payloadcms/plugin-form-builder";
import path from "path";
import Categories from "./collections/Categories";
import Posts from "./collections/Posts";
import Tags from "./collections/Tags";
import Users from "./collections/Users";
import Pages from "./collections/Pages";
import Nav from "./globals/Nav";
import Home from "./globals/Home";

export default buildConfig({
  serverURL: process.env.SERVER_URL,
  admin: {
    user: Users.slug,
  },
  collections: [Pages, Categories, Posts, Tags, Users],
  globals: [Nav, Home],
  localization: {
    locales: ["nl", "en"],
    defaultLocale: "nl",
    fallback: true,
  },
  typescript: {
    outputFile: path.resolve(
      __dirname,
      "../../web/src/lib/types/payload-types.ts"
    ),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [
    nestedDocs({
      collections: ["pages"],
      generateLabel: (_, doc: any) => doc.pageTitle,
      generateURL: (docs) =>
        docs.reduce((url, doc) => `${url}/${doc.slug}`, ""),
    }),
    formBuilder({
      fields: {
        text: true,
        textarea: true,
        select: true,
        email: true,
        checkbox: true,
        number: true,
        message: true,
      },
      formSubmissionOverrides: {
        access: {
          read: () => true,
        },
      },
    }),
  ],
  cors: "*",
});

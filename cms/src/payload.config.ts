import { buildConfig } from "payload/config";
import path from "path";
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";
import nestedDocs from "@payloadcms/plugin-nested-docs";
import formBuilder from "@payloadcms/plugin-form-builder";
import seo from "@payloadcms/plugin-seo";
import Categories from "./collections/Categories";
// import Posts from "./collections/Posts";
// import Tags from "./collections/Tags";
import Users from "./collections/Users";
import Pages from "./collections/Pages";
import Nav from "./globals/Nav";
import HomeGlobal from "./globals/Home";
import Image from "./collections/Image";
import File from "./collections/Files";
import { FileUpload } from "./blocks/FileUpload";
import { FileField } from "./fields/File";

export default buildConfig({
  serverURL: process.env.SERVER_URL,
  admin: {
    user: Users.slug,
  },
  collections: [Pages, Categories, Users, Image, File],
  globals: [Nav, HomeGlobal],
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
    seo({
      collections: ["pages"],
      globals: ["home"],
      uploadsCollection: "image",
      generateTitle: ({ doc }) => {
        //@ts-ignore
        return `${process.env.PAYLOAD_PUBLIC_WEBSITE_NAME} — ${doc?.pageTitle?.value}`;
      },

      generateDescription: ({ doc }) => {
        console.log(doc);
        return "test";
      },
    }),
    nestedDocs({
      collections: ["pages"],
      generateLabel: (_, doc) => doc.pageTitle as string,
      generateURL: (docs) =>
        docs.reduce((url, doc) => `${url}/${doc.slug}`, ""),
    }),
    formBuilder({
      fields: {
        text: true,
        textarea: true,
        select: true,
        email: true,
        country: false,
        state: false,
        checkbox: true,
        number: false,
        message: true,
        // fileUpload: FileUpload,
      },
    }),
    cloudStorage({
      collections: {
        image: {
          disableLocalStorage: true,
          disablePayloadAccessControl: true,
          prefix: "payloadcms/test-01/images",
          adapter: s3Adapter({
            config: {
              credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY_ID,
                secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
              },
              endpoint: process.env.S3_ENDPOINT,
              region: process.env.S3_REGION,
            },
            bucket: process.env.S3_BUCKET,
            acl: "public-read",
          }),
        },
        file: {
          disableLocalStorage: true,
          prefix: "payloadcms/test-01/files",
          adapter: s3Adapter({
            config: {
              credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY_ID,
                secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
              },
              endpoint: process.env.S3_ENDPOINT,
              region: process.env.S3_REGION,
            },
            bucket: process.env.S3_BUCKET,
            acl: "private",
          }),
        },
      },
    }),
  ],
  cors: [`${process.env.PAYLOAD_PUBLIC_WEB_URL}`],
  csrf: [`${process.env.PAYLOAD_PUBLIC_WEB_URL}`],
});

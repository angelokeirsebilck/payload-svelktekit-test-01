import express from "express";
import payload from "payload";

require("dotenv").config();
const app = express();

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});
// Initialize Payload
payload.init({
  // email: {
  //   fromName: "Admin",
  //   fromAddress: "admin@example.com",
  //   logMockCredentials: true, // Optional
  // },
  email: {
    transportOptions: {
      host: "smtp.postmarkapp.com",
      auth: {
        user: process.env.POSTMARK_TOKEN,
        pass: process.env.POSTMARK_TOKEN,
      },
      port: 587,
      secure: true, // use TLS
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
    },
    fromName: "Angelo",
    fromAddress: "info@angelokeirsebilck.be",
  },
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
  },
});

// Add your own express routes here

app.listen(3006);

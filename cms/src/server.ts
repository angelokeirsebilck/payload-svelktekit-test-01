import express from "express";
import payload from "payload";
var http = require("http");

require("dotenv").config();
const app = express();

const devEmail = {
  fromName: "Admin",
  fromAddress: "admin@example.com",
  logMockCredentials: true, // Optional
};
const productionEmail = {
  transportOptions: {
    host: "smtp.postmarkapp.com",
    auth: {
      user: process.env.POSTMARK_TOKEN,
      pass: process.env.POSTMARK_TOKEN,
    },
    port: 587,
    // secure: true, // use TLS
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  },
  fromName: "Angelo",
  fromAddress: "info@angelokeirsebilck.be",
};

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});
// Initialize Payload
payload.init({
  email: process.env.NODE_ENV == "production" ? productionEmail : devEmail,
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
  },
});

// Add your own express routes here

// app.listen(3006);

const server = http.createServer(app);

server.listen(3006, () => {
  console.log(`HTTP Server running on port 3006`);
});

const io = require("socket.io")(server, {
  cors: {
    origin: process.env.PAYLOAD_PUBLIC_WEB_URL,
  },
});

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("disconnect", () => {
    // console.log('Client disconnected')
  });
});

// You can't call io.emit directly from the payload hooks, it throws errors.
// As a workaround, you can set up a simple endpoint that emits the update
app.post("/updatePreview", (req, res) => {
  console.log("update preview called");
  io.emit("update");
  res.sendStatus(200);
});

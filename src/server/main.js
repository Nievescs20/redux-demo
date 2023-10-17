const express = require("express");
const ViteExpress = require("vite-express");

const app = express();

app.use("/api", require("./api"));

ViteExpress.listen(app, 9000, () =>
  console.log("Server is listening on port 3000...")
);

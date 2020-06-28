"use strict";

const functions = require("firebase-functions");
const next = require("next");

const dir = __dirname + "/app";
const app = next({ dev: false, dir, conf: { distDir: "next" } });
const handle = app.getRequestHandler();

exports.next = functions.https.onRequest(async (req, res) => {
  await app.prepare();
  handle(req, res);
});

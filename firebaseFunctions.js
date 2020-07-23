const { join } = require("path");
const { https } = require("firebase-functions");
const { default: next } = require("next");

const isDev = process.env.NODE_ENV !== "production";
const nextjsDistDir = join("src", require("./src/next.config.js").distDir);

const nextjsServer = next({
  dev: isDev,
  quiet: true,
  conf: {
    distDir: nextjsDistDir
  }
});
const nextjsHandle = nextjsServer.getRequestHandler();

exports.nextjsFunc = https.onRequest((req, res) => {
  res.set("Cache-Control", "public, max-age=86400, s-maxage=604800");
  return nextjsServer.prepare().then(() => nextjsHandle(req, res));
});

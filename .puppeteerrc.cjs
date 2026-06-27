/**
 * Puppeteer is only used locally for screenshots (a devDependency).
 * Skip the Chrome download during install so Railway's Nixpacks build
 * (which has no `unzip` binary) doesn't fail extracting the bundled browser.
 */
module.exports = {
  skipDownload: true,
};

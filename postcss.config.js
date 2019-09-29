const production = !process.env.ROLLUP_WATCH;
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    require("postcss-import")(),
    require("tailwindcss"),
    require("autoprefixer"),
    // Only purge css on production
    production &&
      purgecss({
        content: ["./**/*.html", "./**/*.svelte"],
        defaultExtractor: extractor
      })
  ]
};

function extractor(content) {
  const matches = content.match(/[A-Za-z0-9-_:/]+/g) || [];
  const res = matches.map(match => {
    if (match.startsWith("class:")) {
      return match.split(":")[1];
    }
    return match;
  });
  return res;
}

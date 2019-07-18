const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-recipe-template-js": hot(preferDefault(require("/Users/ethan/gatsby-airtable-100/src/templates/recipeTemplate.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ethan/gatsby-airtable-100/src/pages/index.js")))
}


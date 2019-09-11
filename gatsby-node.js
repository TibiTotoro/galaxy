/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~c": path.resolve(__dirname, "src/components"),
        "~p": path.resolve(__dirname, "src/pageComponents"),
        "~l": path.resolve(__dirname, "src/layout"),
        "~s": path.resolve(__dirname, "src/styles"),
        "~store": path.resolve(__dirname, "src/stores"),
      }
    }
  });
};

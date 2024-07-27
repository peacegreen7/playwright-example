const cucumberConfig = require('./cucumber.js');

module.exports = {
  default: {
    ...cucumberConfig,
    paths: [
      "src/test/demo/features/**/*.feature"  // Path to your feature files
    ],
    require: [
      "dist/test/demo/steps/**/*.js",  // Path to your compiled step definition files
      "dist/test/commons/hooks.js" // Path to compiled hooks"
    ]
  }
};
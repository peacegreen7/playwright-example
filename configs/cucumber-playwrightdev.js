const cucumberConfig = require('./cucumber.js');

module.exports = {
  default: {
    ...cucumberConfig,
    paths: [
      "src/test/playwright-dev/features/**/*.feature"  // Path to your feature files
    ],
    require: [
      "dist/test/playwright-dev/steps/**/*.js",  // Path to your compiled step definition files
      "dist/test/commons/hooks.js" // Path to compiled hooks"
    ],
    format: ['json:reports/cucumber_report.json']
  }
};
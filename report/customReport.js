// @ts-check

//** @implements {import('@playwright/test/reporter').Reporter} */
class MyReporter {

  onBegin(config, suite) {
    // send the data into kibana/grafana/3rd party in-house / other services
    console.log(`Starting the run with ${suite.allTests().length} tests`);
    console.log(`Send log to grafana`);
  }

  onTestBegin(test) {
    console.log(`Starting test ${test.title} @${new Date()}`);
  }

  onTestEnd(test, result) {
    console.log(`Finished test ${test.title}: ${result.status}`);
  }

  onEnd(result) {
    console.log(`Finished the run: ${result.status}`);
  }
}

module.exports = MyReporter;
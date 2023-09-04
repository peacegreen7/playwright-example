// @ts-check
const { test, expect } = require('@playwright/test');

test('Test A', async({request}) => {
  await waitForOneSecond();
  console.log ('Test A')
})

test('Test B', async({request}) => {
    await waitForOneSecond();
    console.log ('Test B')
})

test('Test C', async({request}) => {
    await waitForOneSecond();
    console.log ('Test C')
})
  
function waitForOneSecond() {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve('Done')
        }, 1000)
    })
}

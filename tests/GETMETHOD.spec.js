// @ts-check
const { test, expect } = require('@playwright/test');

test('should be able to send a GET METHOD request', async({request}) => {

  let response = await request.fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "get"
  })
  
  const resJSON = await response.json()
  // console.log(resJSON)
  
  // const resBody = await response.body()
  // // console.log(resBody)
  // console.log(JSON.parse(resBody))
  
  const status = response.status()
  console.log(status)
  
  //verification
  expect(status).toBe(200)
  expect(resJSON.length).toBeGreaterThan(99)
  expect(resJSON.length).toBeGreaterThan(100)
  
  
})

const { test, expect } = require('@playwright/test');

test('', async ({request}) => {
  // construct the data 
  const url = 'https://jsonplaceholder.typicode.com/posts/1';
  
  // send DELETE request
  const response = await request.delete(url)
  
  // verify status of response
  expect(response.status()).toBe(200)
})


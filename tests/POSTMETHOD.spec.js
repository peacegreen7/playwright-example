const { test, expect } = require("@playwright/test")

test("should be able create new post", async ({request}) => {

  const url = "https://jsonplaceholder.typicode.com/posts";
  // const headersContent = {
  //   'Content-type': 'application/json; charset=UTF-8'
  // }
  const postContent = { 
      title: 'foo',
      body: 'bar',
      userId: 1
  }
  
  const options = {
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    data: postContent
  }
  
  let response = await request.post(url, options)
  let responseBody = await response.json()
  console.log(responseBody)
  console.log(response.status())
  
  // verification
  expect(response.status()).toBe(201);
  const {title, body, userId, id} = responseBody;
  expect(title).toBe(postContent.title);
  expect(body).toBe(postContent.body);
  expect(id).toBeTruthy();
})
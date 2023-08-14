const { test, expect } = require("@playwright/test")
const fs = require('fs')
const path = require('path')
const dataFileLocation = path.resolve(__dirname, "../test-data/postContent.json")
const postContent = JSON.parse(fs.readFileSync(dataFileLocation))
const mulDataFileLocation = path.resolve(__dirname, "../test-data/postContentMulti.json")
const MultiPostContent = JSON.parse(fs.readFileSync(mulDataFileLocation))
    

test("should be able create new post with json data", async ({request}) => {

  const url = "https://jsonplaceholder.typicode.com/posts";
  
  const options = {
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    data: postContent
  }
  
  console.log(postContent)
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


test("should be able create new post with Multiple json data", async ({request}) => {

  const url = "https://jsonplaceholder.typicode.com/posts";
  
  for (let postContent of MultiPostContent){
    const options = {
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      data: postContent
    }
    
    console.log(postContent)
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
  }
})
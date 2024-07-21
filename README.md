# playwright-example

## Getting Started
### 1. Install Extensions on Visual Studio Code
- ***Playwright Test for VSCode***
- ***Cucumber for Visual Studio Code***

### 2. Install Node.js
Visit the official Node.js website at https://nodejs.org/.
### 3. Install Playwright
```npm init playwright@latest```
### 4. Install Cucumber Plugin
> 4.1 Install dependencies
```sh
npm i @cucumber/cucumber -D
npm i ts-node -D
npm i cross-env
npm i dotenv
```
> Note: ***ts-node*** is a TypeScript execution environment for **Node.js**.

### 5. Project structure
- Create a features folder that describes the behavior you want to test under src\test folder.
- Create a steps folder that contains the step definitions under src\test folder.

### 6. Run Commands
Inside project directory, you can run several commands:

  ```npx playwright test``` <br />
> Runs the end-to-end tests.

  ```npx playwright test --ui``` <br />
> Starts the interactive UI mode.

  ```npx playwright test --project=chromium``` <br />
> Runs the tests only on Desktop Chrome.

  ```npx playwright test example``` <br />
> Runs the tests in a specific file.

  ```npx playwright test --debug```
 > Runs the tests in debug mode.

```npx playwright codegen```
 > Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

And check out the following files:
  - ./e2e/example.spec.ts -> Example end-to-end test
  - ./tests-examples/demo-todo-app.spec.ts -> Demo Todo App end-to-end tests
  - ./playwright.config.ts -> Playwright Test configuration


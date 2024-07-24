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
- Create a config folder that contains the config files
- Directory Structure
```bash
project-root/
├── dist/
│   └── test/
│       └── demo/
│           └── steps/
│               └── steps.js
├── src/
│   └── test/
│       └── demo/
│           ├── features/
│           │   └── my-feature.feature
│           └── steps/
│               └── steps.ts
├── configs/
│   ├── cucumber-demo.js
│   └── cucumber.js
├── tsconfig.json
├── package.json
```

### 6. Add scripts for run test in file ***package.json***
```json
"scripts": {
    "build": "tsc", // This is the build script using TypeScript Compiler
    "test": "cross-env npm run build && node run-cucumber.js"
  }
```
The TypeScript Compiler (tsc) compiles TypeScript files (.ts) into JavaScript files (.js). The configuration for this process is specified in the ***tsconfig.json*** file. </br>

### 7. Run Commands
```sh
npm run build; SERVICE=<service-name> npm run test
```
# Setup NodeJS project environment

This sample project use editorconfig and eslint for the example. And you need to install nvm to run your NodeJS environment

## install NVM
install the [nvm](https://github.com/nvm-sh/nvm). After you install the nvm, you could install the nodeJS environment with the version you want. And run the npm init to auto-create the package.json file.

## install Editor Config
- install the editorconfig plugin, there are two ways you can install it.
    - [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
    - npm install -g editorconfig
- Create an `.editorconfig` file into the root folder.
    - you could check the settings by [this](https://editorconfig.org/)

## install Eslint
- install the eslint plugin, and the [reference](https://noob.tw/eslint/)
  - eslint for VSCode, you could search eslint from VSCode marketplace
  - npm install -g eslint

- After you install eslint, you should run `eslint --init`.

## Settings
copy the .env.example file to .env file
  - cp .env.example .env
  - You could change the PORT for the server in .env file
Or you could simply execute node instruction by
  - $ node src/app.js -p {Your PORT}
  - or $ nodemon src/app.js -p {Your PORT}
Or you could pass the PORT option on the Dockerfile by
  - CMD [ "node", "src/app.js", "-p", {YOUR_PORT} ]

## Run
- There are two ways you could run the server, the first one is using the npm
  - $ npm run nodemon
- The second one is using the Dockerfile
  - $ docker build --tag nodejs-env:1.0 .
  - $ docker run --publish 8888:8888 --detach --name nodejs-env nodejs-env:1.0

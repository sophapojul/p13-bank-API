<div align="center">
  <img src="https://user.oc-static.com/upload/2020/08/14/1597410191519_image2.png" width="60%">
</div>
<div align="center">
<h1> Web application with React and Redux</h1>
</div>

This is a two-phase project:

1. User authentification :

- Create the complete and responsive web application with React.
- Use Redux to manage the state of the entire application.
- What the app should do:
  - User can visit homepage
  - User can login to the system
  - User can log out of the system
  - User can only see their own profile information after successfully logging in
  - The user can modify the profile and keep the data in the database.

2. Transactions

- Provide a document describing the proposed APIs for transactions, following Swagger's guidelines. Among the key elements to specify for each endpoint of the API will be:
  - The HTTP method (e.g. GET, POST, etc.)
  - The route (e.g.: /store/inventory)
  - The description of what the endpoint is (e.g. Return of pet inventory)
  - Possible parameters to account for different scenarios (e.g. itemId (optional) = ID of the specific item to request from the inventory database).
  - The different responses with the corresponding response codes that make sense for this endpoint (ex: 404: unknown article error response).

## Getting Started

### Prequisites

Client Argent Bank uses the following tech stack:

- [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)
- [![npm version](https://img.shields.io/badge/node--lts-v18.15-339933?logo=node.js&color=339933)](https://www.nodejs.org/en/download) [Node](https://nodejs.org/en/)
- [![npm version](https://img.shields.io/npm/v/react.svg?logo=react&color=61DAFB)](https://www.npmjs.com/package/react) [React](https://reactjs.org/)

- [![npm version](https://img.shields.io/npm/v/react-router.svg?logo=reactrouter&color=CA4245)](https://www.npmjs.com/package/react-router) [React router](https://reactrouter.com/en/main)

- [![npm](https://img.shields.io/npm/v/redux.svg?logo=redux&color=764ABC)](https://www.npmjs.com/package/redux) [Redux](https://redux.js.org/)

- [![npm](https://img.shields.io/npm/v/react-hook-form.svg?logo=reacthookform&color=EC5990)](https://www.npmjs.com/package/react-hook-form) [React hook form](https://www.react-hook-form.com/)

- [![npm version](https://img.shields.io/npm/v/typescript.svg?logo=typescript&color=3178C6)](https://www.npmjs.com/package/typescript) [Typescript](https://www.typescriptlang.org/)
- styles with [Sass](https://sass-lang.com/) ![npm](https://img.shields.io/npm/v/sass?color=CC6699) and [CSS Modules](https://github.com/css-modules/css-modules)
- linter [eslint](https://eslint.org/) ![npm](https://img.shields.io/npm/v/eslint?logo=eslint) configuration [airbnb](https://airbnb.io/javascript/) <img  src="https://avatars.githubusercontent.com/u/698437?s=200&v=4" width="20" align="center">
- formater [Prettier](https://prettier.io/) ![npm](https://img.shields.io/npm/v/prettier?logo=prettier)

### Instructions

```bash
# Install dependencies
npm i

# Start local dev server
npm run dev
```

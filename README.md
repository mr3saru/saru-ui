# [SARU-UI](https://mr3saru.github.io/saru-ui)

It's a simple and faster React UI

## Installation

saru-ui is available as an [npm package](https://www.npmjs.com/package/saru-ui).

To install it, run:

```bash
  //with npm
  npm install saru-ui

  //with yarn
  yarn add saru-ui
```

## Usage

Here is a quick example to get you started, **it's all you need**:

```js
import React from 'react';
import { Button, GlobalStyles } from 'saru-ui/lib';

function App() {
  return (
    <>
      <GlobalStyles />
      <Button>
        OK
      </Button>
    </>
  );
}

export default App;
```
## What is inside?

- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled JSX](https://github.com/vercel/styled-jsx)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Available commands

- `build`: build the files in the `lib` directory
- `storybook`: run the storybook at the address `localhost:6006`
- `deploy-storybook`: deploy the storybook to the address [`https://mr3saru.github.io/saru-ui`](https://mr3saru.github.io/saru-ui)
- `prettier:check`: check formatting on all `src` directory
- `prettier:format`: formats all `src` directory

## Project structure

```
/.storybook
/lib
/src
├── index.ts
├── packages
|   ├── index.ts
|   ├── button
|   |   └── ...
├── global
|   ├── index.ts
|   ├── styles.ts
```

## License

This project is licensed under the [MIT](./LICENSE) License.

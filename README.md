## Install cypress

[Cypress typescript]
[cypress ts documentation](https://docs.cypress.io/guides/tooling/typescript-support)

- install with node
  `npm init`
  `npm install typescript --save-dev`
- create a tsconfig.json file and paste
  {
  "compilerOptions": {
  "target": "es5",
  "lib": ["es5", "dom"],
  "types": ["cypress", "node"]
  },
  "include": ["**/*.ts"]
  }

- Install and run cypress
  `npm install cypress --save-dev`
  `npx cypress open`

- Run eslint verification
  npx eslint .

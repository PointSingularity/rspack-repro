Tool versions are in `.prototools`

- Run `yarn`
- Copy `@mycompany` folder to `node_modules`
- Run `yarn build`

`Success`

Then update rspack to a newer version in `packages/app/package.json`

- Run `yarn`
- Optional: Copy `@mycompany` folder to `node_modules`
- Run `yarn build`

`Error`

If you use the commented import in `packages/app/src/index.js` instead the top one, then it works partially but it still breaks.

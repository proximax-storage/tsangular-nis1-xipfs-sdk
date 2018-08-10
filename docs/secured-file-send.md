# Send Secured File Tutorial

## Create new app

```bash
ng new angular-tour-of-heroes
```

## Add dependencies

```bash
npm install xpx-typescript-angular-sdk crypto-js fast-sha256 flatbuffers nem-sdk secrets.js-grempe text-encoding-utf-8 typescript-base64-arraybuffer bootstrap --save
```

## Add bootstrap for style

```bash
npm install bootstrap --save
```

Next, open angular.json file and add bootstrap file path to the styles section. Like,

```json
"styles": [
  "src/styles.css",
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
```


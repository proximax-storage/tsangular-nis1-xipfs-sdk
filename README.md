

# Proximax P2P Storage Typescript SDK (NIS1 Compatible Only)

![banner](https://proximax.io/wp-content/uploads/2018/03/ProximaX-logotype.png)

ProximaX is a project that utilizes the NEM blockchain technology with the IPFS P2P storage technology to form a very powerful proofing solution for documents or files which are stored in an immutable and irreversible manner, similar to the blockchain technology solutions.

# Getting started with ProximaX Typescript SDK (NIS1)

## 0. Get your XPX Test Tokens

Visit [Nem developer portal](https://nem.io/developers/) to download Nem Wallet and create new NEM account for testing

Get some XEM/XPX token from Testnet faucet at [https://proximaxfaucet20180730014353.azurewebsites.net/](https://proximaxfaucet20180730014353.azurewebsites.net/)

## 1. Setup your development environment

You need to set up your development environment before you can do anything.

Install [Node.js® and npm](https://nodejs.org/en/download/) if they are not already on your machine.

ProximaX typescript SDK is built with Typescript and Angular 6.x, please ensure that you have the latest version installed.

```bash
npm install -g typescript @angular/cli
```

For windows user

```bash
npm install --global --production windows-build-tool
```

## 2. Create a new project

```bash
ng new <project-name>
cd <project-name>
```

The Angular CLI's `new` command will set up the latest Angular build in a new project structure.

## 3. Test your project

```bash
ng serve
open browser http://localhost:4200
```

You should see the Welcome to `<project-name>` page

## 4. Install Proximax typescript SDK and its dependencies

```bash
npm install xpx-typescript-angular-sdk crypto-js fast-sha256 flatbuffers nem-library secrets.js-grempe text-encoding-utf-8 typescript-base64-arraybuffer --save
```

Note: The new @angular/cli version 6 will break all the 3rd party dependencies that using @Node.js such as nem-sdk and secret.js-grempe. Apply the fix below

- Create the patch.js in the current directory and add the content below

```node
const fs = require('fs');
const f = 'node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js';

fs.readFile(f, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/node: false/g, 'node: {crypto: true, stream: true}');

  fs.writeFile(f, result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
```

- Run the command 

```node
node patch.js
```

- Open package.json and add the following to disable all unused node_modules

```json
 "browser": {
    "fs": false,
    "path": false,
    "os": false,
    "tls": false,
    "net": false
  }
```

- Run the command 

```node
npm install

npm audit fix
```

## 5. Add ProximaX connection configure to environments variable

Open /src/environments/environment.ts and add your ProximaX configuration

```ts
export const environment = {
  production: false,
  ProximaX: {
    remoteConnection: 'https://testnet.gateway.proximax.io',
  }
};
```

Aside from the testnet connection above, you can also use the following testnet gateways.

[https://testnet1.gateway.proximax.io](https://testnet1.gateway.proximax.io)

[https://testnet2.gateway.proximax.io](https://testnet2.gateway.proximax.io)

[https://testnet3.gateway.proximax.io](https://testnet3.gateway.proximax.io)

These testnet gateways are privately hosted storage contributor nodes on the ProximaX servers. 
All of them are connected to NEM Testnet and Public IPFS network.

You also can connect to mainnet and mijinnet (NIS Mijin)

[https://mainnet.gateway.proximax.io](https://mainnet.gateway.proximax.io)

[https://mijin.gateway.proximax.io](https://mijin.gateway.proximax.io)

## 6. Setup @NgModule for Proximax remote connection

Open /src/app/app.module.ts, and specify your ProximaX connection configuration

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { PROXIMAX_REMOTE_BASE_URL, NEM_NETWORK } from 'xpx-typescript-angular-sdk';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: PROXIMAX_REMOTE_BASE_URL, useValue: environment.ProximaX.remoteConnection }, 
    { provide: NEM_NETWORK, useValue: NetworkTypes.TEST_NET }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

## 6. How to ?

- [Upload content](docs/upload-content.md)

- [Encrypt and decrypt content](docs/secured-content.md)

- [Download content](docs/encrypt-decrypt.md)


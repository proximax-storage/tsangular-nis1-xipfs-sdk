
# Proximax P2P Storage Typescript SDK (NIS1 Compatible Only)
==================================================================

![banner](https://proximax.io/wp-content/uploads/2018/03/ProximaX-logotype.png)

ProximaX is a project that utilizes the NEM blockchain technology with the IPFS P2P storage technology to form a very powerful proofing solution for documents or files which are stored in an immutable and irreversible manner, similar to the blockchain technology solutions.

# Getting started with ProximaX Typescript SDK (NIS1)

### 0. Get your XPX Test Tokens

Visit the XEM/XPX Testnet faucet at [https://proximaxfaucet20180730014353.azurewebsites.net/](https://proximaxfaucet20180730014353.azurewebsites.net/)

### 1. Setup your development environment

You need to set up your development environment before you can do anything.

Install [Node.js® and npm](https://nodejs.org/en/download/) if they are not already on your machine.

xpx-typescript-angular-sdk is build with Typescript and Angular 6.x, please ensure that you have the latest version installed.

```bash
npm install -g typescript @angular/cli
```

### 2. Create a new project

```bash
ng new <project-name>
cd <project-name>
```

The Angular CLI's `new` command will set up the latest Angular build in a new project structure.

### 3. Test your project

```bash
ng serve
open browser http://localhost:4200
```

You should see the Welcome to `<project-name>` page

### 4. Install xpx-typescript-angular-sdk and its dependencies

```bash
npm install xpx-typescript-angular-sdk crypto-js fast-sha256 flatbuffers nem-sdk secrets.js-grempe text-encoding-utf-8 typescript-base64-arraybuffer --save
```

### 5. Add ProximaX connection configure to environments variable

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

These testnet gateways are privately hosted storage contributor nodes on our ProximaX servers. 
All of them are connected to NEM Testnet and Public IPFS network.

We also have mainnet and mijinnet (NIS Mijin)

[https://mainnet.gateway.proximax.io](https://mainnet.gateway.proximax.io)
[https://mijin.gateway.proximax.io](https://mijin.gateway.proximax.io)

### 6. Setup @NgModule for Proximax remote connection

Open /src/app/app.module.ts, and specify your ProximaX connection configuration

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: [ {provide: PROXIMAX_REMOTE_BASE_URL, useValue: environment.ProximaX.remoteConnection }]
})
export class AppModule {}
```

# Basic usages

# QuickStart

### 0. Setup your development environment

You need to set up your development environment before you can do anything.

Install [Node.js® and npm](https://nodejs.org/en/download/) if they are not already on your machine.

xpx-typescript-angular-sdk is build with Typescript and Angular 6.x, please ensure that you have the latest version installed.

```bash
npm install -g typescript @angular/cli
```

### 1. Create a new project

```bash
ng new <project-name>
cd <project-name>
```

The Angular CLI's `new` command will set up the latest Angular build in a new project structure.

### 2. Test your project

```bash
ng serve
open browser http://localhost:4200
```

You should see the Welcome to `<project-name>` page

### 3. Install xpx-typescript-angular-sdk and its dependencies

```bash
npm install xpx-typescript-angular-sdk crypto-js fast-sha256 flatbuffers nem-sdk secrets.js-grempe text-encoding-utf-8 typescript-base64-arraybuffer --save
```


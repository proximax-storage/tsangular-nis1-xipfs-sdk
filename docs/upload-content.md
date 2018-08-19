# Upload Content

The following operations allow user to upload text and binary file to the Proximax storage

By default, the ProximaX gateway is set to [https://testnet2.gateway.proximax.io/](https://testnet2.gateway.proximax.io/swagger-ui.html#/)

## Uploading a text

In this section, we will upload the simple text message to the IFPF network and
announce the transaction to NEM network

- Inject RemoteUploadService into component constructor

```ts
import { Component, OnInit } from '@angular/core';

import {
  RemoteUploadService,
  UploadTextRequest,
  ResourceHashMessage
} from 'xpx-typescript-angular-sdk';

@Component({
  selector: 'app-upload-text',
  templateUrl: './upload-text.component.html',
  styleUrls: ['./upload-text.component.css']
})

export class UploadTextComponent implements OnInit{
  constructor(
    private uploadService: RemoteUploadService
  ) {}
}
```

- Create the upload text request payload and upload to IPFS network

```ts
// Prepare upload text request payload
const payload: UploadTextRequest = {
  name: 'Upload sample text to IPFS network',
  contentType: 'text/plain',
  encoding: 'utf-8',
  keywords: '', // optional
  metadata: '', // optional
  text: 'ProximaX is a project that utilizes the NEM blockchain technology with the IPFS P2P storage technology to form a very powerful proofing solution for documents or files which are stored in an immutable and irreversible manner, similar to the blockchain technology solutions.',
  senderPrivateKey: '', // enter the sender private key
  recieverPublicKey: '', // enter the reciever public key
  messageType: MessageType.PLAIN // either PLAIN or SECURE
  
};


// upload text 
this.uploadService.uploadText(payload).subscribe(response => {
 
  const nr: NemAnnounceResult = response.body;

  // return the datahash from NEM network
  // 1725f6266f70104f2ea4320ccefae6d9cb1683fb0cab4c7e6bf97ece8c7d3bc1
  console.log(nr.transactionHash.data);  
});
```

## Uploading a binary file

In this section, we will upload the image file (jpeg format) to the IFPF network and announce the transaction result to NEM network

- Inject RemoteUploadService into component constructor

```ts
import { Component, OnInit } from '@angular/core';
import { encode } from 'typescript-base64-arraybuffer';

import {
  RemoteUploadService,
  UploadBinaryRequest,
  ResourceHashMessage
} from 'xpx-typescript-angular-sdk';

@Component({
  selector: 'app-upload-text',
  templateUrl: './upload-text.component.html',
  styleUrls: ['./upload-text.component.css']
})

export class UploadBinaryComponent implements OnInit{
  constructor(
    private uploadService: RemoteUploadService
  ) {}
}
```

- Create the upload binary request payload and upload to IPFS network

```ts
// Read the image file from the input html element
// <input type="file" formControlName="fileUpload" multiple />

// data to be upload
let binaryData = [];

// use default FileReader api
const fileReader = new FileReader();

// get the single file from the fileUpload input
const file: Blob = this.fileUpload.files[0];

// read content of the file and convert to base64string
fileReader.onload = (e) => {
   const arrBuf = fileReader.result;

   // convert file content to base64
   const base64Data = encode(arrBuf);

   // convert base64Data to bytes
   for (let i = 0; i < base64Data.length; i++) {
      binaryData.push(base64Data.charCodeAt(i));
   }
}

// read content of file as arraybuffer
fileReader.readAsArrayBuffer(file);

// prepare binary request payload
const payload: UploadBinaryRequest = {
  name: 'Upload sample image file to IPFS network',
  contentType: 'image/jpeg',
  keywords: '', // optional
  metadata: '', // optional
  data: binaryData,
  senderPrivateKey: '', // enter the sender private key
  recieverPublicKey: '', // enter the reciever public key
  messageType: MessageType.PLAIN // either PLAIN or SECURE
  
};

// upload binary file 
this.uploadService.uploadBinary(payload).subscribe(response => {
 
  const nr: NemAnnounceResult = response.body;

  // return the datahash from NEM network
  // 1725f6266f70104f2ea4320ccefae6d9cb1683fb0cab4c7e6bf97ece8c7d3bc1
  console.log(nr.transactionHash.data);  
});
```

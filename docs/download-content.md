# Download content

The following operations allow user to download a content either text and binary file stored on the ProximaX storage that is rooted to a NEM Transaction. 

All downloads requires the NEM Hash as this is the main reference of the Platform to get content.

## Download PLAIN content

```ts
const payload: DownloadRequest = {
  // the nem hash identifier of the uploaded file  
  hash: '419d7b8f2a00e05a64ab84100f2d9a97bb21569b6710b227add8fa80f91abeea',
  
  // the sender public key, it is required to download the SECURE content
  senderPublicKey: '',

  // the recipient private key, it is required to download the SECURE content
  recipientPrivateKey: '',

  // the content type either PLAIN or SECURE
  messageType: MessageType.PLAIN,

  // the download type either blog or arraybuffer
  downloadType: DownloadType.BLOB
};

// download content
this.downloadService.download(payload).subscribe(blobData => {
 
    // create the download url
    const downloadUrl = window.URL.createObjectURL(blobData);
});
```

## Download SECURE content

```ts
const payload: DownloadRequest = {
  // the nem hash identifier of the uploaded file  
  hash: '419d7b8f2a00e05a64ab84100f2d9a97bb21569b6710b227add8fa80f91abeea',
  
  // the sender public key, it is required to download the SECURE content
  senderPublicKey: '3249d7b8f2a00e05a64ab84100f23d397bb21569b6710b227add8fa80f91ab333',

  // the recipient private key, it is required to download the SECURE content
  recipientPrivateKey: '419d7b8f2a00e05a64ab84100f23d397bb21569b6710b227add8fa80f91abeea',

  // the content type either PLAIN or SECURE
  messageType: MessageType.SECURE,

  // the download type either blog or arraybuffer
  downloadType: DownloadType.BLOB
};

// download content
this.downloadService.download(payload).subscribe(blobData => {
 
    // create the download url
    const downloadUrl = window.URL.createObjectURL(blobData);
});
```

## Download SECURE content with privacy strategy
```ts
const payload: DownloadRequest = {
  // the nem hash identifier of the uploaded file  
  hash: '419d7b8f2a00e05a64ab84100f2d9a97bb21569b6710b227add8fa80f91abeea',
  
  // the sender public key, it is required to download the SECURE content
  senderPublicKey: '3249d7b8f2a00e05a64ab84100f23d397bb21569b6710b227add8fa80f91ab333',

  // the recipient private key, it is required to download the SECURE content
  recipientPrivateKey: '419d7b8f2a00e05a64ab84100f23d397bb21569b6710b227add8fa80f91abeea',

  // the content type either PLAIN or SECURE
  messageType: MessageType.SECURE,

  // the download type either blog or arraybuffer
  downloadType: DownloadType.ARRAYBUFFER
};

// download secured content with privacy strategy
this.downloadService.download(payload).subscribe(data => {
    
    // the secret password
    const password = 'lkNzBmYmYyNTExZjZmNDYyZTdjYWJmNmY1MjJiYjFmZTk3Zjg2NDA5ZDlhOD';

    // use secured password privacy strategy
    const privacy = new SecuredWithPasswordPrivacy(password);
   
    // convert arraybuffer to string
    const downloadData = Converter.ab2str(data);

    // decrypt the content
    const decryptedData = privacy.decrypt(downloadData);

    // create the download url
    const downloadUrl = window.URL.createObjectURL(decryptedData);
});
```
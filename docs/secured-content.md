# Securing uploaded content with Privacy Strategies

By default, any upload content to the storage are not encrypted and can be accessed publicly. In order to secure the content being upload, there are several privacy strategies can be use to protect and secure your contents.


## Secured with NEM keys privacy strategy

This will utilise the NEM private and public key provided to encrypt the content. 

### Encrypt data
```ts 
const sampleData = 'ProximaX is an advanced extension of the Blockchain and Distributed Ledger Technology (DLT) with utility-rich services and protocols';

const senderPrivateKey = 'f7c843068db612ca44f7f7815a11eb1260c614981eefe861e11bc6888cf307d1';

const recipientPublicKey = '9a4309197988e13ecd2682b4d9f47b802bce0627a174ec5f96c184dfa6db794f';

const privacy = new SecuredWithNemKeyPrivacy(senderPrivateKey,recipientPublicKey);

// encrypt data
const encryptedData = privacy.encrypt(sampleData);

```
### Decrypt data

```ts 
const recipientPrivateKey = 'f7c843068db612ca44f7f7815a11eb1260c614981eefe861e11bc6888cf307d1';

const senderPublicKey = '9a4309197988e13ecd2682b4d9f47b802bce0627a174ec5f96c184dfa6db794f';

const privacy = new SecuredWithNemKeyPrivacy(recipientPrivateKey, rsenderPublicKey);

// encrypt data
const decryptedData = privacy.decrypt(encryptedData);

```


## Secured with password privacy strategy

This will use a password to encrypt the content. This strategy requires a minimum length of 50 characters for the password.

### Encrypt data

```ts 
const sampleData = 'ProximaX is an advanced extension of the Blockchain and Distributed Ledger Technology (DLT) with utility-rich services and protocols';

const password = 'lkNzBmYmYyNTExZjZmNDYyZTdjYWJmNmY1MjJiYjFmZTk3Zjg2NDA5ZDlhOD';

const privacy = new SecuredWithPasswordPrivacy(password);

let encryptedData;

privacy.encrypt(sampleData).subscribe(data => {
    encryptedData = data;
});

```

### Decrypt data

```ts 
const privacy = new SecuredWithPasswordPrivacy(password);

let decryptedData;

privacy.decrypt(encryptedData).subscribe(data => {
    decryptedData = data;
});

```

## Secured with Shamir Shared Secret Key

Shamir’s secret sharing is an algorithm that divides a secret into shares and distribute them to users.

Each of the users keeps a piece of the secret but will not be able to recover the original secret. 

Secret can be recovered by combining certain numbers of shares.


### Encrypt data

```ts 
const sampleData = 'ProximaX is an advanced extension of the Blockchain and Distributed Ledger Technology (DLT) with utility-rich services and protocols';

const secret = 'dhsakdhsauihcxznmneywquidkjsanjcbnxztyduisyaheqkwjncbxzcgyuiagsdiujasodjk' +
            'wqehqtsyiudhsandmbsamnbcxzygcahgisudhasnmbdmnasbcysagciugxziuhkjsbdamndnmsabfgaduishadshakdnsakdbsajbeh' +
            'wqyuieyqwiueyqwohdsanlnalsfjkhgkzgmnbcmnxzbhjgdsajgduisayiuyewquehwqkjbeqwnbdmnabsdabjshgdasudhgsuakghk' +
            'cbxzcbajsbdkasjgkjhwgquegqwbzmcbmzxn';

// The number of parts to be divided from the secret
const numShares = 5;

// The minimum number of parts use to recover the original secret
const threshold = 3;

// create shares from secret string
const secretParts = SecuredWithShamirSecretSharingPrivacy.createShares(secret, numShares, threshold);

const privacy = new SecuredWithShamirSecretSharingPrivacy(secretParts);

let encryptedData;

privacy.encrypt(sampleData).subscribe(data => {
    encryptedData = data;
});

```

### Decrypt data

```ts 
// combine secret parts to recover the original secret
const minSecretParts = [secretParts[1], secretParts[2], secretParts[4]];

const privacy = new SecuredWithPasswordPrivacy(minSecretParts);

let decryptedData;

privacy.decrypt(encryptedData).subscribe(data => {
    decryptedData = data;
});
```

### Double data encryption  

Once you encrypt your data, you need to specify the message type in the upload parameter to be PLAIN. 

If the message type in the the upload parameter is SECURE, by default, the upload API will use the NEM privacy strategy to encrypt your encrypted data before announce it to the NEM network. 

For example: 

```ts 
const sampleData = 'ProximaX is an advanced extension of the Blockchain and Distributed Ledger Technology (DLT) with utility-rich services and protocols';

const senderPrivateKey = 'f7c843068db612ca44f7f7815a11eb1260c614981eefe861e11bc6888cf307d1';

const recipientPublicKey = '9a4309197988e13ecd2682b4d9f47b802bce0627a174ec5f96c184dfa6db794f';

const privacy = new SecuredWithNemKeyPrivacy(senderPrivateKey,recipientPublicKey);

// encrypt data
const encryptedData = privacy.encrypt(sampleData);


// Prepare upload text request payload
const payload: UploadTextRequest = {
  name: 'Upload sample text to IPFS network',
  contentType: 'text/plain',
  encoding: 'utf-8',
  keywords: '', // optional
  metadata: '', // optional
  text: encryptedData,
  senderPrivateKey: senderPrivateKey, // enter the sender private key
  recieverPublicKey: recipientPublicKey, // enter the reciever public key
  messageType: MessageType.PLAIN // must be PLAIN otherwise double encryption will be executed
};


// upload text 
this.uploadService.uploadText(payload).subscribe(response => {
 
  const nr: NemAnnounceResult = response.body;

  // return the datahash from NEM network
  // 1725f6266f70104f2ea4320ccefae6d9cb1683fb0cab4c7e6bf97ece8c7d3bc1
  console.log(nr.transactionHash.data);  
});
```
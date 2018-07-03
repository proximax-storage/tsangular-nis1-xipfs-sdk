/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.model {
    /**
     * The Class GeneratedAccount.
     * @class
     */
    export class GeneratedAccount {
        /**
         * The key pair.
         */
        /*private*/ keyPair : org.nem.core.crypto.KeyPair;

        /**
         * The account.
         */
        /*private*/ account : org.nem.core.model.Account;

        /**
         * The encoded address.
         */
        /*private*/ encodedAddress : string;

        /**
         * The encoded public key.
         */
        /*private*/ encodedPublicKey : string;

        /**
         * The encoded private key.
         */
        /*private*/ encodedPrivateKey : string;

        /**
         * Gets the encoded address.
         * 
         * @return {string} the encoded address
         */
        public getEncodedAddress() : string {
            return this.encodedAddress;
        }

        /**
         * Sets the encoded address.
         * 
         * @param {string} encodedAddress the new encoded address
         */
        public setEncodedAddress(encodedAddress : string) {
            this.encodedAddress = encodedAddress;
        }

        /**
         * Gets the encoded public key.
         * 
         * @return {string} the encoded public key
         */
        public getEncodedPublicKey() : string {
            return this.encodedPublicKey;
        }

        /**
         * Sets the encoded public key.
         * 
         * @param {string} encodedPublicKey the new encoded public key
         */
        public setEncodedPublicKey(encodedPublicKey : string) {
            this.encodedPublicKey = encodedPublicKey;
        }

        /**
         * Gets the encoded private key.
         * 
         * @return {string} the encoded private key
         */
        public getEncodedPrivateKey() : string {
            return this.encodedPrivateKey;
        }

        /**
         * Sets the encoded private key.
         * 
         * @param {string} encodedPrivateKey the new encoded private key
         */
        public setEncodedPrivateKey(encodedPrivateKey : string) {
            this.encodedPrivateKey = encodedPrivateKey;
        }

        /**
         * Gets the key pair.
         * 
         * @return {org.nem.core.crypto.KeyPair} the key pair
         */
        public getKeyPair() : org.nem.core.crypto.KeyPair {
            return this.keyPair;
        }

        /**
         * Sets the key pair.
         * 
         * @param {org.nem.core.crypto.KeyPair} keyPair the new key pair
         */
        public setKeyPair(keyPair : org.nem.core.crypto.KeyPair) {
            this.keyPair = keyPair;
        }

        /**
         * Gets the account.
         * 
         * @return {org.nem.core.model.Account} the account
         */
        public getAccount() : org.nem.core.model.Account {
            return this.account;
        }

        /**
         * Sets the account.
         * 
         * @param {org.nem.core.model.Account} account the new account
         */
        public setAccount(account : org.nem.core.model.Account) {
            this.account = account;
        }

        constructor() {
            if(this.keyPair===undefined) this.keyPair = null;
            if(this.account===undefined) this.account = null;
            if(this.encodedAddress===undefined) this.encodedAddress = null;
            if(this.encodedPublicKey===undefined) this.encodedPublicKey = null;
            if(this.encodedPrivateKey===undefined) this.encodedPrivateKey = null;
        }
    }
    GeneratedAccount["__class"] = "io.nem.xpx.model.GeneratedAccount";

}


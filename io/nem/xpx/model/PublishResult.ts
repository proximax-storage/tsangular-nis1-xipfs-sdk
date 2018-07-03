/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.model {
    /**
     * The Class PublishResult.
     * @class
     */
    export class PublishResult {
        /**
         * The id.
         */
        /*private*/ id : string;

        /**
         * The Constant serialVersionUID.
         */
        static serialVersionUID : number = 1;

        /**
         * The merkle node.
         */
        /*private*/ merkleNode : Array<io.ipfs.api.MerkleNode>;

        /**
         * The multi hash.
         */
        /*private*/ multiHash : Array<io.ipfs.multihash.Multihash>;

        /**
         * The nem announce result.
         */
        /*private*/ nemAnnounceResult : org.nem.core.model.ncc.NemAnnounceResult;

        /**
         * The challenge message.
         */
        /*private*/ challengeMessage : string;

        /**
         * The created date.
         */
        /*private*/ createdDate : Date = new Date();

        /**
         * The asset id.
         */
        /*private*/ assetId : string;

        /**
         * The block id.
         */
        /*private*/ blockId : string;

        /**
         * The bd transaction.
         */
        /*private*/ bdTransaction : string;

        /**
         * The db hash.
         */
        /*private*/ dbHash : string;

        /**
         * Gets the multi hash.
         * 
         * @return {io.ipfs.multihash.Multihash[]} the multi hash
         */
        public getMultiHash() : Array<io.ipfs.multihash.Multihash> {
            return this.multiHash;
        }

        /**
         * Sets the multi hash.
         * 
         * @param {io.ipfs.multihash.Multihash[]} multiHash the new multi hash
         */
        public setMultiHash(multiHash : Array<io.ipfs.multihash.Multihash>) {
            this.multiHash = multiHash;
        }

        /**
         * Gets the asset id.
         * 
         * @return {string} the asset id
         */
        public getAssetId() : string {
            return this.assetId;
        }

        /**
         * Sets the asset id.
         * 
         * @param {string} assetId
         * the new asset id
         */
        public setAssetId(assetId : string) {
            this.assetId = assetId;
        }

        /**
         * Gets the block id.
         * 
         * @return {string} the block id
         */
        public getBlockId() : string {
            return this.blockId;
        }

        /**
         * Sets the block id.
         * 
         * @param {string} blockId
         * the new block id
         */
        public setBlockId(blockId : string) {
            this.blockId = blockId;
        }

        /**
         * Gets the bd transaction.
         * 
         * @return {string} the bd transaction
         */
        public getBdTransaction() : string {
            return this.bdTransaction;
        }

        /**
         * Sets the bd transaction.
         * 
         * @param {string} bdTransaction
         * the new bd transaction
         */
        public setBdTransaction(bdTransaction : string) {
            this.bdTransaction = bdTransaction;
        }

        /**
         * Gets the created date.
         * 
         * @return {java.util.Date} the created date
         */
        public getCreatedDate() : Date {
            return this.createdDate;
        }

        /**
         * Sets the created date.
         * 
         * @param {java.util.Date} createdDate
         * the new created date
         */
        public setCreatedDate(createdDate : Date) {
            this.createdDate = createdDate;
        }

        /**
         * Gets the db hash.
         * 
         * @return {string} the db hash
         */
        public getDbHash() : string {
            return this.dbHash;
        }

        /**
         * Sets the db hash.
         * 
         * @param {string} dbHash
         * the new db hash
         */
        public setDbHash(dbHash : string) {
            this.dbHash = dbHash;
        }

        /**
         * Gets the serialversionuid.
         * 
         * @return {number} the serialversionuid
         */
        public static getSerialversionuid() : number {
            return PublishResult.serialVersionUID;
        }

        /**
         * Gets the id.
         * 
         * @return {string} the id
         */
        public getId() : string {
            return this.id;
        }

        /**
         * Sets the id.
         * 
         * @param {string} id
         * the new id
         */
        public setId(id : string) {
            this.id = id;
        }

        /**
         * Gets the challenge message.
         * 
         * @return {string} the challenge message
         */
        public getChallengeMessage() : string {
            return this.challengeMessage;
        }

        /**
         * Sets the challenge message.
         * 
         * @param {string} challengeMessage
         * the new challenge message
         */
        public setChallengeMessage(challengeMessage : string) {
            this.challengeMessage = challengeMessage;
        }

        /**
         * Gets the nem announce result.
         * 
         * @return {org.nem.core.model.ncc.NemAnnounceResult} the nem announce result
         */
        public getNemAnnounceResult() : org.nem.core.model.ncc.NemAnnounceResult {
            return this.nemAnnounceResult;
        }

        /**
         * Sets the nem announce result.
         * 
         * @param {org.nem.core.model.ncc.NemAnnounceResult} nemAnnounceResult
         * the new nem announce result
         */
        public setNemAnnounceResult(nemAnnounceResult : org.nem.core.model.ncc.NemAnnounceResult) {
            this.nemAnnounceResult = nemAnnounceResult;
        }

        /**
         * Gets the merkle node.
         * 
         * @return {io.ipfs.api.MerkleNode[]} the merkle node
         */
        public getMerkleNode() : Array<io.ipfs.api.MerkleNode> {
            return this.merkleNode;
        }

        /**
         * Sets the merkle node.
         * 
         * @param {io.ipfs.api.MerkleNode[]} merkleNode
         * the new merkle node
         */
        public setMerkleNode(merkleNode : Array<io.ipfs.api.MerkleNode>) {
            this.merkleNode = merkleNode;
        }

        constructor() {
            if(this.id===undefined) this.id = null;
            if(this.merkleNode===undefined) this.merkleNode = null;
            if(this.multiHash===undefined) this.multiHash = null;
            if(this.nemAnnounceResult===undefined) this.nemAnnounceResult = null;
            if(this.challengeMessage===undefined) this.challengeMessage = null;
            if(this.assetId===undefined) this.assetId = null;
            if(this.blockId===undefined) this.blockId = null;
            if(this.bdTransaction===undefined) this.bdTransaction = null;
            if(this.dbHash===undefined) this.dbHash = null;
        }
    }
    PublishResult["__class"] = "io.nem.xpx.model.PublishResult";
    PublishResult["__interfaces"] = ["java.io.Serializable"];


}


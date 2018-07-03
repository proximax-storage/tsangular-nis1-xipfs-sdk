/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.publishandsubscribe {
    /**
     * Instantiates a new search.
     * 
     * @param {io.nem.xpx.facade.connection.PeerConnection} peerConnection            the peer connection
     * @throws PeerConnectionNotFoundException the peer connection not found exception
     * @class
     */
    export class PublishAndSubscribe {
        /**
         * The peer connection.
         */
        /*private*/ peerConnection : io.nem.xpx.facade.connection.PeerConnection;

        /**
         * The engine.
         */
        /*private*/ engine : org.nem.core.crypto.CryptoEngine;

        /**
         * The publish and subscribe api.
         */
        /*private*/ publishAndSubscribeApi : io.nem.xpx.service.intf.PublishAndSubscribeApi;

        /**
         * The transaction and announce api.
         */
        /*private*/ transactionAndAnnounceApi : io.nem.xpx.service.intf.TransactionAndAnnounceApi;

        /**
         * The is local peer connection.
         */
        /*private*/ isLocalPeerConnection : boolean = false;

        public constructor(peerConnection : io.nem.xpx.facade.connection.PeerConnection) {
            if(this.peerConnection===undefined) this.peerConnection = null;
            if(this.engine===undefined) this.engine = null;
            if(this.publishAndSubscribeApi===undefined) this.publishAndSubscribeApi = null;
            if(this.transactionAndAnnounceApi===undefined) this.transactionAndAnnounceApi = null;
            if(peerConnection == null) {
                throw new io.nem.xpx.exceptions.PeerConnectionNotFoundException("PeerConnection can\'t be null");
            }
            this.peerConnection = peerConnection;
            this.publishAndSubscribeApi = peerConnection.getPublishAndSubscribeApi();
            this.transactionAndAnnounceApi = peerConnection.getTransactionAndAnnounceApi();
            this.isLocalPeerConnection = peerConnection.isLocal();
            this.engine = org.nem.core.crypto.CryptoEngines.ed25519Engine();
        }

        /**
         * Subscribe and listen to topic.
         * 
         * @param {string} topic the topic
         */
        public subscribeAndListenToTopic(topic : string) {
        }

        /**
         * Publish topic.
         * 
         * @param {string} topic the topic
         * @param {string} initialMessage the initial message
         * @throws Exception the exception
         */
        public publishTopic(topic : string, initialMessage : string) {
            this.publishAndSubscribeApi.publishTopicUsingGET(topic, initialMessage);
        }

        /**
         * Send to topic.
         * 
         * @param {string} topic the topic
         * @param {string} message the message
         * @throws Exception the exception
         */
        public sendToTopic(topic : string, message : string) {
            this.publishAndSubscribeApi.sendToTopicUsingGET(topic, message);
        }

        /**
         * Send to topic by nem hash.
         * 
         * @param {string} nemHash the nem hash
         * @param {string} message the message
         * @throws Exception the exception
         */
        public sendToTopicByNemHash(nemHash : string, message : string) {
            this.publishAndSubscribeApi.sendToTopicUsingGET(nemHash, message);
        }
    }
    PublishAndSubscribe["__class"] = "io.nem.xpx.facade.publishandsubscribe.PublishAndSubscribe";

}


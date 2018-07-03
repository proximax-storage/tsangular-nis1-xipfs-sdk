/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service.local {
    /**
     * Instantiates a new local publish and subscribe api.
     * 
     * @param {io.ipfs.api.IPFS} proximaxIfpsConnection the proximax ifps connection
     * @class
     */
    export class LocalPublishAndSubscribeApi implements io.nem.xpx.service.intf.PublishAndSubscribeApi {
        /**
         * The proximax ifps connection.
         */
        /*private*/ proximaxIfpsConnection : io.ipfs.api.IPFS;

        public constructor(proximaxIfpsConnection : io.ipfs.api.IPFS) {
            if(this.proximaxIfpsConnection===undefined) this.proximaxIfpsConnection = null;
            this.proximaxIfpsConnection = proximaxIfpsConnection;
        }

        /**
         * 
         * @param {string} topic
         * @param {string} message
         * @return {*}
         */
        public sendToTopicUsingGET(topic : string, message : string) : any {
            return this.proximaxIfpsConnection.pubsub.pub(topic, message);
        }

        /**
         * 
         * @param {string} topic
         * @param {string} message
         * @return {*}
         */
        public publishTopicUsingGET(topic : string, message : string) : any {
            return this.proximaxIfpsConnection.pubsub.pub(topic, message);
        }
    }
    LocalPublishAndSubscribeApi["__class"] = "io.nem.xpx.service.local.LocalPublishAndSubscribeApi";
    LocalPublishAndSubscribeApi["__interfaces"] = ["io.nem.xpx.service.intf.PublishAndSubscribeApi"];


}


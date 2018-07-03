/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service.intf {
    /**
     * The Interface PublishAndSubscribeApi.
     * @class
     */
    export interface PublishAndSubscribeApi {
        /**
         * Send to topic using GET.
         * 
         * @param {string} topic the topic
         * @param {string} message the message
         * @return {*} the object
         * @throws Exception the exception
         */
        sendToTopicUsingGET(topic : string, message : string) : any;

        /**
         * Publish topic using GET.
         * 
         * @param {string} topic the topic
         * @param {string} message the message
         * @return {*} the object
         * @throws Exception the exception
         */
        publishTopicUsingGET(topic : string, message : string) : any;
    }
}


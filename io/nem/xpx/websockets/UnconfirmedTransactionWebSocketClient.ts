/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.websockets {
    /**
     * Instantiates a new unconfirmed transaction web socket client.
     * 
     * @param {java.net.URI} serverUri the server uri
     * @class
     * @extends org.java_websocket.client.WebSocketClient
     */
    export class UnconfirmedTransactionWebSocketClient extends org.java_websocket.client.WebSocketClient {
        public constructor(serverUri : java.net.URI) {
            super(serverUri);
        }

        /**
         * 
         * @param {number} arg0
         * @param {string} arg1
         * @param {boolean} arg2
         */
        public onClose(arg0 : number, arg1 : string, arg2 : boolean) {
        }

        /**
         * 
         * @param {Error} arg0
         */
        public onError(arg0 : Error) {
        }

        /**
         * 
         * @param {string} arg0
         */
        public onMessage(arg0 : string) {
        }

        /**
         * 
         * @param {*} arg0
         */
        public onOpen(arg0 : org.java_websocket.handshake.ServerHandshake) {
        }
    }
    UnconfirmedTransactionWebSocketClient["__class"] = "io.nem.xpx.websockets.UnconfirmedTransactionWebSocketClient";
    UnconfirmedTransactionWebSocketClient["__interfaces"] = ["org.java_websocket.WebSocket","org.java_websocket.WebSocketListener","java.lang.Runnable"];


}


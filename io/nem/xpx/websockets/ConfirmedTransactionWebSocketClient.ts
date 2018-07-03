/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.websockets {
    /**
     * Instantiates a new confirmed transaction web socket client.
     * 
     * @param {java.net.URI} serverUri
     * the server uri
     * @param {org.java_websocket.drafts.Draft} draft
     * the draft
     * @class
     * @extends org.java_websocket.client.WebSocketClient
     */
    export class ConfirmedTransactionWebSocketClient extends org.java_websocket.client.WebSocketClient {
        /**
         * The logger.
         */
        LOGGER : java.util.logging.Logger;

        public constructor(serverUri? : any, draft? : any) {
            if(((serverUri != null && serverUri instanceof <any>java.net.URI) || serverUri === null) && ((draft != null && draft instanceof <any>org.java_websocket.drafts.Draft) || draft === null)) {
                let __args = Array.prototype.slice.call(arguments);
                super(serverUri, draft);
                this.LOGGER = java.util.logging.Logger.getAnonymousLogger();
            } else if(((serverUri != null && serverUri instanceof <any>java.net.URI) || serverUri === null) && draft === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                super(serverUri);
                this.LOGGER = java.util.logging.Logger.getAnonymousLogger();
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @param {number} arg0
         * @param {string} arg1
         * @param {boolean} arg2
         */
        public onClose(arg0 : number, arg1 : string, arg2 : boolean) {
            this.LOGGER.info("onClose connection " + arg0);
            this.LOGGER.info("onClose connection " + arg1);
            this.LOGGER.info("onClose connection " + arg2);
        }

        /**
         * 
         * @param {Error} arg0
         */
        public onError(arg0 : Error) {
            this.LOGGER.info("onError connection" + arg0.message);
        }

        /**
         * 
         * @param {string} arg0
         */
        public onMessage(arg0 : string) {
            this.LOGGER.info("onMessage connection");
        }

        /**
         * 
         * @param {*} arg0
         */
        public onOpen(arg0 : org.java_websocket.handshake.ServerHandshake) {
            this.LOGGER.info("opened connection");
        }

        /**
         * The main method.
         * 
         * @param {Array} args
         * the arguments
         * @throws URISyntaxException
         * the URI syntax exception
         * @throws InterruptedException
         * the interrupted exception
         */
        public static main(args : string[]) {
            let c : ConfirmedTransactionWebSocketClient = new ConfirmedTransactionWebSocketClient(new java.net.URI("ws://23.228.67.85:7778/w/api/account/get"));
            c.connect();
            c.send("{\"account\":\"TDZQB4XV6ZQ3X7PXGWYL4KWEY7DY2RGSLIN7PA3F\"}");
        }
    }
    ConfirmedTransactionWebSocketClient["__class"] = "io.nem.xpx.websockets.ConfirmedTransactionWebSocketClient";
    ConfirmedTransactionWebSocketClient["__interfaces"] = ["org.java_websocket.WebSocket","org.java_websocket.WebSocketListener","java.lang.Runnable"];


}


io.nem.xpx.websockets.ConfirmedTransactionWebSocketClient.main(null);

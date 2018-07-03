/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.facade.publishandsubscribe {
    /**
     * Instantiates a new publish and subscribe async.
     * 
     * @param {io.nem.xpx.facade.connection.PeerConnection} peerConnection the peer connection
     * @class
     * @extends io.nem.xpx.facade.publishandsubscribe.PublishAndSubscribe
     */
    export class PublishAndSubscribeAsync extends io.nem.xpx.facade.publishandsubscribe.PublishAndSubscribe {
        public constructor(peerConnection : io.nem.xpx.facade.connection.PeerConnection) {
            super(peerConnection);
            if(peerConnection == null) {
                throw new io.nem.xpx.exceptions.PeerConnectionNotFoundException("PeerConnection can\'t be null");
            }
        }
    }
    PublishAndSubscribeAsync["__class"] = "io.nem.xpx.facade.publishandsubscribe.PublishAndSubscribeAsync";

}


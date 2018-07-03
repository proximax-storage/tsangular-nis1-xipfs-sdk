/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service {
    export class UploadDelegate {
        /*private*/ uploadApi : io.nem.xpx.service.intf.UploadApi;

        public constructor(uploadApi : io.nem.xpx.service.intf.UploadApi) {
            if(this.uploadApi===undefined) this.uploadApi = null;
            this.uploadApi = uploadApi;
        }

        public uploadBinaryToIpfs(binaryData : number[], name : string, contentType : string, keywords : string, metadata : string) : UploadDelegate.ResourceHashMessageWrapper {
            try {
                let resourceHashMessageData : number[] = this.uploadApi.uploadBytesBinary(binaryData, name, contentType, keywords, metadata);
                return new UploadDelegate.ResourceHashMessageWrapper(resourceHashMessageData);
            } catch(e) {
                throw new io.nem.xpx.exceptions.UploadContentFailureException("Failed to upload text to ipfs", e);
            };
        }

        public uploadTextToIpfs(textInBytes : number[], name : string, contentType : string, encoding : string, keywords : string, metadata : string) : UploadDelegate.ResourceHashMessageWrapper {
            try {
                let resourceHashMessageData : number[] = this.uploadApi.uploadText(textInBytes, name, contentType, encoding, keywords, metadata);
                return new UploadDelegate.ResourceHashMessageWrapper(resourceHashMessageData);
            } catch(e) {
                throw new io.nem.xpx.exceptions.UploadContentFailureException("Failed to upload text to ipfs", e);
            };
        }

        public uploadPathToIpfs(path : string, name : string, keywords : string, metadata : string) : UploadDelegate.ResourceHashMessageWrapper {
            try {
                let resourceHashMessageData : number[] = this.uploadApi.uploadPath(path, name, keywords, metadata);
                return new UploadDelegate.ResourceHashMessageWrapper(resourceHashMessageData);
            } catch(e) {
                throw new io.nem.xpx.exceptions.UploadContentFailureException("Failed to upload text to ipfs", e);
            };
        }

        public deletePinnedContent(multihash : string) : string {
            try {
                return this.uploadApi.deletePinnedContent(multihash);
            } catch(e) {
                throw new io.nem.xpx.exceptions.DeletePinnedContentFailureException(java.lang.String.format("Failed to delete pinned content for %s", multihash), e);
            };
        }
    }
    UploadDelegate["__class"] = "io.nem.xpx.service.UploadDelegate";


    export namespace UploadDelegate {

        export class ResourceHashMessageWrapper {
            data : number[];

            resourceHashMessage : io.nem.xpx.service.model.buffers.ResourceHashMessage;

            public constructor(data : number[]) {
                if(this.data===undefined) this.data = null;
                if(this.resourceHashMessage===undefined) this.resourceHashMessage = null;
                this.data = data;
                this.resourceHashMessage = this.toResourceHashMessage(data);
            }

            public getData() : number[] {
                return this.data;
            }

            public getResourceHashMessage() : io.nem.xpx.service.model.buffers.ResourceHashMessage {
                return this.resourceHashMessage;
            }

            toResourceHashMessage(data : number[]) : io.nem.xpx.service.model.buffers.ResourceHashMessage {
                return io.nem.xpx.service.model.buffers.ResourceHashMessage.getRootAsResourceHashMessage$java_nio_ByteBuffer(java.nio.ByteBuffer.wrap(org.apache.commons.codec.binary.Base64.decodeBase64(data)));
            }
        }
        ResourceHashMessageWrapper["__class"] = "io.nem.xpx.service.UploadDelegate.ResourceHashMessageWrapper";

    }

}


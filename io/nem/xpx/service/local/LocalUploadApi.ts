/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service.local {
    /**
     * Instantiates a new local upload api.
     * 
     * @param {io.ipfs.api.IPFS} proximaxIfpsConnection the proximax ifps connection
     * @class
     */
    export class LocalUploadApi implements io.nem.xpx.service.intf.UploadApi {
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
         * @param {string} multihash
         * @return {string}
         */
        public deletePinnedContent(multihash : string) : string {
            return /* toString */('['+this.proximaxIfpsConnection.pin.rm(io.ipfs.multihash.Multihash.fromBase58(multihash)).join(', ')+']');
        }

        /**
         * 
         * @param {Array} binaryData
         * @param {string} name
         * @param {string} contentType
         * @param {string} keywords
         * @param {string} metadata
         * @return {Array}
         */
        public uploadBytesBinary(binaryData : number[], name : string, contentType : string, keywords : string, metadata : string) : number[] {
            let nameOrDefault : string = io.nem.xpx.utils.StringUtils.isEmpty(name)?/* valueOf */new String(Math.abs(/* currentTimeMillis */Date.now())).toString():name;
            let contentTypeOrDetected : string = io.nem.xpx.utils.ContentTypeUtils.contentTypeLookup$java_lang_String$byte_A(contentType, binaryData);
            let keywordsOrDefault : string = keywords == null?"":keywords;
            let metadataOrDefault : string = metadata == null?"":metadata;
            let spfsBlockResult : io.nem.xpx.model.PublishResult = this.exposeAndPinBinary(nameOrDefault, binaryData);
            let multiHashString : string = /* get */spfsBlockResult.getMerkleNode()[0].hash.toBase58();
            let builder : com.google.flatbuffers.FlatBufferBuilder = new com.google.flatbuffers.FlatBufferBuilder(1024);
            let messageDigest : java.security.MessageDigest = java.security.MessageDigest.getInstance("SHA-256");
            let digest : number = builder.createString(String.fromCharCode.apply(null, org.bouncycastle.util.encoders.Hex.encode(messageDigest.digest(binaryData))));
            let hash : number = builder.createString(multiHashString);
            let keywordsRes : number = builder.createString(keywordsOrDefault);
            let metadataRes : number = builder.createString(metadataOrDefault);
            let nameint : number = builder.createString(nameOrDefault);
            let type : number = builder.createString(contentTypeOrDetected);
            io.nem.xpx.service.model.buffers.ResourceHashMessage.startResourceHashMessage(builder);
            io.nem.xpx.service.model.buffers.ResourceHashMessage.addDigest(builder, digest);
            io.nem.xpx.service.model.buffers.ResourceHashMessage.addHash(builder, hash);
            io.nem.xpx.service.model.buffers.ResourceHashMessage.addKeywords(builder, keywordsRes);
            io.nem.xpx.service.model.buffers.ResourceHashMessage.addMetaData(builder, metadataRes);
            io.nem.xpx.service.model.buffers.ResourceHashMessage.addName(builder, nameint);
            io.nem.xpx.service.model.buffers.ResourceHashMessage.addTimestamp(builder, /* currentTimeMillis */Date.now());
            io.nem.xpx.service.model.buffers.ResourceHashMessage.addType(builder, type);
            builder.finish(io.nem.xpx.service.model.buffers.ResourceHashMessage.endResourceHashMessage(builder));
            return org.apache.commons.codec.binary.Base64.encodeBase64(builder.sizedByteArray());
        }

        /**
         * 
         * @param {Array} textInBytes
         * @param {string} name
         * @param {string} contentType
         * @param {string} encoding
         * @param {string} keywords
         * @param {string} metadata
         * @return {Array}
         */
        public uploadText(textInBytes : number[], name : string, contentType : string, encoding : string, keywords : string, metadata : string) : number[] {
            let nameOrDefault : string = io.nem.xpx.utils.StringUtils.isEmpty(name)?/* valueOf */new String(Math.abs(/* currentTimeMillis */Date.now())).toString():name;
            let contentTypeOrDefault : string = io.nem.xpx.utils.StringUtils.isEmpty(contentType)?"text/plain":contentType;
            let encodingOrDefault : string = io.nem.xpx.utils.StringUtils.isEmpty(encoding)?"UTF-8":encoding;
            let keywordsOrDefault : string = keywords == null?"":keywords;
            let metadataOrDefault : string = metadata == null?"":metadata;
            let spfsBlockResult : io.nem.xpx.model.PublishResult = this.exposeAndPinBinary(nameOrDefault, textInBytes);
            let multiHashString : string = /* get */spfsBlockResult.getMerkleNode()[0].hash.toBase58();
            let builder : com.google.flatbuffers.FlatBufferBuilder = new com.google.flatbuffers.FlatBufferBuilder(1024);
            let messageDigest : java.security.MessageDigest = java.security.MessageDigest.getInstance("SHA-256");
            let digest : number = builder.createString(String.fromCharCode.apply(null, org.bouncycastle.util.encoders.Hex.encode(messageDigest.digest(textInBytes))));
            let hash : number = builder.createString(multiHashString);
            let keywordsRes : number = builder.createString(keywordsOrDefault);
            let metadataRes : number = builder.createString(metadataOrDefault);
            let nameint : number = builder.createString(nameOrDefault);
            let type : number = builder.createString(contentTypeOrDefault);
            io.nem.xpx.service.model.buffers.ResourceHashMessage.startResourceHashMessage(builder);
            io.nem.xpx.service.model.buffers.ResourceHashMessage.addDigest(builder, digest);
            io.nem.xpx.service.model.buffers.ResourceHashMessage.addHash(builder, hash);
            io.nem.xpx.service.model.buffers.ResourceHashMessage.addKeywords(builder, keywordsRes);
            io.nem.xpx.service.model.buffers.ResourceHashMessage.addMetaData(builder, metadataRes);
            io.nem.xpx.service.model.buffers.ResourceHashMessage.addName(builder, nameint);
            io.nem.xpx.service.model.buffers.ResourceHashMessage.addTimestamp(builder, /* currentTimeMillis */Date.now());
            io.nem.xpx.service.model.buffers.ResourceHashMessage.addType(builder, type);
            builder.finish(io.nem.xpx.service.model.buffers.ResourceHashMessage.endResourceHashMessage(builder));
            return org.apache.commons.codec.binary.Base64.encodeBase64(builder.sizedByteArray());
        }

        public uploadPath(path : string, name : string, keywords : string, metadata : string) : number[] {
            let nameOrDefault : string = io.nem.xpx.utils.StringUtils.isEmpty(name)?/* valueOf */new String(Math.abs(/* currentTimeMillis */Date.now())).toString():name;
            let keywordsOrDefault : string = keywords == null?"":keywords;
            let metadataOrDefault : string = metadata == null?"":metadata;
            let contentType : string = "Directory";
            let spfsBlockResult : io.nem.xpx.model.PublishResult = this.exposeAndPinPath(path);
            let multiHashString : string = "";
            let merkleNodeIter : any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(spfsBlockResult.getMerkleNode());
            spfsBlockResult.getMerkleNode().stream().forEach((n) => {
                org.pmw.tinylog.Logger.error(n);
            });
            while((merkleNodeIter.hasNext())) {
                let merkleNode : io.ipfs.api.MerkleNode = <io.ipfs.api.MerkleNode>merkleNodeIter.next();
                let namePath : string = "/" + merkleNode.name.get();
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(namePath,path))) {
                    multiHashString = merkleNode.hash.toBase58();
                    break;
                }
            };
            if(multiHashString == null || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(multiHashString,""))) {
                multiHashString = /* get */spfsBlockResult.getMerkleNode()[/* size */(<number>spfsBlockResult.getMerkleNode().length) - 1].hash.toBase58();
            }
            let builder : com.google.flatbuffers.FlatBufferBuilder = new com.google.flatbuffers.FlatBufferBuilder(1024);
            let messageDigest : java.security.MessageDigest = java.security.MessageDigest.getInstance("SHA-256");
            let digest : number = builder.createString(String.fromCharCode.apply(null, org.bouncycastle.util.encoders.Hex.encode(messageDigest.digest(/* getBytes */(path).split('').map(s => s.charCodeAt(0))))));
            let hash : number = builder.createString(multiHashString);
            let keywordsRes : number = builder.createString(keywordsOrDefault);
            let metadataRes : number = builder.createString(metadataOrDefault);
            let nameint : number = builder.createString(nameOrDefault);
            let type : number = builder.createString(contentType);
            io.nem.xpx.service.model.buffers.ResourceHashMessage.startResourceHashMessage(builder);
            io.nem.xpx.service.model.buffers.ResourceHashMessage.addDigest(builder, digest);
            io.nem.xpx.service.model.buffers.ResourceHashMessage.addHash(builder, hash);
            io.nem.xpx.service.model.buffers.ResourceHashMessage.addKeywords(builder, keywordsRes);
            io.nem.xpx.service.model.buffers.ResourceHashMessage.addMetaData(builder, metadataRes);
            io.nem.xpx.service.model.buffers.ResourceHashMessage.addName(builder, nameint);
            io.nem.xpx.service.model.buffers.ResourceHashMessage.addTimestamp(builder, /* currentTimeMillis */Date.now());
            io.nem.xpx.service.model.buffers.ResourceHashMessage.addType(builder, type);
            builder.finish(io.nem.xpx.service.model.buffers.ResourceHashMessage.endResourceHashMessage(builder));
            return org.apache.commons.codec.binary.Base64.encodeBase64(builder.sizedByteArray());
        }

        /**
         * Expose and pin binary.
         * 
         * @param {string} name
         * the name
         * @param {Array} binary
         * the binary
         * @return {io.nem.xpx.model.PublishResult} the publish result
         * @throws IOException
         * Signals that an I/O exception has occurred.
         * @throws ApiException
         * the api exception
         * @private
         */
        /*private*/ exposeAndPinBinary(name : string, binary : number[]) : io.nem.xpx.model.PublishResult {
            let result : io.nem.xpx.model.PublishResult = new io.nem.xpx.model.PublishResult();
            let byteArrayWrapper : io.ipfs.api.NamedStreamable.ByteArrayWrapper = new io.ipfs.api.NamedStreamable.ByteArrayWrapper(name, binary);
            let node : Array<io.ipfs.api.MerkleNode> = this.proximaxIfpsConnection.add(byteArrayWrapper);
            let pinned : Array<io.ipfs.multihash.Multihash> = this.proximaxIfpsConnection.pin.add(/* get */node[0].hash);
            result.setMerkleNode(node);
            result.setMultiHash(pinned);
            return result;
        }

        /**
         * Expose and pin path.
         * 
         * @param {string} path the path
         * @return {io.nem.xpx.model.PublishResult} the publish result
         */
        public exposeAndPinPath(path : string) : io.nem.xpx.model.PublishResult {
            let result : io.nem.xpx.model.PublishResult = new io.nem.xpx.model.PublishResult();
            try {
                let streamables : Array<io.ipfs.api.NamedStreamable> = <any>([]);
                let fileWrapper : io.ipfs.api.NamedStreamable.FileWrapper = new io.ipfs.api.NamedStreamable.FileWrapper(new java.io.File(path));
                /* add */(streamables.push(new io.ipfs.api.NamedStreamable.DirWrapper(new java.io.File(path).getAbsolutePath(), fileWrapper.getChildren()))>0);
                let merkleNode : Array<io.ipfs.api.MerkleNode> = this.proximaxIfpsConnection.add(streamables, true, false);
                result.setMerkleNode(merkleNode);
            } catch(e) {
                org.pmw.tinylog.Logger.error("Error on decoding NEM Transaction Message." + e.message);
            };
            return result;
        }

        /**
         * Recurse path to be added.
         * 
         * @param {*[]} streamables
         * the streamables
         * @param {string} path
         * the path
         * @private
         */
        /*private*/ recursePathToBeAdded(streamables : Array<io.ipfs.api.NamedStreamable>, path : string) {
            let folder : java.io.File = new java.io.File(path);
            let listOfFiles : java.io.File[] = folder.listFiles();
            for(let index182=0; index182 < listOfFiles.length; index182++) {
                let file = listOfFiles[index182];
                {
                    if(file.isDirectory()) {
                        let fileWrapper : io.ipfs.api.NamedStreamable.FileWrapper = new io.ipfs.api.NamedStreamable.FileWrapper(file);
                        /* add */(streamables.push(new io.ipfs.api.NamedStreamable.DirWrapper(file.getAbsolutePath(), fileWrapper.getChildren()))>0);
                        this.recursePathToBeAdded(streamables, file.getAbsolutePath());
                    } else {
                        /* add */(streamables.push(new io.ipfs.api.NamedStreamable.FileWrapper(file))>0);
                    }
                }
            }
        }

        /**
         * Expose binary.
         * 
         * @param {string} name
         * the name
         * @param {Array} binary
         * the binary
         * @return {io.nem.xpx.model.PublishResult} the publish result
         * @throws IOException
         * Signals that an I/O exception has occurred.
         * @throws ApiException
         * the api exception
         * @private
         */
        /*private*/ exposeBinary(name : string, binary : number[]) : io.nem.xpx.model.PublishResult {
            let result : io.nem.xpx.model.PublishResult = new io.nem.xpx.model.PublishResult();
            let byteArrayWrapper : io.ipfs.api.NamedStreamable.ByteArrayWrapper = new io.ipfs.api.NamedStreamable.ByteArrayWrapper(name, binary);
            let node : Array<io.ipfs.api.MerkleNode> = this.proximaxIfpsConnection.add(byteArrayWrapper);
            result.setMerkleNode(node);
            return result;
        }

        /**
         * Gets the binary hash only.
         * 
         * @param {string} name
         * the name
         * @param {Array} binary
         * the binary
         * @return {io.nem.xpx.model.PublishResult} the binary hash only
         * @throws IOException
         * Signals that an I/O exception has occurred.
         * @throws ApiException
         * the api exception
         * @private
         */
        /*private*/ getBinaryHashOnly(name : string, binary : number[]) : io.nem.xpx.model.PublishResult {
            let result : io.nem.xpx.model.PublishResult = null;
            result = new io.nem.xpx.model.PublishResult();
            let byteArrayWrapper : io.ipfs.api.NamedStreamable.ByteArrayWrapper = new io.ipfs.api.NamedStreamable.ByteArrayWrapper(name, binary);
            let node : Array<io.ipfs.api.MerkleNode> = this.proximaxIfpsConnection.add(byteArrayWrapper, false, true);
            result.setMerkleNode(node);
            return result;
        }

        /**
         * Grab dirs.
         * 
         * @param {string} path
         * the path
         * @param {io.ipfs.api.MerkleNode[]} node
         * the node
         * @throws IOException
         * Signals that an I/O exception has occurred.
         * @throws ApiException
         * the api exception
         * @private
         */
        /*private*/ grabDirs(path : string, node : Array<io.ipfs.api.MerkleNode>) {
            let directories : java.io.File[] = new java.io.File(path).listFiles(() => { return java.io.File.isDirectory() });
            for(let index183=0; index183 < directories.length; index183++) {
                let f = directories[index183];
                {
                    let fileWrapper : io.ipfs.api.NamedStreamable.FileWrapper = new io.ipfs.api.NamedStreamable.FileWrapper(f);
                    let dirWrapper : io.ipfs.api.NamedStreamable.DirWrapper = new io.ipfs.api.NamedStreamable.DirWrapper(f.getName().toString(), fileWrapper.getChildren());
                    /* addAll */((l1, l2) => l1.push.apply(l1, l2))(node, this.proximaxIfpsConnection.add(dirWrapper, true, false));
                    this.grabDirs(f.getAbsolutePath(), node);
                }
            }
        }
    }
    LocalUploadApi["__class"] = "io.nem.xpx.service.local.LocalUploadApi";
    LocalUploadApi["__interfaces"] = ["io.nem.xpx.service.intf.UploadApi"];


}


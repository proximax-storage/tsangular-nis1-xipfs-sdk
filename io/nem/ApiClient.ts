/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem {
    /**
     * Instantiates a new api client.
     * @class
     */
    export class ApiClient {
        static __static_initialized : boolean = false;
        static __static_initialize() { if(!ApiClient.__static_initialized) { ApiClient.__static_initialized = true; ApiClient.__static_initializer_0(); } }

        /**
         * The Constant JAVA_VERSION.
         */
        public static JAVA_VERSION : number; public static JAVA_VERSION_$LI$() : number { ApiClient.__static_initialize(); return ApiClient.JAVA_VERSION; };

        /**
         * The Constant IS_ANDROID.
         */
        public static IS_ANDROID : boolean; public static IS_ANDROID_$LI$() : boolean { ApiClient.__static_initialize(); return ApiClient.IS_ANDROID; };

        /**
         * The Constant ANDROID_SDK_VERSION.
         */
        public static ANDROID_SDK_VERSION : number; public static ANDROID_SDK_VERSION_$LI$() : number { ApiClient.__static_initialize(); return ApiClient.ANDROID_SDK_VERSION; };

        static __static_initializer_0() {
            ApiClient.JAVA_VERSION = /* parseDouble */parseFloat(java.lang.System.getProperty("java.specification.version"));
            let isAndroid : boolean;
            try {
                /* forName */eval("android.app.Activity");
                isAndroid = true;
            } catch(e) {
                isAndroid = false;
            };
            ApiClient.IS_ANDROID = isAndroid;
            let sdkVersion : number = 0;
            if(ApiClient.IS_ANDROID_$LI$()) {
                try {
                    sdkVersion = /* getField */((c,p) => { return {owner:c,name:p}; })(/* forName */eval("android.os.Build$VERSION"),"SDK_INT").getInt(null);
                } catch(e) {
                    try {
                        sdkVersion = /* parseInt */parseInt(<string>/* get */null[/* getField */((c,p) => { return {owner:c,name:p}; })(/* forName */eval("android.os.Build$VERSION"),"SDK").name]);
                    } catch(e2) {
                    };
                };
            }
            ApiClient.ANDROID_SDK_VERSION = sdkVersion;
        }

        /**
         * The datetime format to be used when <code>lenientDatetimeFormat</code> is enabled.
         */
        public static LENIENT_DATETIME_FORMAT : string = "yyyy-MM-dd\'T\'HH:mm:ss.SSSZ";

        /**
         * The base path.
         */
        /*private*/ basePath : string = "http://localhost:8881";

        /**
         * The lenient on json.
         */
        /*private*/ lenientOnJson : boolean = false;

        /**
         * The debugging.
         */
        /*private*/ debugging : boolean = false;

        /**
         * The default header map.
         */
        /*private*/ defaultHeaderMap : any = <any>({});

        /**
         * The temp folder path.
         */
        /*private*/ tempFolderPath : string = null;

        /**
         * The authentications.
         */
        /*private*/ authentications : any;

        /**
         * The date format.
         */
        /*private*/ dateFormat : java.text.DateFormat;

        /**
         * The datetime format.
         */
        /*private*/ datetimeFormat : java.text.DateFormat;

        /**
         * The lenient datetime format.
         */
        /*private*/ lenientDatetimeFormat : boolean;

        /**
         * The date length.
         */
        /*private*/ dateLength : number;

        /**
         * The ssl ca cert.
         */
        /*private*/ sslCaCert : { str: string, cursor: number };

        /**
         * The verifying ssl.
         */
        /*private*/ verifyingSsl : boolean;

        /**
         * The key managers.
         */
        /*private*/ keyManagers : javax.net.ssl.KeyManager[];

        /**
         * The http client.
         */
        /*private*/ httpClient : com.squareup.okhttp.OkHttpClient;

        /**
         * The json.
         */
        /*private*/ json : io.nem.JSON;

        /**
         * The logging interceptor.
         */
        /*private*/ loggingInterceptor : com.squareup.okhttp.logging.HttpLoggingInterceptor;

        public constructor() {
            if(this.authentications===undefined) this.authentications = null;
            if(this.dateFormat===undefined) this.dateFormat = null;
            if(this.datetimeFormat===undefined) this.datetimeFormat = null;
            if(this.lenientDatetimeFormat===undefined) this.lenientDatetimeFormat = false;
            if(this.dateLength===undefined) this.dateLength = 0;
            if(this.sslCaCert===undefined) this.sslCaCert = null;
            if(this.verifyingSsl===undefined) this.verifyingSsl = false;
            if(this.keyManagers===undefined) this.keyManagers = null;
            if(this.httpClient===undefined) this.httpClient = null;
            if(this.json===undefined) this.json = null;
            if(this.loggingInterceptor===undefined) this.loggingInterceptor = null;
            this.httpClient = new com.squareup.okhttp.OkHttpClient();
            this.httpClient.setWriteTimeout(30, java.util.concurrent.TimeUnit.MINUTES);
            this.httpClient.setReadTimeout(30, java.util.concurrent.TimeUnit.MINUTES);
            this.httpClient.setConnectTimeout(30, java.util.concurrent.TimeUnit.MINUTES);
            this.verifyingSsl = true;
            this.json = new io.nem.JSON(this);
            this.dateFormat = new java.text.SimpleDateFormat("yyyy-MM-dd");
            this.dateFormat.setTimeZone(/* getTimeZone */"UTC");
            this.initDatetimeFormat();
            this.lenientDatetimeFormat = true;
            this.setUserAgent("Swagger-Codegen/1.0.0/java");
            this.authentications = <any>({});
            this.authentications = java.util.Collections.unmodifiableMap<any, any>(this.authentications);
        }

        /**
         * Get base path.
         * 
         * @return {string} Baes path
         */
        public getBasePath() : string {
            return this.basePath;
        }

        /**
         * Set base path.
         * 
         * @param {string} basePath Base path of the URL (e.g http://localhost:8881
         * @return {io.nem.ApiClient} An instance of OkHttpClient
         */
        public setBasePath(basePath : string) : ApiClient {
            this.basePath = basePath;
            return this;
        }

        /**
         * Get HTTP client.
         * 
         * @return {com.squareup.okhttp.OkHttpClient} An instance of OkHttpClient
         */
        public getHttpClient() : com.squareup.okhttp.OkHttpClient {
            return this.httpClient;
        }

        /**
         * Set HTTP client.
         * 
         * @param {com.squareup.okhttp.OkHttpClient} httpClient An instance of OkHttpClient
         * @return {io.nem.ApiClient} Api Client
         */
        public setHttpClient(httpClient : com.squareup.okhttp.OkHttpClient) : ApiClient {
            this.httpClient = httpClient;
            return this;
        }

        /**
         * Get JSON.
         * 
         * @return {io.nem.JSON} JSON object
         */
        public getJSON() : io.nem.JSON {
            return this.json;
        }

        /**
         * Set JSON.
         * 
         * @param {io.nem.JSON} json JSON object
         * @return {io.nem.ApiClient} Api client
         */
        public setJSON(json : io.nem.JSON) : ApiClient {
            this.json = json;
            return this;
        }

        /**
         * True if isVerifyingSsl flag is on.
         * 
         * @return {boolean} True if isVerifySsl flag is on
         */
        public isVerifyingSsl() : boolean {
            return this.verifyingSsl;
        }

        /**
         * Configure whether to verify certificate and hostname when making https requests.
         * Default to true.
         * NOTE: Do NOT set to false in production code, otherwise you would face multiple types of cryptographic attacks.
         * 
         * @param {boolean} verifyingSsl True to verify TLS/SSL connection
         * @return {io.nem.ApiClient} ApiClient
         */
        public setVerifyingSsl(verifyingSsl : boolean) : ApiClient {
            this.verifyingSsl = verifyingSsl;
            this.applySslSettings();
            return this;
        }

        /**
         * Get SSL CA cert.
         * 
         * @return {{ str: string, cursor: number }} Input stream to the SSL CA cert
         */
        public getSslCaCert() : { str: string, cursor: number } {
            return this.sslCaCert;
        }

        /**
         * Configure the CA certificate to be trusted when making https requests.
         * Use null to reset to default.
         * 
         * @param {{ str: string, cursor: number }} sslCaCert input stream for SSL CA cert
         * @return {io.nem.ApiClient} ApiClient
         */
        public setSslCaCert(sslCaCert : { str: string, cursor: number }) : ApiClient {
            this.sslCaCert = sslCaCert;
            this.applySslSettings();
            return this;
        }

        /**
         * Gets the key managers.
         * 
         * @return {Array} the key managers
         */
        public getKeyManagers() : javax.net.ssl.KeyManager[] {
            return this.keyManagers;
        }

        /**
         * Configure client keys to use for authorization in an SSL session.
         * Use null to reset to default.
         * 
         * @param {Array} managers The KeyManagers to use
         * @return {io.nem.ApiClient} ApiClient
         */
        public setKeyManagers(managers : javax.net.ssl.KeyManager[]) : ApiClient {
            this.keyManagers = managers;
            this.applySslSettings();
            return this;
        }

        /**
         * Gets the date format.
         * 
         * @return {java.text.DateFormat} the date format
         */
        public getDateFormat() : java.text.DateFormat {
            return this.dateFormat;
        }

        /**
         * Sets the date format.
         * 
         * @param {java.text.DateFormat} dateFormat the date format
         * @return {io.nem.ApiClient} the api client
         */
        public setDateFormat(dateFormat : java.text.DateFormat) : ApiClient {
            this.dateFormat = dateFormat;
            this.dateLength = this.dateFormat.format(new Date()).length;
            return this;
        }

        /**
         * Gets the datetime format.
         * 
         * @return {java.text.DateFormat} the datetime format
         */
        public getDatetimeFormat() : java.text.DateFormat {
            return this.datetimeFormat;
        }

        /**
         * Sets the datetime format.
         * 
         * @param {java.text.DateFormat} datetimeFormat the datetime format
         * @return {io.nem.ApiClient} the api client
         */
        public setDatetimeFormat(datetimeFormat : java.text.DateFormat) : ApiClient {
            this.datetimeFormat = datetimeFormat;
            return this;
        }

        /**
         * Whether to allow various ISO 8601 datetime formats when parsing a datetime string.
         * 
         * @return {boolean} True if lenientDatetimeFormat flag is set to true
         * @see #parseDatetime(String)
         */
        public isLenientDatetimeFormat() : boolean {
            return this.lenientDatetimeFormat;
        }

        /**
         * Sets the lenient datetime format.
         * 
         * @param {boolean} lenientDatetimeFormat the lenient datetime format
         * @return {io.nem.ApiClient} the api client
         */
        public setLenientDatetimeFormat(lenientDatetimeFormat : boolean) : ApiClient {
            this.lenientDatetimeFormat = lenientDatetimeFormat;
            return this;
        }

        /**
         * Parse the given date string into Date object.
         * The default <code>dateFormat</code> supports these ISO 8601 date formats:
         * 2015-08-16
         * 2015-8-16
         * @param {string} str String to be parsed
         * @return {java.util.Date} Date
         */
        public parseDate(str : string) : Date {
            if(str == null) return null;
            try {
                return this.dateFormat.parse(str);
            } catch(e) {
                throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            };
        }

        /**
         * Parse the given datetime string into Date object.
         * When lenientDatetimeFormat is enabled, the following ISO 8601 datetime formats are supported:
         * 2015-08-16T08:20:05Z
         * 2015-8-16T8:20:05Z
         * 2015-08-16T08:20:05+00:00
         * 2015-08-16T08:20:05+0000
         * 2015-08-16T08:20:05.376Z
         * 2015-08-16T08:20:05.376+00:00
         * 2015-08-16T08:20:05.376+00
         * Note: The 3-digit milli-seconds is optional. Time zone is required and can be in one of
         * these formats:
         * Z (same with +0000)
         * +08:00 (same with +0800)
         * -02 (same with -0200)
         * -0200
         * 
         * @param {string} str Date time string to be parsed
         * @return {java.util.Date} Date representation of the string
         * @see <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a>
         */
        public parseDatetime(str : string) : Date {
            if(str == null) return null;
            let format : java.text.DateFormat;
            if(this.lenientDatetimeFormat) {
                str = /* replaceAll */str.replace(new RegExp("[zZ]\\z", 'g'),"+0000");
                str = /* replaceAll */str.replace(new RegExp("([+-]\\d{2}):(\\d{2})\\z", 'g'),"$1$2");
                str = /* replaceAll */str.replace(new RegExp("([+-]\\d{2})\\z", 'g'),"$100");
                str = /* replaceAll */str.replace(new RegExp("(:\\d{1,2})([+-]\\d{4})\\z", 'g'),"$1.000$2");
                format = new java.text.SimpleDateFormat(ApiClient.LENIENT_DATETIME_FORMAT);
            } else {
                format = this.datetimeFormat;
            }
            try {
                return format.parse(str);
            } catch(e) {
                throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            };
        }

        /**
         * Parses the date or datetime.
         * 
         * @param {string} str the str
         * @return {java.util.Date} the date
         */
        public parseDateOrDatetime(str : string) : Date {
            if(str == null) return null; else if(str.length <= this.dateLength) return this.parseDate(str); else return this.parseDatetime(str);
        }

        /**
         * Format the given Date object into string (Date format).
         * 
         * @param {java.util.Date} date Date object
         * @return {string} Formatted date in string representation
         */
        public formatDate(date : Date) : string {
            return this.dateFormat.format(date);
        }

        /**
         * Format the given Date object into string (Datetime format).
         * 
         * @param {java.util.Date} date Date object
         * @return {string} Formatted datetime in string representation
         */
        public formatDatetime(date : Date) : string {
            return this.datetimeFormat.format(date);
        }

        /**
         * Get authentications (key: authentication name, value: authentication).
         * 
         * @return {*} Map of authentication objects
         */
        public getAuthentications() : any {
            return this.authentications;
        }

        /**
         * Get authentication for the given name.
         * 
         * @param {string} authName The authentication name
         * @return {*} The authentication, null if not found
         */
        public getAuthentication(authName : string) : io.nem.auth.Authentication {
            return /* get */((m,k) => m[k]===undefined?null:m[k])(this.authentications, authName);
        }

        /**
         * Helper method to set username for the first HTTP basic authentication.
         * 
         * @param {string} username Username
         */
        public setUsername(username : string) {
            {
                let array122 = /* values */(obj => Object.keys(obj).map(key => obj[key]))(this.authentications);
                for(let index121=0; index121 < array122.length; index121++) {
                    let auth = array122[index121];
                    {
                        if(auth != null && auth instanceof <any>io.nem.auth.HttpBasicAuth) {
                            (<io.nem.auth.HttpBasicAuth><any>auth).setUsername(username);
                            return;
                        }
                    }
                }
            }
            throw Object.defineProperty(new Error("No HTTP basic authentication configured!"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * Helper method to set password for the first HTTP basic authentication.
         * 
         * @param {string} password Password
         */
        public setPassword(password : string) {
            {
                let array124 = /* values */(obj => Object.keys(obj).map(key => obj[key]))(this.authentications);
                for(let index123=0; index123 < array124.length; index123++) {
                    let auth = array124[index123];
                    {
                        if(auth != null && auth instanceof <any>io.nem.auth.HttpBasicAuth) {
                            (<io.nem.auth.HttpBasicAuth><any>auth).setPassword(password);
                            return;
                        }
                    }
                }
            }
            throw Object.defineProperty(new Error("No HTTP basic authentication configured!"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * Helper method to set API key value for the first API key authentication.
         * 
         * @param {string} apiKey API key
         */
        public setApiKey(apiKey : string) {
            {
                let array126 = /* values */(obj => Object.keys(obj).map(key => obj[key]))(this.authentications);
                for(let index125=0; index125 < array126.length; index125++) {
                    let auth = array126[index125];
                    {
                        if(auth != null && auth instanceof <any>io.nem.auth.ApiKeyAuth) {
                            (<io.nem.auth.ApiKeyAuth><any>auth).setApiKey(apiKey);
                            return;
                        }
                    }
                }
            }
            throw Object.defineProperty(new Error("No API key authentication configured!"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * Helper method to set API key prefix for the first API key authentication.
         * 
         * @param {string} apiKeyPrefix API key prefix
         */
        public setApiKeyPrefix(apiKeyPrefix : string) {
            {
                let array128 = /* values */(obj => Object.keys(obj).map(key => obj[key]))(this.authentications);
                for(let index127=0; index127 < array128.length; index127++) {
                    let auth = array128[index127];
                    {
                        if(auth != null && auth instanceof <any>io.nem.auth.ApiKeyAuth) {
                            (<io.nem.auth.ApiKeyAuth><any>auth).setApiKeyPrefix(apiKeyPrefix);
                            return;
                        }
                    }
                }
            }
            throw Object.defineProperty(new Error("No API key authentication configured!"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * Helper method to set access token for the first OAuth2 authentication.
         * 
         * @param {string} accessToken Access token
         */
        public setAccessToken(accessToken : string) {
            {
                let array130 = /* values */(obj => Object.keys(obj).map(key => obj[key]))(this.authentications);
                for(let index129=0; index129 < array130.length; index129++) {
                    let auth = array130[index129];
                    {
                        if(auth != null && auth instanceof <any>io.nem.auth.OAuth) {
                            (<io.nem.auth.OAuth><any>auth).setAccessToken(accessToken);
                            return;
                        }
                    }
                }
            }
            throw Object.defineProperty(new Error("No OAuth2 authentication configured!"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * Set the User-Agent header's value (by adding to the default header map).
         * 
         * @param {string} userAgent HTTP request's user agent
         * @return {io.nem.ApiClient} ApiClient
         */
        public setUserAgent(userAgent : string) : ApiClient {
            this.addDefaultHeader("User-Agent", userAgent);
            return this;
        }

        /**
         * Add a default header.
         * 
         * @param {string} key The header's key
         * @param {string} value The header's value
         * @return {io.nem.ApiClient} ApiClient
         */
        public addDefaultHeader(key : string, value : string) : ApiClient {
            /* put */(this.defaultHeaderMap[key] = value);
            return this;
        }

        /**
         * Checks if is lenient on json.
         * 
         * @return {boolean} True if lenientOnJson is enabled, false otherwise.
         * @see <a href="https://google-gson.googlecode.com/svn/trunk/gson/docs/javadocs/com/google/gson/stream/JsonReader.html#setLenient(boolean)">setLenient</a>
         */
        public isLenientOnJson() : boolean {
            return this.lenientOnJson;
        }

        /**
         * Set LenientOnJson.
         * 
         * @param {boolean} lenient True to enable lenientOnJson
         * @return {io.nem.ApiClient} ApiClient
         */
        public setLenientOnJson(lenient : boolean) : ApiClient {
            this.lenientOnJson = lenient;
            return this;
        }

        /**
         * Check that whether debugging is enabled for this API client.
         * 
         * @return {boolean} True if debugging is enabled, false otherwise.
         */
        public isDebugging() : boolean {
            return this.debugging;
        }

        /**
         * Enable/disable debugging for this API client.
         * 
         * @param {boolean} debugging To enable (true) or disable (false) debugging
         * @return {io.nem.ApiClient} ApiClient
         */
        public setDebugging(debugging : boolean) : ApiClient {
            if(debugging !== this.debugging) {
                if(debugging) {
                    this.loggingInterceptor = new com.squareup.okhttp.logging.HttpLoggingInterceptor();
                    this.loggingInterceptor.setLevel(com.squareup.okhttp.logging.HttpLoggingInterceptor.Level.BODY);
                    /* add */(this.httpClient.interceptors().push(this.loggingInterceptor)>0);
                } else {
                    /* remove */(a => { let index = a.indexOf(this.loggingInterceptor); if(index>=0) { a.splice(index, 1); return true; } else { return false; }})(this.httpClient.interceptors());
                    this.loggingInterceptor = null;
                }
            }
            this.debugging = debugging;
            return this;
        }

        /**
         * The path of temporary folder used to store downloaded files from endpoints
         * with file response. The default value is <code>null</code>, i.e. using
         * the system's default tempopary folder.
         * 
         * @return {string} Temporary folder path
         * @see <a href="https://docs.oracle.com/javase/7/docs/api/java/io/File.html#createTempFile">createTempFile</a>
         */
        public getTempFolderPath() : string {
            return this.tempFolderPath;
        }

        /**
         * Set the tempoaray folder path (for downloading files).
         * 
         * @param {string} tempFolderPath Temporary folder path
         * @return {io.nem.ApiClient} ApiClient
         */
        public setTempFolderPath(tempFolderPath : string) : ApiClient {
            this.tempFolderPath = tempFolderPath;
            return this;
        }

        /**
         * Get connection timeout (in milliseconds).
         * 
         * @return {number} Timeout in milliseconds
         */
        public getConnectTimeout() : number {
            return this.httpClient.getConnectTimeout();
        }

        /**
         * Sets the connect timeout (in milliseconds).
         * A value of 0 means no timeout, otherwise values must be between 1 and
         * 
         * @param {number} connectionTimeout connection timeout in milliseconds
         * @return {io.nem.ApiClient} Api client
         */
        public setConnectTimeout(connectionTimeout : number) : ApiClient {
            this.httpClient.setConnectTimeout(connectionTimeout, java.util.concurrent.TimeUnit.MILLISECONDS);
            return this;
        }

        /**
         * Format the given parameter object into string.
         * 
         * @param {*} param Parameter
         * @return {string} String representation of the parameter
         */
        public parameterToString(param : any) : string {
            if(param == null) {
                return "";
            } else if(param != null && param instanceof <any>Date) {
                return this.formatDatetime(<Date>param);
            } else if(param != null && (param instanceof Array)) {
                let b : { str: string } = { str: "", toString: function() { return this.str; } };
                {
                    let array132 = <Array<any>><any>param;
                    for(let index131=0; index131 < array132.length; index131++) {
                        let o = array132[index131];
                        {
                            if(/* length */b.str.length > 0) {
                                /* append */(sb => { sb.str = sb.str.concat(<any>","); return sb; })(b);
                            }
                            /* append */(sb => { sb.str = sb.str.concat(<any>/* valueOf */new String(o).toString()); return sb; })(b);
                        }
                    }
                }
                return /* toString */b.str;
            } else {
                return /* valueOf */new String(param).toString();
            }
        }

        /**
         * Format to {@code Pair} objects.
         * 
         * @param {string} collectionFormat collection format (e.g. csv, tsv)
         * @param {string} name Name
         * @param {*} value Value
         * @return {io.nem.Pair[]} A list of Pair objects
         */
        public parameterToPairs(collectionFormat : string, name : string, value : any) : Array<io.nem.Pair> {
            let params : Array<io.nem.Pair> = <any>([]);
            if(name == null || /* isEmpty */(name.length === 0) || value == null) return params;
            let valueCollection : Array<any> = null;
            if(value != null && (value instanceof Array)) {
                valueCollection = <Array<any>><any>value;
            } else {
                /* add */(params.push(new io.nem.Pair(name, this.parameterToString(value)))>0);
                return params;
            }
            if(/* isEmpty */(valueCollection.length == 0)) {
                return params;
            }
            collectionFormat = (collectionFormat == null || /* isEmpty */(collectionFormat.length === 0)?"csv":collectionFormat);
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(collectionFormat,"multi"))) {
                for(let index133=0; index133 < valueCollection.length; index133++) {
                    let item = valueCollection[index133];
                    {
                        /* add */(params.push(new io.nem.Pair(name, this.parameterToString(item)))>0);
                    }
                }
                return params;
            }
            let delimiter : string = ",";
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(collectionFormat,"csv"))) {
                delimiter = ",";
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(collectionFormat,"ssv"))) {
                delimiter = " ";
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(collectionFormat,"tsv"))) {
                delimiter = "\t";
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(collectionFormat,"pipes"))) {
                delimiter = "|";
            }
            let sb : { str: string } = { str: "", toString: function() { return this.str; } };
            for(let index134=0; index134 < valueCollection.length; index134++) {
                let item = valueCollection[index134];
                {
                    /* append */(sb => { sb.str = sb.str.concat(<any>delimiter); return sb; })(sb);
                    /* append */(sb => { sb.str = sb.str.concat(<any>this.parameterToString(item)); return sb; })(sb);
                }
            }
            /* add */(params.push(new io.nem.Pair(name, sb.substring(1)))>0);
            return params;
        }

        /**
         * Sanitize filename by removing path.
         * e.g. ../../sun.gif becomes sun.gif
         * 
         * @param {string} filename The filename to be sanitized
         * @return {string} The sanitized filename
         */
        public sanitizeFilename(filename : string) : string {
            return /* replaceAll */filename.replace(new RegExp(".*[/\\\\]", 'g'),"");
        }

        /**
         * Check if the given MIME is a JSON MIME.
         * JSON MIME examples:
         * application/json
         * application/json; charset=UTF8
         * APPLICATION/JSON
         * application/vnd.company+json
         * @param {string} mime MIME (Multipurpose Internet Mail Extensions)
         * @return {boolean} True if the given MIME is JSON, false otherwise.
         */
        public isJsonMime(mime : string) : boolean {
            let jsonMime : string = "(?i)^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$";
            return mime != null && (mime.matches(jsonMime) || /* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(mime, "application/json-patch+json"));
        }

        /**
         * Select the Accept header's value from the given accepts array:
         * if JSON exists in the given array, use it;
         * otherwise use all of them (joining into a string).
         * 
         * @param {Array} accepts The accepts array to select from
         * @return {string} The Accept header to use. If the given array is empty,
         * null will be returned (not to set the Accept header explicitly).
         */
        public selectHeaderAccept(accepts : string[]) : string {
            if(accepts.length === 0) {
                return null;
            }
            for(let index135=0; index135 < accepts.length; index135++) {
                let accept = accepts[index135];
                {
                    if(this.isJsonMime(accept)) {
                        return accept;
                    }
                }
            }
            return io.nem.StringUtil.join(accepts, ",");
        }

        /**
         * Select the Content-Type header's value from the given array:
         * if JSON exists in the given array, use it;
         * otherwise use the first one of the array.
         * 
         * @param {Array} contentTypes The Content-Type array to select from
         * @return {string} The Content-Type header to use. If the given array is empty,
         * JSON will be used.
         */
        public selectHeaderContentType(contentTypes : string[]) : string {
            if(contentTypes.length === 0) {
                return "application/json";
            }
            for(let index136=0; index136 < contentTypes.length; index136++) {
                let contentType = contentTypes[index136];
                {
                    if(this.isJsonMime(contentType)) {
                        return contentType;
                    }
                }
            }
            return contentTypes[0];
        }

        /**
         * Escape the given string to be used as URL query value.
         * 
         * @param {string} str String to be escaped
         * @return {string} Escaped string
         */
        public escapeString(str : string) : string {
            try {
                return /* replaceAll */java.net.URLEncoder.encode(str, "utf8").replace(new RegExp("\\+", 'g'),"%20");
            } catch(e) {
                return str;
            };
        }

        /**
         * Deserialize response body to Java object, according to the return type and
         * the Content-Type response header.
         * 
         * @param <T> Type
         * @param {com.squareup.okhttp.Response} response HTTP response
         * @param {*} returnType The type of the Java object
         * @return {*} The deserialized Java object
         * @throws ApiException If fail to deserialize response body, i.e. cannot read response body
         * or the Content-Type of the response is not supported.
         */
        public deserialize<T>(response : com.squareup.okhttp.Response, returnType : java.lang.reflect.Type) : T {
            if(response == null || returnType == null) {
                return null;
            }
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("byte[]",returnType.toString())) || (/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(returnType,Object)))) {
                try {
                    return <T><any>response.body().bytes();
                } catch(e) {
                    throw new io.nem.xpx.exceptions.ApiException(e);
                };
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(returnType,java.io.File))) {
                return <T><any>this.downloadFileFromResponse(response);
            }
            let respBody : string;
            try {
                if(response.body() != null) respBody = response.body().string(); else respBody = null;
            } catch(e) {
                throw new io.nem.xpx.exceptions.ApiException(e);
            };
            if(respBody == null || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("",respBody))) {
                return null;
            }
            let contentType : string = response.headers().get("Content-Type");
            if(contentType == null) {
                contentType = "application/json";
            }
            if(this.isJsonMime(contentType)) {
                return <any>(this.json.deserialize<any>(respBody, returnType));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(returnType,String))) {
                return <T><any>respBody;
            } else {
                throw new io.nem.xpx.exceptions.ApiException("Content type \"" + contentType + "\" is not supported for type: " + returnType, response.code(), response.headers().toMultimap(), respBody);
            }
        }

        /**
         * Serialize the given Java object into request body according to the object's
         * class and the request Content-Type.
         * 
         * @param {*} obj The Java object
         * @param {string} contentType The request Content-Type
         * @return {com.squareup.okhttp.RequestBody} The serialized request body
         * @throws ApiException If fail to serialize the given object
         */
        public serialize(obj : any, contentType : string) : com.squareup.okhttp.RequestBody {
            if(obj != null && obj instanceof <any>Array && (obj.length==0 || obj[0] == null ||typeof obj[0] === 'number')) {
                return com.squareup.okhttp.RequestBody.create(com.squareup.okhttp.MediaType.parse(contentType), <number[]>obj);
            } else if(obj != null && obj instanceof <any>java.io.File) {
                return com.squareup.okhttp.RequestBody.create(com.squareup.okhttp.MediaType.parse(contentType), <java.io.File>obj);
            } else if(this.isJsonMime(contentType)) {
                let content : string;
                if(obj != null) {
                    content = this.json.serialize(obj);
                } else {
                    content = null;
                }
                return com.squareup.okhttp.RequestBody.create(com.squareup.okhttp.MediaType.parse(contentType), content);
            } else {
                throw new io.nem.xpx.exceptions.ApiException("Content type \"" + contentType + "\" is not supported");
            }
        }

        /**
         * Download file from the given response.
         * 
         * @param {com.squareup.okhttp.Response} response An instance of the Response object
         * @return {java.io.File} Downloaded file
         * @throws ApiException If fail to read file content from response and write to disk
         */
        public downloadFileFromResponse(response : com.squareup.okhttp.Response) : java.io.File {
            try {
                let file : java.io.File = this.prepareDownloadFile(response);
                let sink : okio.BufferedSink = okio.Okio.buffer(okio.Okio.sink(file));
                sink.writeAll(response.body().source());
                sink.close();
                return file;
            } catch(e) {
                throw new io.nem.xpx.exceptions.ApiException(e);
            };
        }

        /**
         * Prepare file for download.
         * 
         * @param {com.squareup.okhttp.Response} response An instance of the Response object
         * @return {java.io.File} Prepared file for the download
         * @throws IOException If fail to prepare file for download
         */
        public prepareDownloadFile(response : com.squareup.okhttp.Response) : java.io.File {
            let filename : string = null;
            let contentDisposition : string = response.header("Content-Disposition");
            if(contentDisposition != null && !/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("",contentDisposition))) {
                let pattern : java.util.regex.Pattern = java.util.regex.Pattern.compile("filename=[\'\"]?([^\'\"\\s]+)[\'\"]?");
                let matcher : java.util.regex.Matcher = pattern.matcher(contentDisposition);
                if(matcher.find()) {
                    filename = this.sanitizeFilename(matcher.group(1));
                }
            }
            let prefix : string = null;
            let suffix : string = null;
            if(filename == null) {
                prefix = "download-";
                suffix = "";
            } else {
                let pos : number = filename.lastIndexOf(".");
                if(pos === -1) {
                    prefix = filename + "-";
                } else {
                    prefix = filename.substring(0, pos) + "-";
                    suffix = filename.substring(pos);
                }
                if(prefix.length < 3) prefix = "download-";
            }
            if(this.tempFolderPath == null) return java.io.File.createTempFile(prefix, suffix); else return java.io.File.createTempFile(prefix, suffix, new java.io.File(this.tempFolderPath));
        }

        public execute<T>(call : com.squareup.okhttp.Call, returnType : java.lang.reflect.Type = null) : io.nem.ApiResponse<T> {
            try {
                let response : com.squareup.okhttp.Response = call.execute();
                let data : T = <any>(this.handleResponse<any>(response, returnType));
                return <any>(new io.nem.ApiResponse<T>(response.code(), response.headers().toMultimap(), data));
            } catch(e) {
                throw new io.nem.xpx.exceptions.ApiException(e);
            };
        }

        public executeAsync$com_squareup_okhttp_Call$io_nem_ApiCallback<T>(call : com.squareup.okhttp.Call, callback : io.nem.ApiCallback<T>) {
            this.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, null, callback);
        }

        public executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback<T>(call : com.squareup.okhttp.Call, returnType : java.lang.reflect.Type, callback : io.nem.ApiCallback<T>) {
            call.enqueue(new ApiClient.ApiClient$0(this, callback, returnType));
        }

        /**
         * Execute HTTP call asynchronously.
         * 
         * @param <T> Type
         * @param {com.squareup.okhttp.Call} call The callback to be executed when the API call finishes
         * @param {*} returnType Return type
         * @param {*} callback ApiCallback
         * @see #execute(Call, Type)
         */
        public executeAsync<T>(call? : any, returnType? : any, callback? : any) : any {
            if(((call != null && call instanceof <any>com.squareup.okhttp.Call) || call === null) && ((returnType != null && (returnType["__interfaces"] != null && returnType["__interfaces"].indexOf("java.lang.reflect.Type") >= 0 || returnType.constructor != null && returnType.constructor["__interfaces"] != null && returnType.constructor["__interfaces"].indexOf("java.lang.reflect.Type") >= 0)) || returnType === null) && ((callback != null && (callback["__interfaces"] != null && callback["__interfaces"].indexOf("io.nem.ApiCallback") >= 0 || callback.constructor != null && callback.constructor["__interfaces"] != null && callback.constructor["__interfaces"].indexOf("io.nem.ApiCallback") >= 0)) || callback === null)) {
                return <any>this.executeAsync$com_squareup_okhttp_Call$java_lang_reflect_Type$io_nem_ApiCallback(call, returnType, callback);
            } else if(((call != null && call instanceof <any>com.squareup.okhttp.Call) || call === null) && ((returnType != null && (returnType["__interfaces"] != null && returnType["__interfaces"].indexOf("io.nem.ApiCallback") >= 0 || returnType.constructor != null && returnType.constructor["__interfaces"] != null && returnType.constructor["__interfaces"].indexOf("io.nem.ApiCallback") >= 0)) || returnType === null) && callback === undefined) {
                return <any>this.executeAsync$com_squareup_okhttp_Call$io_nem_ApiCallback(call, returnType);
            } else throw new Error('invalid overload');
        }

        /**
         * Handle the given response, return the deserialized object when the response is successful.
         * 
         * @param <T> Type
         * @param {com.squareup.okhttp.Response} response Response
         * @param {*} returnType Return type
         * @return {*} Type
         * @throws ApiException If the response has a unsuccessful status code or
         * fail to deserialize the response body
         */
        public handleResponse<T>(response : com.squareup.okhttp.Response, returnType : java.lang.reflect.Type) : T {
            if(response.isSuccessful()) {
                if(returnType == null || response.code() === 204) {
                    if(response.body() != null) {
                        try {
                            response.body().close();
                        } catch(e) {
                            throw new io.nem.xpx.exceptions.ApiException(response.message(), e, response.code(), response.headers().toMultimap());
                        };
                    }
                    return null;
                } else {
                    return <any>(this.deserialize<any>(response, returnType));
                }
            } else {
                let respBody : string = null;
                if(response.body() != null) {
                    try {
                        respBody = response.body().string();
                    } catch(e) {
                        throw new io.nem.xpx.exceptions.ApiException(response.message(), e, response.code(), response.headers().toMultimap());
                    };
                }
                throw new io.nem.xpx.exceptions.ApiException(response.message(), response.code(), response.headers().toMultimap(), respBody);
            }
        }

        /**
         * Build HTTP call with the given options.
         * 
         * @param {string} path The sub-path of the HTTP URL
         * @param {string} method The request method, one of "GET", "HEAD", "OPTIONS", "POST", "PUT", "PATCH" and "DELETE"
         * @param {io.nem.Pair[]} queryParams The query parameters
         * @param {*} body The request body object
         * @param {*} headerParams The header parameters
         * @param {*} formParams The form parameters
         * @param {Array} authNames The authentications to apply
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Call} The HTTP call
         * @throws ApiException If fail to serialize the request body object
         */
        public buildCall(path : string, method : string, queryParams : Array<io.nem.Pair>, body : any, headerParams : any, formParams : any, authNames : string[], progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Call {
            let request : com.squareup.okhttp.Request = this.buildRequest(path, method, queryParams, body, headerParams, formParams, authNames, progressRequestListener);
            return this.httpClient.newCall(request);
        }

        /**
         * Build an HTTP request with the given options.
         * 
         * @param {string} path The sub-path of the HTTP URL
         * @param {string} method The request method, one of "GET", "HEAD", "OPTIONS", "POST", "PUT", "PATCH" and "DELETE"
         * @param {io.nem.Pair[]} queryParams The query parameters
         * @param {*} body The request body object
         * @param {*} headerParams The header parameters
         * @param {*} formParams The form parameters
         * @param {Array} authNames The authentications to apply
         * @param {*} progressRequestListener Progress request listener
         * @return {com.squareup.okhttp.Request} The HTTP request
         * @throws ApiException If fail to serialize the request body object
         */
        public buildRequest(path : string, method : string, queryParams : Array<io.nem.Pair>, body : any, headerParams : any, formParams : any, authNames : string[], progressRequestListener : io.nem.ProgressRequestBody.ProgressRequestListener) : com.squareup.okhttp.Request {
            this.updateParamsForAuth(authNames, queryParams, headerParams);
            let url : string = this.buildUrl(path, queryParams);
            let reqBuilder : com.squareup.okhttp.Request.Builder = new com.squareup.okhttp.Request.Builder().url(url);
            this.processHeaderParams(headerParams, reqBuilder);
            let contentType : string = <string>/* get */((m,k) => m[k]===undefined?null:m[k])(headerParams, "Content-Type");
            if(contentType == null) {
                contentType = "application/json";
            }
            let reqBody : com.squareup.okhttp.RequestBody;
            if(!com.squareup.okhttp.internal.http.HttpMethod.permitsRequestBody(method)) {
                reqBody = null;
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("application/x-www-form-urlencoded",contentType))) {
                reqBody = this.buildRequestBodyFormEncoding(formParams);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("multipart/form-data",contentType))) {
                reqBody = this.buildRequestBodyMultipart(formParams);
            } else if(body == null) {
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("DELETE",method))) {
                    reqBody = null;
                } else {
                    reqBody = com.squareup.okhttp.RequestBody.create(com.squareup.okhttp.MediaType.parse(contentType), "");
                }
            } else {
                reqBody = this.serialize(body, contentType);
            }
            let request : com.squareup.okhttp.Request = null;
            if(progressRequestListener != null && reqBody != null) {
                let progressRequestBody : io.nem.ProgressRequestBody = new io.nem.ProgressRequestBody(reqBody, progressRequestListener);
                request = reqBuilder.method(method, progressRequestBody).build();
            } else {
                request = reqBuilder.method(method, reqBody).build();
            }
            return request;
        }

        /**
         * Build full URL by concatenating base path, the given sub path and query parameters.
         * 
         * @param {string} path The sub path
         * @param {io.nem.Pair[]} queryParams The query parameters
         * @return {string} The full URL
         */
        public buildUrl(path : string, queryParams : Array<io.nem.Pair>) : string {
            let url : { str: string } = { str: "", toString: function() { return this.str; } };
            /* append */(sb => { sb.str = sb.str.concat(<any>path); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.basePath); return sb; })(url));
            if(queryParams != null && !/* isEmpty */(queryParams.length == 0)) {
                let prefix : string = /* contains */(path.indexOf("?") != -1)?"&":"?";
                for(let index137=0; index137 < queryParams.length; index137++) {
                    let param = queryParams[index137];
                    {
                        if(param.getValue() != null) {
                            if(prefix != null) {
                                /* append */(sb => { sb.str = sb.str.concat(<any>prefix); return sb; })(url);
                                prefix = null;
                            } else {
                                /* append */(sb => { sb.str = sb.str.concat(<any>"&"); return sb; })(url);
                            }
                            let value : string = this.parameterToString(param.getValue());
                            /* append */(sb => { sb.str = sb.str.concat(<any>this.escapeString(value)); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"="); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>this.escapeString(param.getName())); return sb; })(url)));
                        }
                    }
                }
            }
            return /* toString */url.str;
        }

        /**
         * Set header parameters to the request builder, including default headers.
         * 
         * @param {*} headerParams Header parameters in the ofrm of Map
         * @param {com.squareup.okhttp.Request.Builder} reqBuilder Reqeust.Builder
         */
        public processHeaderParams(headerParams : any, reqBuilder : com.squareup.okhttp.Request.Builder) {
            {
                let array139 = /* entrySet */(o => { let s = []; for (let e in o) s.push({ k: e, v: o[e], getKey: function() { return this.k }, getValue: function() { return this.v } }); return s; })(headerParams);
                for(let index138=0; index138 < array139.length; index138++) {
                    let param = array139[index138];
                    {
                        reqBuilder.header(param.getKey(), this.parameterToString(param.getValue()));
                    }
                }
            }
            {
                let array141 = /* entrySet */(o => { let s = []; for (let e in o) s.push({ k: e, v: o[e], getKey: function() { return this.k }, getValue: function() { return this.v } }); return s; })(this.defaultHeaderMap);
                for(let index140=0; index140 < array141.length; index140++) {
                    let header = array141[index140];
                    {
                        if(!/* containsKey */headerParams.hasOwnProperty(header.getKey())) {
                            reqBuilder.header(header.getKey(), this.parameterToString(header.getValue()));
                        }
                    }
                }
            }
        }

        /**
         * Update query and header parameters based on authentication settings.
         * 
         * @param {Array} authNames The authentications to apply
         * @param {io.nem.Pair[]} queryParams  List of query parameters
         * @param {*} headerParams  Map of header parameters
         */
        public updateParamsForAuth(authNames : string[], queryParams : Array<io.nem.Pair>, headerParams : any) {
            for(let index142=0; index142 < authNames.length; index142++) {
                let authName = authNames[index142];
                {
                    let auth : io.nem.auth.Authentication = /* get */((m,k) => m[k]===undefined?null:m[k])(this.authentications, authName);
                    if(auth == null) throw Object.defineProperty(new Error("Authentication undefined: " + authName), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                    auth.applyToParams(queryParams, headerParams);
                }
            }
        }

        /**
         * Build a form-encoding request body with the given form parameters.
         * 
         * @param {*} formParams Form parameters in the form of Map
         * @return {com.squareup.okhttp.RequestBody} RequestBody
         */
        public buildRequestBodyFormEncoding(formParams : any) : com.squareup.okhttp.RequestBody {
            let formBuilder : com.squareup.okhttp.FormEncodingBuilder = new com.squareup.okhttp.FormEncodingBuilder();
            {
                let array144 = /* entrySet */(o => { let s = []; for (let e in o) s.push({ k: e, v: o[e], getKey: function() { return this.k }, getValue: function() { return this.v } }); return s; })(formParams);
                for(let index143=0; index143 < array144.length; index143++) {
                    let param = array144[index143];
                    {
                        formBuilder.add(param.getKey(), this.parameterToString(param.getValue()));
                    }
                }
            }
            return formBuilder.build();
        }

        /**
         * Build a multipart (file uploading) request body with the given form parameters,
         * which could contain text fields and file fields.
         * 
         * @param {*} formParams Form parameters in the form of Map
         * @return {com.squareup.okhttp.RequestBody} RequestBody
         */
        public buildRequestBodyMultipart(formParams : any) : com.squareup.okhttp.RequestBody {
            let mpBuilder : com.squareup.okhttp.MultipartBuilder = new com.squareup.okhttp.MultipartBuilder().type(com.squareup.okhttp.MultipartBuilder.FORM);
            {
                let array146 = /* entrySet */(o => { let s = []; for (let e in o) s.push({ k: e, v: o[e], getKey: function() { return this.k }, getValue: function() { return this.v } }); return s; })(formParams);
                for(let index145=0; index145 < array146.length; index145++) {
                    let param = array146[index145];
                    {
                        if(param.getValue() != null && param.getValue() instanceof <any>java.io.File) {
                            let file : java.io.File = <java.io.File>param.getValue();
                            let partHeaders : com.squareup.okhttp.Headers = com.squareup.okhttp.Headers.of("Content-Disposition", "form-data; name=\"" + param.getKey() + "\"; filename=\"" + file.getName() + "\"");
                            let mediaType : com.squareup.okhttp.MediaType = com.squareup.okhttp.MediaType.parse(this.guessContentTypeFromFile(file));
                            mpBuilder.addPart(partHeaders, com.squareup.okhttp.RequestBody.create(mediaType, file));
                        } else {
                            let partHeaders : com.squareup.okhttp.Headers = com.squareup.okhttp.Headers.of("Content-Disposition", "form-data; name=\"" + param.getKey() + "\"");
                            mpBuilder.addPart(partHeaders, com.squareup.okhttp.RequestBody.create(null, this.parameterToString(param.getValue())));
                        }
                    }
                }
            }
            return mpBuilder.build();
        }

        /**
         * Guess Content-Type header from the given file (defaults to "application/octet-stream").
         * 
         * @param {java.io.File} file The given file
         * @return {string} The guessed Content-Type
         */
        public guessContentTypeFromFile(file : java.io.File) : string {
            let contentType : string = java.net.URLConnection.guessContentTypeFromName(file.getName());
            if(contentType == null) {
                return "application/octet-stream";
            } else {
                return contentType;
            }
        }

        /**
         * Initialize datetime format according to the current environment, e.g. Java 1.7 and Android.
         * @private
         */
        /*private*/ initDatetimeFormat() {
            let formatWithTimeZone : string = null;
            if(ApiClient.IS_ANDROID_$LI$()) {
                if(ApiClient.ANDROID_SDK_VERSION_$LI$() >= 18) {
                    formatWithTimeZone = "yyyy-MM-dd\'T\'HH:mm:ss.SSSZZZZZ";
                }
            } else if(ApiClient.JAVA_VERSION_$LI$() >= 1.7) {
                formatWithTimeZone = "yyyy-MM-dd\'T\'HH:mm:ss.SSSXXX";
            }
            if(formatWithTimeZone != null) {
                this.datetimeFormat = new java.text.SimpleDateFormat(formatWithTimeZone);
            } else {
                this.datetimeFormat = new java.text.SimpleDateFormat("yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\'");
                this.datetimeFormat.setTimeZone(/* getTimeZone */"UTC");
            }
        }

        /**
         * Apply SSL related settings to httpClient according to the current values of
         * verifyingSsl and sslCaCert.
         * @private
         */
        /*private*/ applySslSettings() {
            try {
                let trustManagers : javax.net.ssl.TrustManager[] = null;
                let hostnameVerifier : javax.net.ssl.HostnameVerifier = null;
                if(!this.verifyingSsl) {
                    let trustAll : javax.net.ssl.TrustManager = new ApiClient.ApiClient$1(this);
                    let sslContext : javax.net.ssl.SSLContext = javax.net.ssl.SSLContext.getInstance("TLS");
                    trustManagers = [trustAll];
                    hostnameVerifier = new ApiClient.ApiClient$2(this);
                } else if(this.sslCaCert != null) {
                    let password : string[] = null;
                    let certificateFactory : java.security.cert.CertificateFactory = java.security.cert.CertificateFactory.getInstance("X.509");
                    let certificates : Array<any> = certificateFactory.generateCertificates(this.sslCaCert);
                    if(/* isEmpty */(certificates.length == 0)) {
                        throw Object.defineProperty(new Error("expected non-empty set of trusted certificates"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                    }
                    let caKeyStore : java.security.KeyStore = this.newEmptyKeyStore(password);
                    let index : number = 0;
                    for(let index147=0; index147 < certificates.length; index147++) {
                        let certificate = certificates[index147];
                        {
                            let certificateAlias : string = "ca" + /* toString */(''+(index++));
                            caKeyStore.setCertificateEntry(certificateAlias, certificate);
                        }
                    }
                    let trustManagerFactory : javax.net.ssl.TrustManagerFactory = javax.net.ssl.TrustManagerFactory.getInstance(javax.net.ssl.TrustManagerFactory.getDefaultAlgorithm());
                    trustManagerFactory.init(caKeyStore);
                    trustManagers = trustManagerFactory.getTrustManagers();
                }
                if(this.keyManagers != null || trustManagers != null) {
                    let sslContext : javax.net.ssl.SSLContext = javax.net.ssl.SSLContext.getInstance("TLS");
                    sslContext.init(this.keyManagers, trustManagers, new java.security.SecureRandom());
                    this.httpClient.setSslSocketFactory(sslContext.getSocketFactory());
                } else {
                    this.httpClient.setSslSocketFactory(null);
                }
                this.httpClient.setHostnameVerifier(hostnameVerifier);
            } catch(e) {
                throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            };
        }

        /**
         * New empty key store.
         * 
         * @param {Array} password the password
         * @return {java.security.KeyStore} the key store
         * @throws GeneralSecurityException the general security exception
         * @private
         */
        /*private*/ newEmptyKeyStore(password : string[]) : java.security.KeyStore {
            try {
                let keyStore : java.security.KeyStore = java.security.KeyStore.getInstance(java.security.KeyStore.getDefaultType());
                keyStore.load(null, password);
                return keyStore;
            } catch(e) {
                throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object','java.lang.AssertionError'] });
            };
        }
    }
    ApiClient["__class"] = "io.nem.ApiClient";


    export namespace ApiClient {

        export class ApiClient$0 implements com.squareup.okhttp.Callback {
            public __parent: any;
            /**
             * 
             * @param {com.squareup.okhttp.Request} request
             * @param {Error} e
             */
            public onFailure(request : com.squareup.okhttp.Request, e : Error) {
                this.callback.onFailure(new io.nem.xpx.exceptions.ApiException(e), 0, null);
            }

            /**
             * 
             * @param {com.squareup.okhttp.Response} response
             */
            public onResponse(response : com.squareup.okhttp.Response) {
                let result : T;
                try {
                    result = <any>(this.__parent.handleResponse(response, this.returnType));
                } catch(e) {
                    this.callback.onFailure(e, response.code(), response.headers().toMultimap());
                    return;
                };
                this.callback.onSuccess(result, response.code(), response.headers().toMultimap());
            }

            constructor(__parent: any, private callback: any, private returnType: any) {
                this.__parent = __parent;
            }
        }
        ApiClient$0["__interfaces"] = ["com.squareup.okhttp.Callback"];



        export class ApiClient$1 implements javax.net.ssl.X509TrustManager {
            public __parent: any;
            /**
             * 
             * @param {Array} chain
             * @param {string} authType
             */
            public checkClientTrusted(chain : java.security.cert.X509Certificate[], authType : string) {
            }

            /**
             * 
             * @param {Array} chain
             * @param {string} authType
             */
            public checkServerTrusted(chain : java.security.cert.X509Certificate[], authType : string) {
            }

            /**
             * 
             * @return {Array}
             */
            public getAcceptedIssuers() : java.security.cert.X509Certificate[] {
                return null;
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        ApiClient$1["__interfaces"] = ["javax.net.ssl.X509TrustManager","javax.net.ssl.TrustManager"];



        export class ApiClient$2 implements javax.net.ssl.HostnameVerifier {
            public __parent: any;
            /**
             * 
             * @param {string} hostname
             * @param {*} session
             * @return {boolean}
             */
            public verify(hostname : string, session : javax.net.ssl.SSLSession) : boolean {
                return true;
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        ApiClient$2["__interfaces"] = ["javax.net.ssl.HostnameVerifier"];


    }

}


io.nem.ApiClient.ANDROID_SDK_VERSION_$LI$();

io.nem.ApiClient.IS_ANDROID_$LI$();

io.nem.ApiClient.JAVA_VERSION_$LI$();

io.nem.ApiClient.__static_initialize();

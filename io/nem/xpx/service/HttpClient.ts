/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.service {
    export class HttpClient {
        public constructor() {
        }

        public head(url : java.net.URL) {
            let conn : java.net.HttpURLConnection = null;
            try {
                conn = <java.net.HttpURLConnection>url.openConnection();
                conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
                conn.setRequestMethod("HEAD");
                conn.setDoOutput(true);
                conn.setUseCaches(false);
                let wr : java.io.DataOutputStream = new java.io.DataOutputStream(conn.getOutputStream());
                wr.close();
            } catch(e) {
                throw e;
            } finally {
                if(conn != null) conn.disconnect();;
            };
        }
    }
    HttpClient["__class"] = "io.nem.xpx.service.HttpClient";

}


import { decode, encode } from 'utf8';

export class Converter {

    private static _hexEncodeArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];


    /**
     * Converts string to array
     * @param input the input string
     */
    public static strToArray(input: string) {
        let bytes = [];
        for (let i = 0; i < input.length; i++) {
            bytes.push(input.charCodeAt(i));
        }
        return bytes;
    }


    /**
    * Convert hex string to Uint8Array
    * @param ua the Uint8Array
    */
    public static hex2ua(hexx: string): Uint8Array {

        let hex = hexx.toString(); //force conversion
        let ua = new Uint8Array(hex.length / 2);
        for (let i = 0; i < hex.length; i += 2) {
            ua[i / 2] = parseInt(hex.substr(i, 2), 16);
        }
        return ua;
    }

    /**
     * Convert Uint8Array to hex string
     * @param ua the Uint8Array
     */
    public static ua2hex(ua: Uint8Array): string {
        let s = '';
        for (let i = 0; i < ua.length; i++) {
            let code = ua[i];
            s += this._hexEncodeArray[code >>> 4];
            s += this._hexEncodeArray[code & 0x0F];
        }
        return s;
    }

    /**
     * Convert hex string to string
     * @param input the input hex string
     */
    public static hexToStr(hexx: string): string {
        let hex = hexx.toString();
        let str = '';
        for (let i = 0; i < hex.length; i += 2)
            str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
        return str;
    }

    /**
     * Convert input string to hex
     * @param input the input string
     */
    public static utf8ToHex(input: string): string {
        let rawString = this.rstr2utf8(input);
        let hex = "";
        for (var i = 0; i < rawString.length; i++) {
            hex += this.strlpad(rawString.charCodeAt(i).toString(16), "0", 2)
        }
        return hex;
    }

    /**
     * @param message

     */
    public static encodeHex(message: string): string {
        const rawString = this.rstr2utf8(message);
        let hex = "";
        for (let i = 0; i < rawString.length; i++) {
            hex += this.strlpad(rawString.charCodeAt(i).toString(16), "0", 2);
        }
        return encode(hex);
    }

    /**
     * @param hex

     */
    public static decodeHex(hex: string): string {
        let str = "";
        for (let i = 0; i < hex.length; i += 2)
            str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
        try {
            return decode(str);
        } catch (e) {
            return str;
        }
    }


    /**
     * Convert string into utf-8 string
     * @param input the input string
     */
    public static rstr2utf8(input: string): string {
        let output = "";

        for (let n = 0; n < input.length; n++) {
            let c = input.charCodeAt(n);

            if (c < 128) {
                output += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                output += String.fromCharCode((c >> 6) | 192);
                output += String.fromCharCode((c & 63) | 128);
            } else {
                output += String.fromCharCode((c >> 12) | 224);
                output += String.fromCharCode(((c >> 6) & 63) | 128);
                output += String.fromCharCode((c & 63) | 128);
            }
        }

        return output;
    }

    /**
     * Convert utf-8 string into string
     * @param input the input utf 8 string
     */
    public static utf82rstrutf82rstr(input: string): string {
        let output = "", i = 0, c = 0, c1 = 0, c2 = 0, c3 = 0;

        while (i < input.length) {
            c = input.charCodeAt(i);

            if (c < 128) {
                output += String.fromCharCode(c);
                i++;
            } else if ((c > 191) && (c < 224)) {
                c2 = input.charCodeAt(i + 1);
                output += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = input.charCodeAt(i + 1);
                c3 = input.charCodeAt(i + 2);
                output += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }

        return output;
    }

    /**
     * 
     * @param str the input string
     * @param pad the padding
     * @param len the padding length
     */
    private static strlpad(str: string, pad: string, len: number): string {
        while (str.length < len) {
            str = pad + str;
        }
        return str;
    }
}
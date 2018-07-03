/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.utils {
    /**
     * The Class ScannerUtils.
     * @class
     */
    export class ScannerUtils {
        /**
         * exit when enter string "exit".
         */
        public static monitorExit() {
            let scanner : java.util.Scanner = new java.util.Scanner(java.lang.System.in);
            try {
                while((true)) {
                    let line : string = scanner.nextLine();
                    if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("exit",line))) {
                        break;
                    }
                };
            } catch(ex) {
            } finally {
                scanner.close();
            };
        }
    }
    ScannerUtils["__class"] = "io.nem.xpx.utils.ScannerUtils";

}


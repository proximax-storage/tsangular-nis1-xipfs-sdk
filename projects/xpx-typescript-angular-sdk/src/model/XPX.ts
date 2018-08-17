import { MosaicTransferable, MosaicId, MosaicProperties } from 'nem-library';

export class XPX extends MosaicTransferable {
    /**
     * Divisiblity
     * @type {number}
     */
    public static DIVISIBILITY = 4;

    /**
     * Initial supply
     * @type {number}
     */
    public static INITIALSUPPLY = 9000000000;

    /**
     * Is tranferable
     * @type {boolean}
     */
    public static TRANSFERABLE = true;

    /**
     * Is mutable
     * @type {boolean}
     */
    public static SUPPLYMUTABLE = true;

    /**
     * mosaicId
     * @type {MosaicId}
     */
    public static MOSAICID: MosaicId = new MosaicId('prx', 'xpx');

    /**
     * constructor
     * @param amount
     */
    constructor(amount: number) {
        super(XPX.MOSAICID, new MosaicProperties(XPX.DIVISIBILITY, XPX.INITIALSUPPLY, XPX.TRANSFERABLE, XPX.SUPPLYMUTABLE), amount);
    }
}

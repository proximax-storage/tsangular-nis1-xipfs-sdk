import { MosaicTransferable, MosaicId, MosaicProperties } from 'nem-library';

/**
 * Copyright 2018 ProximaX Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

 /**
  * Class represents the ProximaX currency XPX
  */
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

import { MultisigInfo } from './multisig-info';

/*
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
 * Interface represents the NEM account information
 */
export interface AccountInfo {
    /**
     * The address of the account.
     */
    address?: string;

    /**
     * The balance of the account in micro NEM
     */
    balance?: number;

    /**
     * The important of the account
     */
    importance?: number;

    /**
     * The public key of the account.
     */
    publicKey?: string;

    /**
     * The label of the account (not used, always null).
     */
    label?: string;

    /**
     * The multisig information
     */
    multisigInfo?: MultisigInfo;

    /**
     * The number blocks that the account already harvested.
     */
    harvestedBlocks?: number;

    /**
     * The vested part of the balance of the account in micro NEM.
     */
    vestedBalance?: number;

}

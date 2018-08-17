
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
  * Interface represents the network info
  */
export interface Network {
    /**
     * The network id
     */
    id?: number;

    /**
     * The network prefix
     */
    prefix?: string;

    /**
     * The network character
     */
    char?: string;

    /**
     * The network endpoint
     */
    networkAddress?: string;

    /**
     * The network port
     */
    networkPort?: number;

    /**
     * The nem network protocol
     */
    nemNetworkProtocol?: string;
}

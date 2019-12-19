/*
* Copyright (c) 2019, Livio, Inc.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
* Redistributions of source code must retain the above copyright notice, this
* list of conditions and the following disclaimer.
*
* Redistributions in binary form must reproduce the above copyright notice,
* this list of conditions and the following
* disclaimer in the documentation and/or other materials provided with the
* distribution.
*
* Neither the name of the Livio Inc. nor the names of its contributors
* may be used to endorse or promote products derived from this software
* without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/

import { Enum } from '../../util/Enum.js';

/**
 * @typedef {Enum} SamplingRate
 * @property {Object} _MAP
 */
class SamplingRate extends Enum {
    constructor () {
        super();
    }

    /**
     * @return {String}
     */
    static get SamplingRate_8KHZ () {
        return SamplingRate._MAP.SamplingRate_8KHZ;
    }

    /**
     * @return {String}
     */
    static get SamplingRate_16KHZ () {
        return SamplingRate._MAP.SamplingRate_16KHZ;
    }

    /**
     * @return {String}
     */
    static get SamplingRate_22KHZ () {
        return SamplingRate._MAP.SamplingRate_22KHZ;
    }

    /**
     * @return {String}
     */
    static get SamplingRate_44KHZ () {
        return SamplingRate._MAP.SamplingRate_44KHZ;
    }

    /**
    * Get the value for the given enum key
    * @param value - A key to find in the map of the subclass
    * @return {*} - Returns a value if found, or null if not found
    */
    static valueForKey (key) {
        return SamplingRate._valueForKey(key, SamplingRate._MAP);
    }

    /**
    * Get the key for the given enum value
    * @param value - A primitive value to find the matching key for in the map of the subclass
    * @return {*} - Returns a key if found, or null if not found
    */
    static keyForValue (value) {
        return SamplingRate._keyForValue(value, SamplingRate._MAP);
    }
}

// We have to use SamplingRate_ prefix in the name because javascript will not
// allow the enum to start with a number
SamplingRate._MAP = Object.freeze({
    'SamplingRate_8KHZ': '8KHZ',
    'SamplingRate_16KHZ': '16KHZ',
    'SamplingRate_22KHZ': '22KHZ',
    'SamplingRate_44KHZ': '44KHZ',

});

export { SamplingRate };
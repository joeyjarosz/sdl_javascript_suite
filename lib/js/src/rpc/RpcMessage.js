/*
* Copyright (c) 2020, Livio, Inc.
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

import { RpcStruct } from './RpcStruct.js';
import { FunctionID } from './enums/FunctionID.js';

/**
 * @typedef {Object} RpcMessage
 * @property {MessageType} messageType
 */
class RpcMessage extends RpcStruct {
    /*
    {
        "messageType": "Request",
        "functionName": "RegisterAppInterface",
        "coorelationID": "320948",
        "isEncrypted": false,
        "parameters": {
            "appName": "Hello"
        },
        "bulkData": "...",
    }
    */

    /**
     * Initializes an instance of RpcMessage.
     * @class
     * @param {Object} store - A config object containing attributes such as messageType, functionName, correlationID, bulkData, and parameters.
     */
    constructor (store = {}) {
        super(store.parameters);
        this._isPayloadProtected = false;
        this._messageType = store.messageType;
        this._functionName = store.functionName;
        this._correlationID = store.correlationID;
        this.setBulkData(store.bulkData);
    }

    /**
     * Get the MessageType enum value.
     * @returns {MessageType} - A MessageType enum value.
     */
    getMessageType () {
        return this._messageType;
    }

    /**
     * Set the MessageType enum value.
     * @param {MessageType} type - A MessageType enum value.
     * @returns {RpcMessage} - A reference of this class to support method chaining.
     */
    setMessageType (type) {
        this._messageType = type;

        return this;
    }

    /**
     * Get the FunctionID name.
     * @returns {FunctionID} - A FunctionID enum key.
     */
    getFunctionId () {
        return this._functionName;
    }

    /**
     * Set the FunctionID enum key. If a FunctionID enum value is provided, it will attempted to be automatically converted into the matching key.
     * @param {FunctionID} name - A FunctionID enum key.
     * @returns {RpcMessage} - A reference of this class to support method chaining.
     */
    setFunctionId (name) {
        if (typeof name !== 'string') {
            this._functionName = FunctionID.keyForValue(name);
        } else {
            this._functionName = name;
        }

        return this;
    }

    /**
     * Get the correlation ID.
     * @returns {String} - The correlation ID.
     */
    getCorrelationId () {
        return this._correlationID;
    }

    /**
     * Set the correlation ID.
     * @param {String} id - The correlation ID.
     * @returns {RpcMessage} - A reference of this class to support method chaining.
     */
    setCorrelationId (id) {
        this._correlationID = id;

        return this;
    }

    /**
     * Get the bulk data.
     * @returns {Uint8Array} - Bulk data as a byte array.
     */
    getBulkData () {
        return this._bulkData;
    }

    /**
     * Set the bulk data.
     * @param {UInt8Array} data - Bulk data as a byte array.
     * @returns {RpcMessage} - A reference of this class to support method chaining.
     */
    setBulkData (data = null) {
        if (data !== null) {
            this._bulkData = data.slice(0);
        } else {
            this._bulkData = null;
        }

        return this;
    }

    /**
     * Get whether or not it is encrypted.
     * @returns {Boolean} - Whether or not it is encrypted.
     */
    isPayloadProtected () {
        return this._isPayloadProtected;
    }

    /**
     * Set whether or not it is encrypted.
     * @param {Boolean} bool - Whether or not it is encrypted.
     * @returns {RpcMessage} - A reference of this class to support method chaining.
     */
    setPayloadProtected (bool) {
        this._isPayloadProtected = bool;

        return this;
    }
}

export { RpcMessage };

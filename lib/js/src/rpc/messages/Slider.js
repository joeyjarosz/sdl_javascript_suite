/* eslint-disable camelcase */
/*
* Copyright (c) 2020, SmartDeviceLink Consortium, Inc.
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
* Neither the name of the SmartDeviceLink Consortium Inc. nor the names of
* its contributors may be used to endorse or promote products derived
* from this software without specific prior written permission.
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

import { FunctionID } from '../enums/FunctionID.js';
import { RpcRequest } from '../RpcRequest.js';

/**
 * Creates a full screen or pop-up overlay (depending on platform) with a single user controlled slider.
 */
class Slider extends RpcRequest {
    /**
     * @constructor
     */
    constructor (store) {
        super(store);
        this.setFunctionName(FunctionID.Slider);
    }

    /**
     * @param {Number} ticks - Number of selectable items on a horizontal axis
     * @return {Slider}
     */
    setNumTicks (ticks) {
        this.setParameter(Slider.KEY_NUM_TICKS, ticks);
        return this;
    }

    /**
     * @return {Number}
     */
    getNumTicks () {
        return this.getParameter(Slider.KEY_NUM_TICKS);
    }

    /**
     * @param {Number} position - Initial position of slider control (cannot exceed numTicks)
     * @return {Slider}
     */
    setPosition (position) {
        this.setParameter(Slider.KEY_POSITION, position);
        return this;
    }

    /**
     * @return {Number}
     */
    getPosition () {
        return this.getParameter(Slider.KEY_POSITION);
    }

    /**
     * @param {String} header - Text header to display
     * @return {Slider}
     */
    setSliderHeader (header) {
        this.setParameter(Slider.KEY_SLIDER_HEADER, header);
        return this;
    }

    /**
     * @return {String}
     */
    getSliderHeader () {
        return this.getParameter(Slider.KEY_SLIDER_HEADER);
    }

    /**
     * @param {String[]} footer - Text footer to display (meant to display min/max threshold descriptors). For a static
     *                            text footer, only one footer string shall be provided in the array. For a dynamic text
     *                            footer, the number of footer text string in the array must match the numTicks value.
     *                            For a dynamic text footer, text array string should correlate with potential slider
     *                            position index. If omitted on supported displays, no footer text shall be displayed.
     * @return {Slider}
     */
    setSliderFooter (footer) {
        this.setParameter(Slider.KEY_SLIDER_FOOTER, footer);
        return this;
    }

    /**
     * @return {String[]}
     */
    getSliderFooter () {
        return this.getParameter(Slider.KEY_SLIDER_FOOTER);
    }

    /**
     * @param {Number} timeout - App defined timeout. Indicates how long of a timeout from the last action (i.e. sliding
     *                           control resets timeout). If omitted, the value is set to 10000.
     * @return {Slider}
     */
    setTimeout (timeout) {
        this.setParameter(Slider.KEY_TIMEOUT, timeout);
        return this;
    }

    /**
     * @return {Number}
     */
    getTimeout () {
        return this.getParameter(Slider.KEY_TIMEOUT);
    }

    /**
     * @param {Number} id - An ID for this specific Slider to allow cancellation through the `CancelInteraction` RPC.
     * @return {Slider}
     */
    setCancelID (id) {
        this.setParameter(Slider.KEY_CANCEL_ID, id);
        return this;
    }

    /**
     * @return {Number}
     */
    getCancelID () {
        return this.getParameter(Slider.KEY_CANCEL_ID);
    }
}

Slider.KEY_NUM_TICKS = 'numTicks';
Slider.KEY_POSITION = 'position';
Slider.KEY_SLIDER_HEADER = 'sliderHeader';
Slider.KEY_SLIDER_FOOTER = 'sliderFooter';
Slider.KEY_TIMEOUT = 'timeout';
Slider.KEY_CANCEL_ID = 'cancelID';

export { Slider };
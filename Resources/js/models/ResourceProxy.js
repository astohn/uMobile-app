/*
 * Licensed to Jasig under one or more contributor license
 * agreements. See the NOTICE file distributed with this work
 * for additional information regarding copyright ownership.
 * Jasig licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a
 * copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/**
* @constructor
**/

var resolutionMatrix,
config = require('/js/config'),
deviceProxy = require('/js/models/DeviceProxy');

exports.retrievePortletIcon = function (fname) {
    if (!config.nativeIcons[fname]) {
        Ti.API.error("Couldn't find icon for " + fname);
        return false;
    }
    else if (deviceProxy.isIPad()) {
        return '/images/' + config.nativeIcons[fname].replace('.png', '_72.png');
    }
    else if (deviceProxy.isIPhone()){
        return '/images/' + config.nativeIcons[fname];
    }
    else if (deviceProxy.isAndroid()) {
        return '/images/' + config.nativeIcons[fname];
    }
    else {
        Ti.API.error("This device type could not be determined in retrievePortletIcon() in ResourceProxy");
        return false;
    }
};
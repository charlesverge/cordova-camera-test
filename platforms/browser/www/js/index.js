/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.getElementById('capture').onclick = app.capture;
        document.getElementById('capturewoptions').onclick = app.capturewoptions;
        document.getElementById('select').onclick = app.select;
        document.getElementById('selectwoptions').onclick = app.selectwoptions;
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    capture: function() {
        navigator.camera.getPicture(app.success, app.error, {sourceType: Camera.PictureSourceType.CAMERA});
    },
    select: function() {
        navigator.camera.getPicture(app.success, app.error, {sourceType: Camera.PictureSourceType.PHOTOLIBRARY});
    },
    capturewoptions: function() {
        var capture = document.createElement('button');
        capture.innerHTML = 'Test Capture';
        var cancel = document.createElement('button');
        cancel.innerHTML = 'Test Cancel'
        var options = {
            sourceType: Camera.PictureSourceType.CAMERA,
            popoverOptions: {
                className: 'camera-hover',
                capturebutton: capture,
                cancelbutton: cancel,
            }
        };
        navigator.camera.getPicture(app.success, app.error, options);
    },
    selectwoptions: function() {
        var capture = document.createElement('button');
        capture.innerHTML = 'Test Capture';
        var cancel = document.createElement('button');
        cancel.innerHTML = 'Test Cancel'
        var options = {
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            popoverOptions: {
                className: 'camera-hover',
                capturebutton: capture,
                cancelbutton: cancel,
            }
        };
        navigator.camera.getPicture(app.success, app.error, options);
    },
    success: function(uri) {
        console.log(uri);
        var id = document.getElementById('image');
        id.src = 'data:image/png;base64,' + uri;
        id.style.display = "inline";
    },
    error: function(error) {
        console.error(error);
    },
};

app.initialize();
window.app = app;

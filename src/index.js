/*
 * index.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

import _ from 'underscore';
import raf from 'raf';

let canvas = null;
let ctx = null;
let img = null;

function init() {
    // create a html5 canvas element
    canvas = document.createElement('canvas');
    canvas.width = 480;
    canvas.height = 320;
    document.body.appendChild(canvas);

    // grab a 2D context to draw to
    ctx = canvas.getContext('2d');

    // on image load begin animating
    img = new Image();
    img.onload = () => {
        raf(animate);
    };
    img.src = 'res/img/html.png';
}

function animate() {
    raf(animate);

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, canvas.width/2 - img.width/2, canvas.height/2 -
            img.height/2);
}

window.onload = function() {
    init();
};

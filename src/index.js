import debuglib from 'debug';

window.log = debuglib('game:log');
window.error = debuglib('game:error');

import Crafty from 'craftyjs';
import Stats from 'stats.js';
import raf from 'raf';
import 'matter-js';
import 'crafty-matter';
debuglib.enable('game:*');

window.Game = {};

Game.settings = {
    width: 750,
    height: 300
};

Crafty.init(Game.settings.width, Game.settings.height);

Crafty.Matter.init({
    debug: true,
    gravity: {
        x: 0,
        y: 0.098
    }
});

Crafty.background('#a5e8ff');

Crafty.e('Matter, Color')
    .attr({ x: 0, y: 290, w: 600, h: 10, matter: {
        isStatic: true
    } })
    .color('#BADA55');

Crafty.e('Matter, Color')
    .attr({ x: 50, y: 0, w: 20, h: 20 })
    .color('#BADA55');


var stats = new Stats();
stats.setMode(0);

stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';

document.body.appendChild( stats.domElement);

raf(function update() {
    stats.begin();


    stats.end();

    raf( update );
});
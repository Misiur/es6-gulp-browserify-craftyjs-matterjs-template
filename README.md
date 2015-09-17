## es6-gulp-browserify-game-template

This repository contains a basic project template for HTML5 games.

### Features:

* ES6 using Babel
* Node like module importing using Browserify
* Build automation using gulp
* Source file watching and livereload
* GH-Pages quick hosting

### View:

The template is running live [here](http://adelciotto.github.io/es6-gulp-browserify-game-template/)

![preview](http://imgur.com/4WbeQww.png)

### Using the template

#### clone the repo

```shell
git clone https://github.com/adelciotto/es6-gulp-browserify-game-template.git
your-game-name/
cd your-game-name
```

#### setup the template

Ensure node & npm is installed, then install all the project dependencies

```shell
npm i
```

#### npm tasks:

* ```npm run dev``` - Builds and scripts and assets in development mode, then
hosts the game at [localhost:8000](http://localhost:8000). All source files and
assets are watched and a browser reload will be triggered on any changes.
* ```npm run prod``` - Builds and scripts and assets in production mode, then
hosts the game at [localhost:8000](http://localhost:8000).
* ```npm run build``` - Builds the scripts and assets in production mode.
This means all source files are minified and all assets are optimised.

### Deploying the game

#### push to gh-pages branch

To update the deployed game; please run the gh pages deploy script in the root
directory:

```shell
./scripts/deploy
```
If you require a force push, then run this command:

```shell
git push origin `git subtree split --prefix dist master`:gh-pages --force
```

## es6-gulp-browserify-template

This repository contains a basic project template for HTML5 games.

### View:

The template is running live [here](http://adelciotto.github.io/es6-gulp-browserify-game-template/)

### Using the template

#### clone the repo

```shell
git clone https://github.com/adelciotto/es6-gulp-browserify-game-template.git -o
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


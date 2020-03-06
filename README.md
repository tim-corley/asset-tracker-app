# ASSET TRACKER

## Requirements

For development, you will only need **Node.js** installed on your environement.

### Node

[Node](http://nodejs.org/) is really easy to install & now includes [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v12.6.0

    $ npm --version
    6.13.7

#### Node Installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

Once installed, run

    brew install node

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

## Install

    $ git clone https://github.com/tim-corley/asset-tracker-app.git
    $ cd asset-tracker-app
    $ npm install

## Start & watch

    $ npm run start

## Simple build for production

    $ npm run build

## Update sources

Some packages usages might change so you should run `npm prune` & `npm install` often.
A common way to update is by doing

    $ git pull
    $ npm prune
    $ npm install

To run those 3 commands you can just do

    $ npm run pull

---

## Languages & tools

### JavaScript

- [React](https://reactjs.org/) is used for UI.

### CSS

- [TailwindCSS](https://tailwindcss.com/) is used styling.

### Backend

- [Firebase](https://firebase.google.com/) is used for the database (Real-Time Databse) and for hosting.

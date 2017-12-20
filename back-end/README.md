# 2017-tbia-app-server

- [Installation](#installation)
- [First time setup](#first-time-setup)
- [Running the app](#running-the-app)
- [Deployment on MOC](#deployment-on-moc)
- [Development Notes](#development-notes)

## Installation
__DEVELOPMENT NOTE__: We're maintaining a fork of Anchor in `bu-else/2017-tbia-anchor` and using it as a submodule here.

To install dependencies for anchor, run
```
$ cd 2017-tbia-anchor
$ npm install
```

## First time setup
__WARNING__: This will clear all data in the following MongoDB collections if they exist: `accounts`, `adminGroups`, `admins`, `authAttempts`, `sessions`, `statuses`, and `users`.

To setup MongoDB, run
```
$ cd setup_scripts
$ bash setup_mongo.sh
```

To setup anchor, run
```
$ cd 2017-tbia-anchor
$ npm run first-time-setup
```

## Running the app
To serve the back-end using localhost, run
```
$ cd 2017-tbia-anchor
$ npm start
```

## Deployment on MOC

## Development notes
* bcrypt is experimentally being swapped out for bcryptjs, using the instructions at:<br>
https://github.com/jedireza/frame/wiki/bcrypt-Installation-Trouble<br>
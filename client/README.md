# 2017-tbia-app-client

- [Installation](#installation)
- [Running the app](#running-the-app)
- [Running the simulator](#running-the-simulator)
- [Running tests](#running-tests)
- [Reference](#reference)

## Installation
To run the application, cd into `/client` folder and download the dependencies
```
$ cd client
$ npm install
```

## Configuration
Simply edit the following line in `/config/env.ts` file to reflect `development` and `production`.
```javascript
public static currentEnvironment: string = "development";
public static currentEnvironment: string = "production";
```
Ionic app will run against local server in `development` and MOC server in `production`.

## Running the app
In Safari, go to `Menu > Develop` and check `Disable Local File Restrictions` and `Disable Cross-Origin Restrictions` fields.

To start a local dev server for app dev/testing, run
```
ionic serve
```

To run the app with the Ionic CLI, run
```
$ ionic cordova platform add ios
$ ionic cordova run ios
```
Substitute ios for android if not on a Mac.

To setup an emulator, follow the guides
- [iOS Platform Guide](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html)
- [Android Platform Guide](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html)

## Running tests
We follow the [Ionic Unit Testing Example](https://github.com/ionic-team/ionic-unit-testing-example) to write all of our front-end tests. The tests can be found in ```src/app/*.spec.ts``` and ```e2e/*.e2e-spec.ts``` files.

#### Unit Tests
To run ionic unit tests, run
```
$ npm run test
```

#### End-To-End Tests (browser-only)
To run end-to-end (e2e) tests, serve the app first and run
```
$ ionic serve
$ npm run e2e
```

#### Continuous Integration
We use [Travis CI](https://travis-ci.org/) for our CI workflow. Currently Travis covers our ionic unit tests but not e2e tests.

## Reference
- [Ionic Starter Template](https://github.com/ionic-team/ionic-starter-super)
- [Ionic Unit Testing Example](https://github.com/ionic-team/ionic-unit-testing-example)
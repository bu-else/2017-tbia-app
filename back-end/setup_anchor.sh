#!/bin/bash
# Will install and run first time setup
sudo apt-get update
sudo apt-get install git
sudo apt-get install nodejs
sudo apt-get install npm
git clone -b Develop https://github.com/bu-else/2017-tbia-app.git
cd ./anchor
npm install
npm run first-time-setup
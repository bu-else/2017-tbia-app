#!/bin/bash
# Will install and run first time setup
# This file is intended to be dropped via SFTP and then run
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
git clone -b Develop --recursive https://github.com/bu-else/2017-tbia-app.git
cd /2017-tbia-app/back-end/anchor/
sudo npm install
sudo npm run first-time-setup
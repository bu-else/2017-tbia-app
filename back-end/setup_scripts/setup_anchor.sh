#!/bin/bash
# Will install and run first time setup
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
cd ./../anchor
npm install
npm run first-time-setup
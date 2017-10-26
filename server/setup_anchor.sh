#!/bin/bash
# Will install and run first time setup
sudo apt-get update
sudo apt-get install git
sudo apt-get install nodejs
sudo apt-get install npm
git clone git@github.com:hicsail/anchor.git
cd anchor
npm install
npm run first-time-setup
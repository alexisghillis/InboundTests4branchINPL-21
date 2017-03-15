# Poland Automated tests

The repository contains a framework you can use and develop further to test the Poland Inbound App.
Following this description are the prerequirments steps you need to make in order to have a functional environment.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
Select environment in the codecept.json in the URL field (suggestion: http://localhost:3000/login, http://dev.inbound.makro.pl/login)
The triple slash directive : <reference path="../steps.d.ts" /> is used for Atom typescript plugin, so you can code easier.
Do not forget to switch the Nightmare helper "show" attribute to false when running in production.

### Useful links

[Codeceptjs tutorial](http://codenroll.it/acceptance-testing-with-codecept-js/) - Useful to learn how it works

[Real click for React components](https://github.com/Mr0grog/nightmare-real-mouse) - Bread and Butter for those components that are hard to automate

### Prerequisities

````
branch INPL-21
````

Run the following command to install the necesary modules:

````
npm install -g yarn
npm install -g codeceptjs
npm install chai
npm install nightmare
npm i nightmare-upload
npm install nightmare-real-mouse

````

## Running the tests

There are two tests. One performs login and logout. 
The second one performs login, filtering, cleanup and logout.
The filtering test requires all Article Table columns to be selected. 
It's purpose is to run on a fresh deployed application.

Run the following commands inside the codeceptjs_poc_poland folder
````
yarn test 
yarn test -- --grep filter
yarn test -- --grep Login
````

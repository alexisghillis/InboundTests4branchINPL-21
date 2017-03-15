# Poland Automated tests

The repository contains a framework you can use and develop further to test the Poland Inbound App.
Following this description are the prerequirments steps you need to make in order to have a functional environment.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
Select environment in the codecept.json in the URL field (suggestion: http://localhost:3000/login, http://dev.inbound.makro.pl/login)
The triple slash directive is used for Atom typescript plugin, so you can code easier.
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
yarn add --dev codeceptjs nightmare nightmare-upload
npm install chai
npm install nightmare-real-mouse

````

## Running the tests

### Automated tests
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
### Performance test

The load test is a .jmx file that holds 3 webservice calls. Every Thread group has Authorization
and X-Authorization header. The first is for Kubernetes and the second is the application authorization.

````
HOST: 
k8sapi1-test6-mcc.metroscales.io/api/v1/proxy/namespaces/default/services/workflow-poland-backend
SERVICES:
GET /mdm-members
POST /mdm-member
POST /changeRequestsAll
````
I encourage you to review this link:

[Create a Jmeter Test Plan](https://jmeter.apache.org/usermanual/build-web-test-plan.html)

In order to add services to this Test Plan, install Jmeter and open the "Test Dev.jmx" file.

To run the test, run this command inside the folder ./jmeter/

````
jmeter -n -t "\Test Plan\Test Dev.jmx" -l "\Results\results" -e -o "\HTML Report\html_report" -JThreads=15
````
The test creates a result file and a HTML report that should be sent via email to the team.

![Imgur](http://i.imgur.com/Rj9hWda.jpg)

Contact me anytime for questions: alexis-toma.ghillis@metrosystems.net or @godzi on slack
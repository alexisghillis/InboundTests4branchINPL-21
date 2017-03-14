/// <reference path="../steps.d.ts" />

// jmeter -n -t "C:\APPS\Jmeter\Test Plans\Test Dev.jmx" -l "C:\APPS\Jmeter\results" -e -o "C:\APPS\Jmeter\html report"

// The automation scripts work with branch INPL-21
Feature('Login');

Scenario('User log in and selects supplier and logs out', (I, LoginPage, SelectSupplierPage, InboundNavigationPage) => {
  const user = 'metro-inbound';
  const pass = 'juicy-tootsie';
  const supplier = '20636';

  I.amOnPage('/');
  LoginPage.login(user,pass);
  SelectSupplierPage.searchSupplier(supplier);
  InboundNavigationPage.clickSettings();
  InboundNavigationPage.clickUpdatePrice();
  InboundNavigationPage.logout();

});

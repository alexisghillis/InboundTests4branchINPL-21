/// <reference path="../steps.d.ts" />
const weNeed = require('nightmare');
require('nightmare-real-mouse')(weNeed);

Feature('Filter');

Scenario('Test the filtering of the article table', (I, LoginPage, SelectSupplierPage, InboundNavigationPage, ColumnFiltering) => {
  const user = 'metro-inbound';
  const pass = 'juicy-tootsie';
  const supplier = '20636';

  I.amOnPage('/');
  LoginPage.login(user,pass);
  SelectSupplierPage.searchSupplier(supplier);

//  Filter number of articles in table to 50
  ColumnFiltering.filterArticlesNo("50");

// Filter the columns and leave only "Supplier Number", "Blocking Status" and "PUAR" after the number of articles in table was set to 50
  ColumnFiltering.filterColumn("Article Number");
  ColumnFiltering.filterColumn("Variant Number");
  ColumnFiltering.filterColumn("Bundle Number");
  ColumnFiltering.filterColumn("Variant Name");
  ColumnFiltering.filterColumn("Metro Article No");
  ColumnFiltering.filterColumn("Subsystem Article No");
  ColumnFiltering.filterColumn("Supplier Name");
  ColumnFiltering.filterColumn("BUBP");
  ColumnFiltering.filterColumn("Currency");
  ColumnFiltering.filterColumn("Sales Price Min");
  ColumnFiltering.filterColumn("Sales Price Max");
  ColumnFiltering.filterColumn("NBP");
  ColumnFiltering.filterColumn("Margin");
  ColumnFiltering.filterColumn("GTIN");
  ColumnFiltering.filterColumn("Sales Bundle Content");
  ColumnFiltering.filterColumn("Article Name");

//  Verify that Supplier Number column exists and click on filter. Filter the column via the first option
  ColumnFiltering.filterByColumnDropDown("Supplier Number");

//  Verify that Blocking Status column exists and click on filter. Filter the column via the first option
  ColumnFiltering.filterByColumnDropDown("Blocking Status");

//  Verify that PUAR column exists and click the filter. Filter the column via first option
  ColumnFiltering.filterByColumnDropDown("PUAR");


//Cleanup

//**** For future we need a test user that does not have a persistent session on the server
//**** The code below will not be needed in the future when we will have the above user

//  Restore the removed columns
ColumnFiltering.restoreColumn("Article Number");
ColumnFiltering.restoreColumn("Variant Number");
ColumnFiltering.restoreColumn("Bundle Number");
ColumnFiltering.restoreColumn("Variant Name");
ColumnFiltering.restoreColumn("Metro Article No");
ColumnFiltering.restoreColumn("Subsystem Article No");
ColumnFiltering.restoreColumn("Supplier Name");
ColumnFiltering.restoreColumn("BUBP");
ColumnFiltering.restoreColumn("Currency");
ColumnFiltering.restoreColumn("Sales Price Min");
ColumnFiltering.restoreColumn("Sales Price Max");
ColumnFiltering.restoreColumn("NBP");
ColumnFiltering.restoreColumn("Margin");
ColumnFiltering.restoreColumn("GTIN");
ColumnFiltering.restoreColumn("Sales Bundle Content");
ColumnFiltering.restoreColumn("Article Name");

//logout
InboundNavigationPage.logout();

});

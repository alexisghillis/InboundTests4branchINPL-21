/// <reference path="../steps.d.ts" />

'use strict';

let I;

module.exports = {

  _init() {
    I = actor();
  },
//Element getters
searchField: () => '.search-input-text-input',
searchButton: () =>'.search-input-button',

//Interactions
  searchSupplier(supplier){
    I.fillField(this.searchField(), supplier);
    I.click(this.searchButton());
    I.waitForElement('.row-24.article-list-row',5);
  }
}

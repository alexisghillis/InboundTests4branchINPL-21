/// <reference path="../steps.d.ts" />
'use strict';

let I, columns, articles;
module.exports = {

  _init() {
    I = actor();
    columns = {
      "Article Number"  : "#articleNumber",
      "Variant Number" : "#variantNumber",
      "Bundle Number" : "#bundleNumber",
      "Variant Name" : "#variantText",
      "Metro Article No" : "#metroArticleNo",
      "Supplier Number" : "#supplierNumber",
      "Subsystem Article No" : "#subsystemArticleNo",
      "Supplier Name" : "#supplierName",
      "BUBP" : "bubp",
      "Currency" : "currency",
      "Blocking Status" : "blockingStatus",
      "Sales Price Min" : "salesPriceMin",
      "Sales Price Max" : "salesPriceMax",
      "NBP" : "netBuyingPricePerPiece",
      "Margin" : "margin",
      "GTIN" : "gtin",
      "PUAR" : "puar",
      "Sales Bundle Content" : "bundleContent",
      "Article Name" : "articleName"
    },

    articles = {
      "25" : "1",
      "50": "2",
      "100" : "3",
      "300" : "4"
    }
  },

  //Element getters
  showHideColumnsButton: () => '.button.button--primary.data-table-filter-button',
  columnsDiv: () => 'div.data-table-columns-filter',
  rowInTable: () => '.row-24.article-list-row',
  outerDiv: () => 'div.Select-menu-outer',
  numberOfArticlesDropDown: () => '#articles > div > div.container.data-table-header-menu > div.data-table-pagination > div.Select.data-table-pagination-sizes.Select--single.is-searchable.has-value > div',
  dropDownFocusedOption: () => 'div[role="option"][class="Select-option is-focused"]',

  //Interactions
  filterArticlesNo(artNo){
    //I.see(this.numberOfArticlesDropDown());
    I.clickForReal(this.numberOfArticlesDropDown());
    I.waitForElement(this.outerDiv(),5);
    I.clickForReal('div.Select-menu-outer > div.Select-menu > div.Select-option:nth-child(' + articles[artNo] + ') ');
    I.waitForElement(this.rowInTable(),5);
  },

  filterColumn(columnName){
    I.verifyIfColumnExists(columnName,true,false);
    I.click(this.showHideColumnsButton());
    I.waitForElement(this.columnsDiv(),5);
    I.click(columns[columnName]);
    I.waitForElement(this.rowInTable(),5);
    I.click(this.showHideColumnsButton());
    I.verifyIfColumnExists(columnName,false,false);
  },

  filterByColumnDropDown(columnName){
    I.verifyIfColumnExists(columnName,true,true);
    I.waitForElement(this.outerDiv(),5);
    I.clickForReal(this.dropDownFocusedOption());
    I.waitForElement(this.rowInTable(),5);
    I.wait(5);
  },

  restoreColumn(columnName){
    I.click(this.showHideColumnsButton());
    I.waitForElement(this.columnsDiv(),5);
    I.click(columns[columnName]);
    I.verifyIfColumnExists(columnName,true,false);
  }


}

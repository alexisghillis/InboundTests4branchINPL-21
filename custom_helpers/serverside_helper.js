/// <reference path="../steps.d.ts" />
'use strict';

 let assert = require('chai').assert;

class ServerSide extends Helper {

  _before() {
    this.err = null;
    this.helpers['Nightmare'].browser.on('error', (e) => this.err = e);
  }

  _afterStep() {
    if (this.err) throw new Error('Browser JS error '+this.err);
  }



  setSelectorValue(address,payload){
      let browser = this.helpers['Nightmare'].browser;
    return browser.evaluate(function(who,what){
         document.querySelector(who).innerText = what;
      }, address, payload);
  }

  clickForReal(what){
    let browser = this.helpers['Nightmare'].browser;
    browser.realClick(what);
  }

  verifyIfColumnExists(column, isVisible, clickFilter){
    let browser = this.helpers['Nightmare'].browser;

    return browser.evaluate(function(col){
      let visibleColumnIndex;
      var tableHeaders = document.querySelectorAll('.data-table-header');
      tableHeaders.forEach( (header, index) => {
        if(header.innerText.includes(col)){
          visibleColumnIndex = index;
          return;
        }
      });
      return visibleColumnIndex;
    }, column).then(function(visibleColumnIndex){
        if(visibleColumnIndex >= 0 && isVisible){
          const dropDownFilterIndex = visibleColumnIndex + 2;
          assert.isOk(true,'Column found on index '+visibleColumnIndex);
          return dropDownFilterIndex;
        } else if(!visibleColumnIndex && !isVisible) {
            assert.isOk(true,'Column not found but is ok');
        }else {
              assert.isOk(false,'Column not found');
          }
    }).then(function(dropDownFilterIndex){
      if(clickFilter)
        browser.realClick('#overview_articlelist > tbody > tr:nth-child(1) > th:nth-child(' + dropDownFilterIndex + ') > div.data-table-header-content-with-filter > div > div');
      else return
    });

  }

}

module.exports = ServerSide;

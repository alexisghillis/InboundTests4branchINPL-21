/// <reference path="../steps.d.ts" />

'use strict';

let I;

module.exports = {

  _init() {
    I = actor();
  },
  //Element getters
  logoutButton: () => '.logout-button',
  settingsButton: () => { return {name: 'division-manager-information'}},
  priceUpdateButton: () => { return {name: 'price-update-list'}},

  //Interactions
  logout(){
    I.click(this.logoutButton());
    I.waitForElement('#username',5);
  },

  clickSettings(){
    I.click(this.settingsButton());
    I.waitForText('First Name', 5);
    I.click('.division-manager-info-popup-close')
  },

  clickUpdatePrice(){
    I.click(this.priceUpdateButton());
    I.waitForText('Change request list', 5);
  }
}

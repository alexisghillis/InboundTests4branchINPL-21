/// <reference path="../steps.d.ts" />

'use strict';

let I;

module.exports = {

  _init() {
    I = actor();
  },
  //Element getters
  userName: () => '#username',
  passWord: () => '#password',
  loginButton: () =>'.login-form > button',

  //Interactions
  login(user,pass){
    I.fillField(this.userName(), user);
    I.fillField(this.passWord(), pass);
    I.click(this.loginButton());
    I.waitForText('Search for articles',5);
  }
}

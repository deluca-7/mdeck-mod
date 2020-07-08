// ==UserScript==
// @name         Temp mod file
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  removes inline styles, rearrange DOM
// @author       You
// @match        https://mammudeck.com/*
// @grant        none
// ==/UserScript==

/*
  This code will do some current modifications to mammudeck to set it up for
  CSS grid to enable mobile screens etc.

  It will remove inline styles, rearrange the DOM to unwrap tables into a div
  structure for the grid style.

 */
window.onload = () => {

  'use strict';

  // This snippet will remove all inline styles initially
  document
    .querySelectorAll('*')
    .forEach(el => {el.removeAttribute('style')});

  // todo table unwrapper

};


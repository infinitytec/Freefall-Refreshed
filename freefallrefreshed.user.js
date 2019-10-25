// ==UserScript==
// @name         Freefall Refreshed
// @namespace    Freefall with a fresh coat of paint.
// @version      0.2
// @author       infinitytec
// @match        http://freefall.purrsia.com/
// @include      http://freefall.purrsia.com/default.htm
// @include      http://freefall.purrsia.com/lastthree.htm
// @grant        GM_addStyle
// @updateURL    https://github.com/infinitytec/Freefall-Refreshed/raw/master/freefallrefreshed.user.js
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle("html{font-family: arial, sans-serrif;} table tr {background: transparent;} table b a {padding: 1em; border-radius: 1em; color: black; background: white;}");
    GM_addStyle("body, body > p:nth-child(19){text-align: center; background: #5284dc; color: white;}");
    GM_addStyle("a img {padding: 0.5em; margin: 0.1em; background: white; border-radius: 0.5em; vertical-align: middle; min-height: 6em; box-sizing: border-box; border: 3px solid white;}");
    GM_addStyle("body > p:nth-child(12) > a:nth-child(4) img, body > p:nth-child(12) > a:nth-child(5) img{min-height: 1em;}body > p:nth-child(12) > a:nth-child(5) img {padding: 1.4em;}");
    GM_addStyle("body > p:nth-child(12) > a:nth-child(3), body > p:nth-child(12) > a:nth-child(1), body > p:nth-child(12) > a:nth-child(2), body > b:nth-child(3) > a:nth-child(1), body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > hr:nth-child(10), body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > b:nth-child(13),body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > b:nth-child(14),body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > b:nth-child(15),body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > b:nth-child(16),body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > b:nth-child(17),body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > font:nth-child(11),body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > b:nth-child(6),body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > b:nth-child(8) {display: none}");
    GM_addStyle("p a, body > font:nth-child(17) > a:nth-child(1), body > a:nth-child(7), body > a:nth-child(8), body > a:nth-child(9) {color: white; text-decoration: underline; border-radius: 0.25em;}");
    GM_addStyle("a img:hover{transition: all 0.2s ease; border: 3px solid #ff9d3f;}");
})();

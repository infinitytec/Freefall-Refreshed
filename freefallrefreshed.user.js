// ==UserScript==
// @name         Freefall Refreshed
// @namespace    Freefall with a fresh coat of paint.
// @version      0.4
// @author       infinitytec
// @match        http://freefall.purrsia.com/
// @include      http://freefall.purrsia.com/default.htm
// @include      http://freefall.purrsia.com/lastthree.htm
// @include      http://freefall.purrsia.com/archives/*
// @include      http://freefall.purrsia.com/ff*
// @include      http://freefall.purrsia.com/zipped/*
// @include      http://freefall.purrsia.com/awards.htm
// @grant        GM_addStyle
// @updateURL    https://github.com/infinitytec/Freefall-Refreshed/raw/master/freefallrefreshed.user.js
// ==/UserScript==

(function() {
    'use strict';
    //colors: blue: #5284dc orange: #ff9d3f
    //basic stuff
    GM_addStyle("html{font-family: arial, sans-serrif;}");
    GM_addStyle("body, body > p:nth-child(19){text-align: center; background: #555555; color: white;}");
    //top navbar
    GM_addStyle("table tr {background: transparent; font-size: 0;} table b {font-size: initial;} table b a {padding: 0.5em; margin: 0.25em; border-radius: 1em; color: black; background: white; text-decoration: none; border: 3px solid white;} table b a:hover{transition: all 0.2s ease; border: 3px solid #ff9d3f;}");
    //clickable images
    GM_addStyle("a img {padding: 0.5em; margin: 0.1em; background: white; border-radius: 0.5em; vertical-align: middle; min-height: 6em; box-sizing: border-box; border: 3px solid white;}");
    GM_addStyle("a img:hover{transition: all 0.2s ease; border: 3px solid #ff9d3f;} ");
    GM_addStyle("body > p:nth-child(12) > a:nth-child(4) img, body > p:nth-child(12) > a:nth-child(5) img{min-height: 1em;}body > p:nth-child(12) > a:nth-child(5) img {padding: 1.4em;}");
    //hide distractions
    GM_addStyle("body > p:nth-child(12) > a:nth-child(3), body > p:nth-child(12) > a:nth-child(1), body > p:nth-child(12) > a:nth-child(2), body > b:nth-child(3) > a:nth-child(1), body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > hr:nth-child(10), body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > b:nth-child(13),body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > b:nth-child(14),body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > b:nth-child(15),body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > b:nth-child(16),body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > b:nth-child(17),body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > font:nth-child(11),body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > b:nth-child(6),body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > b:nth-child(8), body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > b:nth-child(11), body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > b:nth-child(12), body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > hr:nth-child(8), body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > hr:nth-child(9) {display: none}");
    //text links
    GM_addStyle("a:not(img), p a, body > a:nth-child(5), body > a:nth-child(6), body > font:nth-child(17) > a:nth-child(1), body > a:nth-child(7), body > a:nth-child(8), body > a:nth-child(9) {color: white; text-decoration: underline; border-radius: 0.25em;} p a:hover, body > a:nth-child(5):hover, body > a:nth-child(6):hover, body > font:nth-child(17) > a:nth-child(1):hover, body > a:nth-child(7):hover, body > a:nth-child(8):hover, body > a:nth-child(9):hover, a:not(img):hover {transition: all 0.2s ease; color: #ff9d3f;}");
    //Arvhive page tweaks
    GM_addStyle("body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > font:nth-child(9), body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > font:nth-child(10) {display: block; padding-top: 5em;} body > p:nth-child(12) > table:nth-child(1), body > p:nth-child(15) > table:nth-child(1), body > p:nth-child(13) > table:nth-child(1),body > p:nth-child(14) > table:nth-child(1) {padding-left: 50rem;}");
    //Awards page (currently broken)
    GM_addStyle("body > p:nth-child(4) > a:nth-child(1) > img:nth-child(1) {display: inline-block !important;}");
})();

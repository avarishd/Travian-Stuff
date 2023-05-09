// ==UserScript==
// @name         Travian Report Highlighter
// @namespace    https://github.com/avarishd/Travian-Stuff
// @version      1
// @description  Hightlight reports with more than 1000 potential resources
// @author       Avarishd
// @include     *://*.travian.*/report*
// ==/UserScript==

(function() {
    var limit = 1000;
    var arr = document.querySelectorAll(".carry");
    for (i=0; i<arr.length; i++) {
        if (Number(arr[i].alt.split("/")[1]) > limit) {
            arr[i].style.backgroundColor = "blue";
        }
    }
})();

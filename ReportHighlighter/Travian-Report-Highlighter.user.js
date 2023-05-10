// ==UserScript==
// @name         Travian Report Highlighter
// @namespace    https://github.com/avarishd/Travian-Stuff
// @version      1.1
// @description  Hightlight reports with more than 1000 potential resources
// @author       Avarishd
// @include     *://*.travian.*/report*
// ==/UserScript==

(function()
{
    var arr = document.querySelectorAll(".carry");
    var amount = 0;
    var style;
    for (i=0; i<arr.length; i++)
    {
        amount = Number(arr[i].alt.split("/")[0]) // If 120/400, 0 = 120, 1 = 400
        if (amount <= 100) style = "darkblue";
        if (amount >= 100) style = "yellow";
        if (amount >= 500) style = "brown";
        if (amount >= 1000) style = "pink";
        if (amount >= 2000) style = "purple";

        arr[i].style.width = "20px";
        arr[i].style.backgroundColor = style;
    }
})();

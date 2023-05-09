// ==UserScript==
// @name         Travian NoScroll
// @namespace    https://github.com/avarishd/Travian-Stuff
// @version      1
// @description  Simple script that removes the top row buttons.
// @author       Avarishd

// @include     *://*.travian.*/report*
// @include     *://*.travian.*/messages*
// @include     *://*.travian.*
// ==/UserScript==

if (window.location.pathname == '/report')
{
    document.getElementsByClassName('buttonWrapper')[0].style.display = 'none';
    document.getElementsByClassName('footer')[0].style.display = 'none';
}

else if (window.location.pathname == '/messages/inbox')
{
    document.getElementsByClassName('footer')[0].style.display = 'none';
    document.getElementById("mark").style.display = "none";
    document.getElementById("delete").style.display = "none";
}

else if (window.location.pathname == '/messages/sent')
{
    document.getElementsByClassName('footer')[0].style.display = 'none';
    document.getElementById("delete").style.display = "none";
}
else if (window.location.pathname == '/messages')
{
    document.getElementsByClassName('footer')[0].style.display = 'none';
    document.getElementById("mark").style.display = "none";
    document.getElementById("delete").style.display = "none";
}

// Hide stuff that are replaced by ResourceBarPlus
document.getElementById("sidebarBoxLinklist").style.display = "none";
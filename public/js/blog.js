const button  = document.getElementById("button");
button.addEventListener("click", redirectIndex);

function redirectIndex() {
    window.location = "/";
}
/*
window.location = "LINK" -> replaces current window
window.open = "LINK" -> opens a new window 
*/



//====================================================
//must add 1 onto this for every new blog I add!!!!
//====================================================

let items = document.getElementsByClassName("blog-element")
//console.log(bruh) 
//items are a html collection and seem to behave like arrays which is suitible for now

items[0].addEventListener("click", firstRedir);
function firstRedir() {window.location = "/blog/first"};

items[1].addEventListener("click", secondRedir);
function secondRedir() {window.location = "/blog/winLinMac"};

//console.log(bruh);
//not "hover" --> "mouseover"

//console.log(button2);
//doing hover & description reveal in css as its much easier
//than with DOM & JS.


function eloWorld() {
    console.log("hello world");
}
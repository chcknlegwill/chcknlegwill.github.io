const button  = document.getElementById("button");
button.addEventListener("click", redirectIndex);

function redirectIndex() {
    window.location = "/";
}

//====================================================
//must add 1 onto this for every new blog I add!!!!
//====================================================

let bruh = document.getElementsByClassName("blog-element")

bruh[0].addEventListener("click", firstRedir);
function firstRedir() {window.location= "/blog/First"};

bruh[1].addEventListener("mouseover", eloWorld)

console.log(bruh);
//not "hover" --> "mouseover"

//console.log(button2);


function hoverFunc() {
    console.log("hover works")
}

function eloWorld() {
    console.log("hello world");
}
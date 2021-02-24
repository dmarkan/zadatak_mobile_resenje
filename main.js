let slide1 = document.querySelector("#slide1");
let slide2 = document.querySelector("#slide2");
let slide3 = document.querySelector("#slide3");
let slide4 = document.querySelector("#slide4");
let dot = document.querySelector("#dot");
let dot2 = document.querySelector("#dot2");
let dot3 = document.querySelector("#dot3");
let dot4 = document.querySelector("#dot4");
let arrow_left = document.querySelector("#arrow_left");
let arrow_right = document.querySelector("#arrow_right");
let arrow_left2 = document.querySelector("#arrow_left2");
let arrow_right2 = document.querySelector("#arrow_right2");
let arrow_left3 = document.querySelector("#arrow_left3");
let arrow_right3 = document.querySelector("#arrow_right3");
let arrow_left4 = document.querySelector("#arrow_left4");
let arrow_right4 = document.querySelector("#arrow_right4");
let home = document.querySelector("#home");
let about = document.querySelector("#about");
let services = document.querySelector("#services");
let blog = document.querySelector("#blog");
let contats = document.querySelector("#contats");
let menu_open = document.querySelector(".menu_open");
let menu = document.querySelector("#menu");

function scrollWin(x, y) {
    window.scrollBy(x, y);
}

home.addEventListener("click", function () {
    menu_open.style.display = "none";
})

about.addEventListener("click", function () {
    menu_open.style.display = "none";
})

services.addEventListener("click", function () {
    menu_open.style.display = "none";
})

blog.addEventListener("click", function () {
    menu_open.style.display = "none";
})

contats.addEventListener("click", function () {
    menu_open.style.display = "none";
})

arrow_left.addEventListener("click", function () {
    arrow_left2.style.visibility = "visible";
    arrow_left3.style.visibility = "hidden";
    arrow_left4.style.visibility = "hidden";
    slide1.style.visibility = "hidden";
    slide2.style.visibility = "visible";
    slide3.style.visibility = "hidden";
    slide4.style.visibility = "hidden";
    arrow_left.style.visibility = "hidden";
    arrow_right.style.visibility = "hidden";
    arrow_right2.style.visibility = "visible";
    arrow_right3.style.visibility = "hidden";
    arrow_right4.style.visibility = "hidden";
    dot.style.opacity = 0.5;
    dot2.style.opacity = 1;
    dot3.style.opacity = 0.5;
    dot4.style.opacity = 0.5;
})

arrow_right.addEventListener("click", function () {
    slide1.style.visibility = "hidden";
    slide2.style.visibility = "hidden";
    slide3.style.visibility = "hidden";
    slide4.style.visibility = "visible";
    arrow_right.style.visibility = "hidden";
    arrow_left.style.visibility = "hidden";
    arrow_left4.style.visibility = "visible";
    arrow_right4.style.visibility = "visible";
    arrow_right2.style.visibility = "hidden";
    arrow_right3.style.visibility = "hidden";
    arrow_left2.style.visibility = "hidden";
    arrow_left3.style.visibility = "hidden";
    dot.style.opacity = 0.5;
    dot2.style.opacity = 0.5;
    dot3.style.opacity = 0.5;
    dot4.style.opacity = 1;
})

arrow_left2.addEventListener("click", function () {
    slide1.style.visibility = "hidden";
    slide2.style.visibility = "hidden";
    slide3.style.visibility = "visible";
    slide4.style.visibility = "hidden";
    arrow_right.style.visibility = "hidden";
    arrow_left.style.visibility = "hidden";
    arrow_right4.style.visibility = "hidden";
    arrow_left4.style.visibility = "hidden";
    arrow_right2.style.visibility = "visible";
    arrow_left2.style.visibility = "hidden";
    arrow_right3.style.visibility = "visible";
    arrow_left3.style.visibility = "visible";
    dot.style.opacity = 1;
    dot2.style.opacity = 0.5;
    dot3.style.opacity = 0.5;
    dot4.style.opacity = 0.5;
})


arrow_right2.addEventListener("click", function () {
    slide1.style.visibility = "visible";
    slide2.style.visibility = "hidden";
    slide3.style.visibility = "hidden";
    slide4.style.visibility = "hidden";
    arrow_right2.style.visibility = "hidden";
    arrow_left2.style.visibility = "hidden";
    arrow_right.style.visibility = "visible"
    arrow_left.style.visibility = "visible";
    arrow_right3.style.visibility = "hidden";
    arrow_left3.style.visibility = "hidden";
    arrow_right4.style.visibility = "hidden";
    arrow_left4.style.visibility = "hidden";
    dot.style.opacity = 0.5;
    dot2.style.opacity = 0.5;
    dot3.style.opacity = 1;
    dot4.style.opacity = 0.5;
})

arrow_left3.addEventListener("click", function () {
    arrow_left4.style.visibility = "visible";
    slide1.style.visibility = "hidden";
    slide2.style.visibility = "hidden";
    slide3.style.visibility = "hidden";
    slide4.style.visibility = "visible";
    arrow_left3.style.visibility = "hidden";
    arrow_right.style.visibility = "hidden";
    arrow_right2.style.visibility = "hidden";
    arrow_right3.style.visibility = "hidden";
    arrow_right4.style.visibility = "visible";
    arrow_left2.style.visibility = "hidden";
    arrow_left.style.visibility = "hidden";
    dot.style.opacity = 0.5;
    dot2.style.opacity = 0.5;
    dot3.style.opacity = 0.5;
    dot4.style.opacity = 1;
})

arrow_left4.addEventListener("click", function () {
    arrow_left4.style.visibility = "hidden";
    slide1.style.visibility = "visible";
    slide2.style.visibility = "hidden";
    slide3.style.visibility = "hidden";
    slide4.style.visibility = "hidden";
    arrow_left3.style.visibility = "hidden";
    arrow_right.style.visibility = "visible";
    arrow_right2.style.visibility = "hidden";
    arrow_right3.style.visibility = "hidden";
    arrow_right4.style.visibility = "hidden";
    arrow_left2.style.visibility = "hidden";
    arrow_left.style.visibility = "visible";
    dot.style.opacity = 0.5;
    dot2.style.opacity = 0.5;
    dot3.style.opacity = 1;
    dot4.style.opacity = 0.5;
})

arrow_right3.addEventListener("click", function () {
    arrow_left.style.visibility = "hidden";
    slide1.style.visibility = "hidden";
    slide2.style.visibility = "visible";
    slide3.style.visibility = "hidden";
    slide4.style.visibility = "hidden";
    arrow_left3.style.visibility = "visible";
    arrow_right.style.visibility = "hidden";
    arrow_right2.style.visibility = "visible";
    arrow_left2.style.visibility = "hidden";
    arrow_right3.style.visibility = "hidden";
    arrow_right4.style.visibility = "hidden";
    arrow_left4.style.visibility = "hidden";
    dot.style.opacity = 0.5;
    dot2.style.opacity = 1;
    dot3.style.opacity = 0.5;
    dot4.style.opacity = 0.5;
})

arrow_right4.addEventListener("click", function () {
    arrow_left.style.visibility = "hidden";
    slide1.style.visibility = "hidden";
    slide2.style.visibility = "hidden";
    slide3.style.visibility = "visible";
    slide4.style.visibility = "hidden";
    arrow_left3.style.visibility = "visible";
    arrow_right.style.visibility = "hidden";
    arrow_right2.style.visibility = "hidden";
    arrow_left2.style.visibility = "hidden";
    arrow_right3.style.visibility = "visible";
    arrow_right4.style.visibility = "hidden";
    arrow_left4.style.visibility = "hidden";
    dot.style.opacity = 1;
    dot2.style.opacity = 0.5;
    dot3.style.opacity = 0.5;
    dot4.style.opacity = 0.5;
})

dot2.addEventListener("click", function () {
    dot.style.opacity = 0.5;
    dot2.style.opacity = 1;
    dot3.style.opacity = 0.5;
    dot4.style.opacity = 0.5;
    arrow_left2.style.visibility = "visible";
    arrow_left3.style.visibility = "hidden";
    arrow_left4.style.visibility = "hidden";
    slide1.style.visibility = "hidden";
    slide2.style.visibility = "visible";
    slide3.style.visibility = "hidden";
    slide4.style.visibility = "hidden";
    arrow_left.style.visibility = "hidden";
    arrow_right.style.visibility = "hidden";
    arrow_right2.style.visibility = "visible";
    arrow_right3.style.visibility = "hidden";
    arrow_right4.style.visibility = "hidden";
})

dot.addEventListener("click", function () {
    dot.style.opacity = 1;
    dot2.style.opacity = 0.5;
    dot3.style.opacity = 0.5;
    dot4.style.opacity = 0.5;
    slide1.style.visibility = "hidden";
    slide2.style.visibility = "hidden";
    slide3.style.visibility = "visible";
    slide4.style.visibility = "hidden";
    arrow_right.style.visibility = "hidden";
    arrow_left.style.visibility = "hidden";
    arrow_right4.style.visibility = "hidden";
    arrow_left4.style.visibility = "hidden";
    arrow_right2.style.visibility = "visible";
    arrow_left2.style.visibility = "hidden";
    arrow_right3.style.visibility = "visible";
    arrow_left3.style.visibility = "visible";
})

dot4.addEventListener("click", function () {
    dot.style.opacity = 0.5;
    dot2.style.opacity = 0.5;
    dot3.style.opacity = 0.5;
    dot4.style.opacity = 1;
    arrow_left4.style.visibility = "visible";
    slide1.style.visibility = "hidden";
    slide2.style.visibility = "hidden";
    slide3.style.visibility = "hidden";
    slide4.style.visibility = "visible";
    arrow_left3.style.visibility = "hidden";
    arrow_right.style.visibility = "hidden";
    arrow_right2.style.visibility = "hidden";
    arrow_right3.style.visibility = "hidden";
    arrow_right4.style.visibility = "visible";
    arrow_left2.style.visibility = "hidden";
    arrow_left.style.visibility = "hidden";
})

dot3.addEventListener("click", function () {
    dot.style.opacity = 0.5;
    dot2.style.opacity = 0.5;
    dot3.style.opacity = 1;
    dot4.style.opacity = 0.5;
    arrow_left4.style.visibility = "hidden";
    slide1.style.visibility = "visible";
    slide2.style.visibility = "hidden";
    slide3.style.visibility = "hidden";
    slide4.style.visibility = "hidden";
    arrow_left3.style.visibility = "hidden";
    arrow_right.style.visibility = "visible";
    arrow_right2.style.visibility = "hidden";
    arrow_right3.style.visibility = "hidden";
    arrow_right4.style.visibility = "hidden";
    arrow_left2.style.visibility = "hidden";
    arrow_left.style.visibility = "visible";
})
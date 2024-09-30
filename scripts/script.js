// JavaScript Document
console.log("hi");

// Haalt hamburger menu tevoorschijn
var hamburgerButton = document.querySelector("#hamburger");
var contentMenu = document.querySelector("header nav ul");

hamburgerButton.onclick = function () {
    hierIsMenu();
    hamburgerButton.classList.add("button-klik");

    setTimeout(function() {
        hamburgerButton.classList.remove("button-klik");
    }, 200);

};

function hierIsMenu() {
    contentMenu.classList.add("toonMenu");
    hamburgerButton.style.cursor = "pointer";
}

// Verbergt hamburger menu
var afsluitButton = document.querySelector("#afsluiten");

afsluitButton.onclick = function () {
    wegIsMenu();
    afsluitButton.classList.add("button-klik");

    setTimeout(function() {
        afsluitButton.classList.remove("button-klik");
    }, 200);
};

function wegIsMenu() {
    contentMenu.classList.remove("toonMenu");
    afsluitButton.style.cursor = "pointer";
}
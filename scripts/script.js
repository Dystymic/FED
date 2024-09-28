// JavaScript Document
console.log("hi");

var button = document.querySelector("header nav button");

var contentMenu = document.querySelector("header nav ul")

button.onclick = hierIsMenu

function hierIsMenu() {
    contentMenu.classList.toggle("toonMenu");
}
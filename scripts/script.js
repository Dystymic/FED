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

// Bron: Codepen van ilker
var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

function showPanel(panelIndex) {
    tabButtons.forEach(function (node) {
        node.style.backgroundColor = "";
        node.style.color = ""; 
    });
    
    var colorCode = getComputedStyle(document.documentElement).getPropertyValue('--color-background');
    
    tabButtons[panelIndex].style.backgroundColor = colorCode;
    tabButtons[panelIndex].style.color = getComputedStyle(document.documentElement).getPropertyValue('--color-text');

    tabPanels.forEach(function (node) {
        node.style.display = "none";
    });
    tabPanels[panelIndex].style.display = "block";
    tabPanels[panelIndex].style.backgroundColor = colorCode;
}

// Bron: ChatGPT, Prompt: Hoe maak ik van deze section een carrousel?
const carousel = document.querySelector('.carousel-items');
const prevButton = document.querySelector('.carousel-button.previous');
const nextButton = document.querySelector('.carousel-button.next');
const items = document.querySelectorAll('.carousel-items li');

let currentIndex = 0;
const totalItems = items.length;

const itemWidth = 20;
const gap = 2;

function updateCarousel() {
    const offset = -currentIndex * (itemWidth + gap); 
    carousel.style.transform = `translateX(${offset}em)`; 
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems; 
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; 
    updateCarousel();
});




let background = document.getElementById("bg");
let backgrounds = ["Backgrounds/bg.png", "Backgrounds/bg1.png", "Backgrounds/bg2.png"]
setInterval(function()
{
    let Random = Math.floor(Math.random() * 3);
    background.src = backgrounds[Random];

}, 2000);


let cardsImages = ["images/iphone.jpg", "images/prime.jpg", "images/razor Kraken.jpg", "images/HP Laptop.jpg", "", ""];
let cardTitle = ["iPhone 15 Pro", "Prime : Lemon", "Razor Kraken X", "HP Pavillon", "", ""];
let cardPrice = ["1500$", "12.99$", "299$", "600$", "", "", ""];

let next = document.getElementById("next1");
let prev = document.getElementById("prev1");

var card1 
{
    image = document.getElementById("card1_IMG"),
    Title = document.getElementById("card1_TITLE"),
    Price = document.getElementById("card1_PRICE")
};

var card2 
{
    image = document.getElementById("card2_IMG"),
    Title = document.getElementById("card2_TITLE"),
    Price = document.getElementById("card2_PRICE")
};

var card3 
{
    image = document.getElementById("card3_IMG"),
    Title = document.getElementById("card3_TITLE"),
    Price = document.getElementById("card3_PRICE")
};

var index = 1;

function recentNext() {
    index++;
}

function recentPrev() {
    index--;
}



if(index == 1) {
    card1.image.src = cardsImages[1];
    card1.Title.innerHTML = cardTitle[1];
    card1.Price.innerHTML = cardPrice[1];

    card2.image.src = cardsImages[2];
    card2.Title.innerHTML = cardTitle[2];
    card2.Price.innerHTML = cardPrice[2];

    card3.image.src = cardsImages[3];
    card3.Title.innerHTML = cardTitle[3];
    card3.Price.innerHTML = cardP[3];
}

if(index == 1) {
    card1.image.src = cardsImages[4];
    card1.Title.innerHTML = cardTitle[4];
    card1.Price.innerHTML = cardPrice[4];

    card2.image.src = cardsImages[5];
    card2.Title.innerHTML = cardTitle[5];
    card2.Price.innerHTML = cardPrice[5];

    card3.image.src = cardsImages[6];
    card3.Title.innerHTML = cardTitle[6];
    card3.Price.innerHTML = cardPrice[6];
}
let background = document.getElementById("bg");
let backgrounds = ["Backgrounds/bg.png", "Backgrounds/bg1.png", "Backgrounds/bg2.png"]
setInterval(function()
{
    let Random = Math.floor(Math.random() * 3);
    background.src = backgrounds[Random];

}, 2000);

let cardsImages = ["images/iphone.jpg", "images/prime.jpg", "images/razor Kraken.jpg", "images/HP Laptop.jpg", "images/xbox headset.jpg", "images/ipad pro.png"];
let cardTitle = ["iPhone 15 Pro", "Prime : Lemon", "Razor Kraken X", "HP Pavillon", "Xbox Headset", "iPad Pro"];
let cardPrice = ["1500$", "12.99$", "70$", "600$", "80$", "999$"];

let next = document.getElementById("next1");
let prev = document.getElementById("prev1");

function recentNext() {
    
    document.getElementById("card1_IMG").src = cardsImages[0];
    document.getElementById("card1_TITLE").innerHTML = cardTitle[0];
    document.getElementById("card1_PRICE").innerHTML = cardPrice[0];
    
    document.getElementById("card2_IMG").src = cardsImages[1];
    document.getElementById("card2_TITLE").innerHTML = cardTitle[1];
    document.getElementById("card2_PRICE").innerHTML = cardPrice[1];
    
    document.getElementById("card3_IMG").src = cardsImages[2];
    document.getElementById("card3_TITLE").innerHTML = cardTitle[2];
    document.getElementById("card3_PRICE").innerHTML = cardPrice[2];
    
}

function recentPrev() {

    document.getElementById("card1_IMG").src = cardsImages[3];
    document.getElementById("card1_TITLE").innerHTML = cardTitle[3];
    document.getElementById("card1_PRICE").innerHTML = cardPrice[3];
    
    document.getElementById("card2_IMG").src = cardsImages[4];
    document.getElementById("card2_TITLE").innerHTML = cardTitle[4];
    document.getElementById("card2_PRICE").innerHTML = cardPrice[4];
    
    document.getElementById("card3_IMG").src = cardsImages[5];
    document.getElementById("card3_TITLE").innerHTML = cardTitle[5];
    document.getElementById("card3_PRICE").innerHTML = cardPrice[5];
}


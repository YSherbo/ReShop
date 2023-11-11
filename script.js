let background = document.getElementById("bg");
let backgrounds = ["Backgrounds/bg.png", "Backgrounds/bg1.png", "Backgrounds/bg2.png"]
setInterval(function()
{
    let Random = Math.floor(Math.random() * 3);
    background.src = backgrounds[Random];

}, 2000);


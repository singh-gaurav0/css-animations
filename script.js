const boxes = document.querySelectorAll(".box");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

boxes.forEach((box) => {
    const fill = document.createElement("div");
    fill.classList.add("fill");
    box.appendChild(fill);

    fill.style.backgroundColor = box.dataset.color;

    fill.style.animation = `fillUp 3s ease-in-out infinite alternate`;
    fill.style.animationPlayState = "paused"; // Initially paused

    fill.style.animationDelay = Math.random() * 3 + "s";
});

startButton.addEventListener("click", function() {
    boxes.forEach((box) => {
        box.querySelector(".fill").style.animationPlayState = "running";
    });
    
});
stopButton.addEventListener("click", function() {
    boxes.forEach((box) => {
        box.querySelector(".fill").style.animationPlayState = "paused";
    });
});
resetButton.addEventListener("click", function() {
    boxes.forEach((box) => {
        box.querySelector(".fill").style.height = "100%"; 
        box.querySelector(".fill").style.animationPlayState = "paused"; // Pause animation
    });
});

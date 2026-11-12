
const hearts = document.getElementById("hearts");

function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = ["♥", "♡", "💕", "💗"][
        Math.floor(Math.random() * 4)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.animationDuration = (5 + Math.random() * 6) + "s";

    hearts.appendChild(heart);

    setTimeout(() => heart.remove(), 11000);
}

setInterval(createHeart, 350);

let opened = false;

document.getElementById("revealBtn").addEventListener("click", () => {

    if (opened) return;

    opened = true;

    document.getElementById("loveText").classList.add("show");

    document.getElementById("message").classList.add("show");

    const button = document.getElementById("revealBtn");

    button.innerHTML = "You are special, MY BABY REM! 💗";

    for (let i = 0; i < 35; i++) {
        setTimeout(createSparkle, i * 35);
    }
});

function createSparkle() {
    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";
    sparkle.innerHTML = "✨";

    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1000);
}

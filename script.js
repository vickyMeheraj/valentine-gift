const messages = [
    "Take your time.",
    "I’ll wait.",
    "Your comfort matters.",
    "Think about it calmly.",
    "Whatever your answer, I respect it."
];

let messageIndex = 0;
let musicStarted = false;
let audioCtx;

// ----------------------
// Button Logic
// ----------------------
function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.1}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

// ----------------------
// Soft Piano Music
// ----------------------
function startMusic() {
    if (musicStarted) return;
    musicStarted = true;

    audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    const melody = [261.63, 329.63, 392.00, 523.25, 392.00, 329.63];
    let index = 0;

    function playNote() {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = "sine";
        osc.frequency.value = melody[index];

        gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.5);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start();
        osc.stop(audioCtx.currentTime + 1.5);

        index = (index + 1) % melody.length;
    }

    setInterval(playNote, 1600);
}

// ----------------------
// Floating Hearts
// ----------------------
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 600);

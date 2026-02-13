const messages = [
    "Afsana, are you sure? 🥺",
    "Really sure, jaan? 💔",
    "Think again please ❤️",
    "You are my whole world 😢",
    "Don't break my heart 😭",
    "I will be very very sad...",
    "Okay fine... I’ll cry 😔",
    "Last chance Afsana 😩",
    "Please say yes ❤️",
    "You know you love me 😘"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.4}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

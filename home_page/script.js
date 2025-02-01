// Array of motivational quotes
const quotes = [
    "Believe you can and you're halfway there.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "The only way to do great work is to love what you do.",
    "You are never too old to set another goal or to dream a new dream.",
    "Act as if what you do makes a difference. It does.",
    "Success is getting what you want. Happiness is wanting what you get.",
    "The best way to cheer yourself up is to try to cheer somebody else up."
];

// Array of pleasant colors
const colors = [
    "#FFADAD", "#FFD6A5", "#FDFFB6", "#CAFFBF",
    "#9BF6FF", "#A0C4FF", "#BDB2FF", "#FFC6FF"
];

// Array of unique border-radius values for different shapes
const shapes = [
    "20px", "50%", "10px", "30px 5px", "5px 30px",
    "40px 10px", "50px 20px"
];

// Select a random quote
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

// Select a random color
const randomColor = colors[Math.floor(Math.random() * colors.length)];

// Select a random shape
const randomShape = shapes[Math.floor(Math.random() * shapes.length)];

// Show the custom dialog box on page load
window.onload = function () {
    let quoteBox = document.getElementById("quoteBox");
    quoteBox.innerText = randomQuote;
    quoteBox.style.background = randomColor; // Set random color
    quoteBox.style.borderRadius = randomShape; // Set random shape
    quoteBox.style.display = "block"; // Show the quote box

    // Automatically hide after 5 seconds
    setTimeout(() => {
        quoteBox.style.display = "none";
    }, 5000);
};
const slider = document.getElementById('mood-slider');
const emojiDisplay = document.getElementById('mood-emoji');
const descriptionBox = document.getElementById('mood-description');

const moods = [
  {
    emoji: "😊",
    color: "#FFD700",
    description: "Happiness: A state of joy and contentment."
  },
  {
    emoji: "😌",
    color: "#90EE90",
    description: "Relaxation: A feeling of calm and peace, free from stress."
  },
  {
    emoji: "😐",
    color: "#D3D3D3",
    description: "Boring: A feeling of dullness or lack of interest in your surroundings."
  },
  {
    emoji: "😡",
    color: "#FF6347",
    description: "Aggression: A strong emotional response, often tied to frustration or anger."
  },
  {
    emoji: "😢",
    color: "#87CEEB",
    description: "Sadness: A feeling of sorrow or loss, often linked to disappointment or grief."
  }
];

slider.addEventListener('input', function() {
  const moodIndex = slider.value - 1; // get the selected mood
  emojiDisplay.textContent = moods[moodIndex].emoji;
  descriptionBox.textContent = moods[moodIndex].description;

  // Update slider background color dynamically
  const selectedColor = moods[moodIndex].color;
  slider.style.background = `linear-gradient(to right, ${selectedColor} 0%, ${selectedColor} 100%)`;
});

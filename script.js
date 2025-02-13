// Select the typewriter element
const typewriterText = document.querySelector(".typewriter");

// Function to update the typewriter font size and centering style based on screen width
function updateTypewriterStyle() {
  if (window.innerWidth <= 767) {
    typewriterText.style.fontSize = "30px"; 
    typewriterText.style.fontWeight = "bold";
    typewriterText.style.fontFamily = "Arial, sans-serif";
    typewriterText.style.textAlign = "left"; 
    
    typewriterText.style.margin = "0 auto"; 
  } else {
    typewriterText.style.fontSize = "50px"; 
    typewriterText.style.fontWeight = "bold";
    typewriterText.style.fontFamily = "Arial, sans-serif";
    typewriterText.style.textAlign = "left"; 
    typewriterText.style.margin = "0";
  }
}

// Call the function once to set the initial font size and alignment
updateTypewriterStyle();

// Add an event listener to adjust the styles when the window is resized
window.addEventListener("resize", updateTypewriterStyle);

// Typewriter effect logic
const phrases = [
  "Hello I'm Nazli,",
  "Γεια σας είμαι η Nazli,",
  "Hej jag heter Nazli,",
  "سلام من نازلی هستم"
];

let phraseIndex = 0;
let characterIndex = 0;

function type() {
  if (characterIndex < phrases[phraseIndex].length) {
    typewriterText.textContent += phrases[phraseIndex][characterIndex];
    characterIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1000);
  }
}

function erase() {
  if (characterIndex > 0) {
    typewriterText.textContent = phrases[phraseIndex].substring(0, characterIndex - 1);
    characterIndex--;
    setTimeout(erase, 50);
  } else {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, 200);
  }
}

// Start the typewriter effect
type();

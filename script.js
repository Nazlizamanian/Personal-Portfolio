const typewriterText = document.querySelector(".typewriter");
const phrases = [
    "Hello I am Nazli,",
    "Hej jag heter Nazli",
    "Γεια σας είμαι η Nazli",
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

type();
// Typing animation with full phrase display
const typingText = document.querySelector(".typing");
const phrases = ["Frontend Web Developer", "Web Designer", "Tech Enthusiast"];
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let delay = 150;

function typeEffect() {
  const currentPhrase = phrases[currentPhraseIndex];
  let displayText = currentPhrase.substring(0, currentCharIndex);
  typingText.textContent = displayText;

  if (!isDeleting) {
    if (currentCharIndex < currentPhrase.length) {
      currentCharIndex++;
    } else {
      isDeleting = true;
      delay = 1000; // Wait before deleting
    }
  } else {
    if (currentCharIndex > 0) {
      currentCharIndex--;
    } else {
      isDeleting = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      delay = 300; // Wait before typing next
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : delay);
}

document.addEventListener("DOMContentLoaded", typeEffect);
// Smooth scroll
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
    this.classList.add('active');
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

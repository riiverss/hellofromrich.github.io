const sentences = [
  [
    "",
    "G'day!",
    "",
    "My name is Rich, I'm a Software Engineering Recruiter here at Google in Sydney.",
    "",
    "I am currently researching Senior Software Engineering Leaders who would be interested in working on either our Search, Photos or Maps Engineering teams in Sydney or Singapore."
  ],
  [
    "",
    "You will play a lead role in how and what we build for our millions of users and work on systems at scale that very few other companies see."
  ],
  [
    "",
    "I wondered if you had given it any thought recently what your next career move may look like?",
    "",
    "What sort of problems do you want to be solving, things you want to be building etc?"
  ],
  [
    "",
    "Could you be open to a chat about what life could look like for you here at Google?",
    "",
    "How's my timing?",
    "",
    "👨🏻‍💻 Rich",
  ]
];

// Function to initialize the typing effect
function initializeTypingEffect() {
  const el = document.querySelector(".container");

  // Detect if the user is on a mobile device
  const isMobile = window.innerWidth <= 768;

  // Typed.js initialization with responsive settings
  new Typed(el, {
    strings: sentences.map(sentence => sentence.join("<br />")),
    typeSpeed: isMobile ? 25 : 35,
    startDelay: isMobile ? 2000 : 3500,
    backSpeed: isMobile ? 35 : 40,
    smartBackspace: true,
    loop: false
  });
}

// Start the typing effect when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeTypingEffect);

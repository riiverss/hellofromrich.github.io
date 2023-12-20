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
    "",
  ]
];

function initializeTypingEffect() {
  const el = document.querySelector(".container");
  const interestedButton = document.getElementById("interestedButton");

  const isMobile = window.innerWidth <= 768;

  new Typed(el, {
    strings: sentences.map(sentence => sentence.join("<br />")),
    typeSpeed: isMobile ? 40 : 50,
    backSpeed: 90,
    smartBackspace: true,
    loop: false,
    startDelay: 3000,
    onComplete: function() {
      interestedButton.style.display = 'block'; // Show the button after typing is complete
    }
  });

  interestedButton.onclick = function() {
    window.open('mailto:ivers@google.com?subject=Interest in Google Position', '_blank');
  };
}

document.addEventListener('DOMContentLoaded', initializeTypingEffect);

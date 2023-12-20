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
  "<button id='contactButton' class='contact-button'>Yes I'm Interested</button>"
  ]
];

const el = document.querySelector(".container");
const typed = new Typed(el, {
  strings: sentences.map(sentence => sentence.join("<br />")),
  typeSpeed: 35,
  smartBackspace: true,
  startDelay: 3500
  showCursor: true,
  cursorChar: '|',
  onComplete: function() {
    const button = document.createElement("button");
    button.id = 'contactButton';
    button.className = 'contact-button';
    button.textContent = "I'm Interested";
    button.addEventListener('click', function() {
      window.location.href = 'mailto:ivers@google.com';
    });
    document.querySelector('.letter').appendChild(button);
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const contactButton = document.getElementById('contactButton');
  if (contactButton) {
    contactButton.addEventListener('click', function() {
      window.location.href = 'mailto:ivers@google.com';
    });
  }
});

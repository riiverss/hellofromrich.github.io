const sentences = [
  [
  "",
  "G'day!",
  "",
  "My name is Rich, I'm a Software Engineering Recruiter here at Google in Sydney.",
  "",
  "I am currently researching for Software Engineers who would be interested in working on our Chrome, Photos or Maps Engineering teams."
  ],
  [ 
  "",
  "As a Software Engineer here at Google, you will play a key role in how and what we build for our millions of users and work on systems at scale that very few other companies see."
  ],
  [ 
  "",
  "I wondered if you had given it any thought recently what your next career move may look like?",
  "",
  "What sort of problems do you want to be solving, things you want to be building etc?"
  ],
  [
  "",
  "I'm curious if you'd be open to a chat about what life could look like for you here at Google?",
  "",
  "How's my timing?",
  "",
  "👨🏻‍💻 Rich @Google.</a>"
  ]
];


const el = document.querySelector(".container");
const typed = new Typed(el, {
  strings: sentences.map(sentence => sentence.join("<br />")),
  typeSpeed: 40,
  smartBackspace: true,
  startDelay: 3500 });

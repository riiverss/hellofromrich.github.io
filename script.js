const sentences = [
[
"Hello 🙋🏻‍♂️",
"",
"I'm Rich, a Software Engineering Recruiter here at Google and I am on the lookout to speak with Engineering folks for our Chrome team in Sydney."],

[
"",
"Your engineering experience looks really interesting for some of the work we are doing here on the Chrome team."],
[
"",
"I wondered if you had given it any thought recently what your next career move may look like? 🤔",
"",
"What sort of problems do you want to be solving, features you want to be building etc? 🛠️"],

[
"",
"I'm curious if you'd be open to a conversation about what life could look like for you as a SWE here at Google?",
"",
"How's my timing?",
"",
"👨🏻‍💻 Rich @Google.</a>"]];



const el = document.querySelector(".container");
const typed = new Typed(el, {
  strings: sentences.map(sentence => sentence.join("<br />")),
  typeSpeed: 80,
  smartBackspace: true,
  startDelay: 3500 });

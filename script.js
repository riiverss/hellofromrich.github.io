const sentences = [
[
"Hello 🙋🏻‍♂️",
"",
"I'm Rich, a Software Emngineering here at Google in Sydney and I am on the lookout to speak with engineering folks who don't know I exist to explore new opportunities with them they did not know existed."],

[
"",
"Your engineering experience looks really interesting for some of the work we are doing here on the ChromeOS team in Sydney."],
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
  typeSpeed: 45,
  smartBackspace: true,
  startDelay: 3500 });

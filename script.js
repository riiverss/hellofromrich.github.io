const sentences = [
[
"Hello 🙋🏻‍♂️",
"",
"I'm Rich, a Tech Recruiter here at Google in Sydney and I am on the lookout to speak with engineers who don't know I exist to explore new opportunities with them they did not know existed."],

[
"",
"Your engineering experience looks really interesting for some of the work we are doing here in Sydney."],
[
"",
"I wondered if you had given it any thought recently what your next career move may look like? 🤔",
"",
"What sort of problems do you want to be solving, things you want to be building etc? 🛠️"],

[
"",
"I'm curious if you'd be open to a conversation about what life could look like for you as an engineer here at Google?",
"",
"How's my timing?",
"",
"👨🏻‍💻 Rich @Google.</a>"]];



const el = document.querySelector(".container");
const typed = new Typed(el, {
  strings: sentences.map(sentence => sentence.join("<br />")),
  typeSpeed: 45,
  smartBackspace: true,
  startDelay:3500,
backDelay 1400});

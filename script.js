const sentences = [
[
"Hello 🙋🏻‍♂️",
"",
"I'm Rich, a Software Engineering Recruiter here at Google and I am on the lookout to speak with Engineering folks for the teams right here in Sydney.",
"",
"We are looking for Engineers to join our Chrome, Photos &#38; Maps teams."],
      
[
"",
"I wondered if you had given it any thought recently what your next career move may look like? 🤔",
"",
"What sort of problems do you want to be solving, things you want to be building etc? 🛠️"],

[
"",
"I'm curious if you'd be open to a chat about what life could look like for you here at Google?",
"",
"How's my timing?",
"",
"👨🏻‍💻 Rich @Google.</a>"]];



const el = document.querySelector(".container");
const typed = new Typed(el, {
  strings: sentences.map(sentence => sentence.join("<br />")),
  typeSpeed: 40,
  smartBackspace: true,
  startDelay: 3500 });

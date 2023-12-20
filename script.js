<!DOCTYPE html>
<html>
<head>
  <!-- Include Typed.js library -->
  <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
</head>
<body>
  <div class="container"></div>

  <script>
    const sentences = [
      [
        "",
        "G'day!",
        "",
        "My name is Rich, I'm a Software Engineering Recruiter here at Google in Sydney.",
        "",
        "I am currently researching Senior Software Engineering Leaders who would be interested in working on either our Search, Photos, or Maps Engineering teams in Sydney or Singapore."
      ],
      [ 
        "",
        "You will play a lead role in how and what we build for our millions of users and work on systems at scale that very few other companies see."
      ],
      [ 
        "",
        "I wondered if you had given it any thought recently what your next career move may look like?",
        "",
        "What sort of problems do you want to be solving, things you want to be building, etc.?"
      ],
      [
        "",
        "Could you be open to a chat about what life could look like for you here at Google?",
        "",
      ],
      // Insert the Giphy here
      [
        "",
        // Embed the Giphy
        '<iframe src="https://giphy.com/embed/jRGGQMWvYvYraZ5kvI" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/curbyourenthusiasm-season-10-curb-season10-jRGGQMWvYvYraZ5kvI">via GIPHY</a></p>',
      ],
      [
        "",
        "How's my timing?",
        "",
        "👨🏻‍💻 Rich", 
        "",
        "📧 ivers@google.com</a>"
      ]
    ];

    const el = document.querySelector(".container");
    const typed = new Typed(el, {
      strings: sentences.map(sentence => sentence.join("<br />")),
      typeSpeed: 40,
      smartBackspace: true,
      startDelay: 3500
    });
  </script>
</body>
</html>


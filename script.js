<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    /* Base styles for your container */
    .container {
      max-width: 800px; /* Adjust the maximum width as needed */
      margin: 0 auto;   /* Center the container horizontally */
      padding: 20px;    /* Add padding as needed */
      font-size: 16px; /* Default font size */
    }

    /* Media query for screens smaller than 768px (typical mobile devices) */
    @media (max-width: 768px) {
      .container {
        max-width: 90%;  /* Adjust maximum width for mobile */
        font-size: 14px; /* Adjust font size for mobile */
        padding: 10px;   /* Adjust padding for mobile */
        border: 2px solid #ccc;
        border-radius: 10px;
      }
    }

    /* Default border styles for larger screens */
    .container {
      border: 2px solid #ccc;
      border-radius: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
    <div class="container">
      <script>
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
    </div>
  </div>
</body>
</html>

document.addEventListener("DOMContentLoaded", () => {
  const content = {
    en: {
      heading: "Welcome",
      text: "This site explores the life and key ideas of Carl Gustav Jung, the Swiss psychiatrist and founder of analytical psychology.",
      quote: '"The privilege of a lifetime is to become who you truly are."',
    },
    de: {
      heading: "Willkommen",
      text: "Diese Seite erkundet das Leben und die zentralen Ideen von Carl Gustav Jung, dem Schweizer Psychiater und Begründer der analytischen Psychologie.",
      quote: '"Das höchste Ziel des Lebens ist es, das zu werden, was man ist."',
    },
  };

  const btnEN = document.getElementById("lang-en");
  const btnDE = document.getElementById("lang-de");

  const heading = document.getElementById("welcome-heading");
  const text = document.getElementById("welcome-text");
  const quote = document.querySelector("#quote-box p");

  function switchLanguage(lang) {
    heading.textContent = content[lang].heading;
    text.textContent = content[lang].text;
    quote.textContent = content[lang].quote;
  }

  btnEN.addEventListener("click", () => switchLanguage("en"));
  btnDE.addEventListener("click", () => switchLanguage("de"));
});

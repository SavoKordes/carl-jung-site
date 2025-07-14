document.addEventListener("DOMContentLoaded", function () {
      console.log("✅ JS loaded and DOM ready");
  const quotes = [
    "Your visions will become clear only when you can look into your own heart.",
    "Until you make the unconscious conscious, it will direct your life and you will call it fate.",
    "Knowing your own darkness is the best method for dealing with the darkness of other people.",
    "The privilege of a lifetime is to become who you truly are.",
    "In all chaos there is a cosmos, in all disorder a secret order."
  ];

  const headerQuote = document.getElementById("header-quote");

  if (headerQuote) {
    const index = Math.floor(Math.random() * quotes.length);
    headerQuote.textContent = quotes[index];
  }
});

function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');
  elements.forEach(el => {
    const file = el.getAttribute('data-include');
    fetch(file)
      .then(res => res.text())
      .then(html => {
        el.innerHTML = html;

        // ✅ Inject quote only if it's the header
        if (file.includes("header")) {
          const quotes = [
            "Knowing your own darkness is the best method for dealing with the darkness of other people.",
            "Until you make the unconscious conscious, it will direct your life and you will call it fate.",
            "Your visions will become clear only when you can look into your own heart.",
            "The privilege of a lifetime is to become who you truly are.",
            "In all chaos there is a cosmos, in all disorder a secret order."
          ];

          const quoteEl = document.getElementById('header-quote');
          if (quoteEl) {
            const index = Math.floor(Math.random() * quotes.length);
            quoteEl.textContent = quotes[index];
          }
        }
      })
      .catch(err => (el.innerHTML = `<p style="color:red">${err}</p>`));
  });
}

window.addEventListener("DOMContentLoaded", includeHTML);
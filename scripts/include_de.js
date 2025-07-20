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
  "Die beste Methode, mit der Dunkelheit anderer umzugehen, ist, seine eigene Dunkelheit zu kennen.",
  "Solange du das Unbewusste nicht bewusst machst, wird es dein Leben lenken und du wirst es Schicksal nennen.",
  "Deine Visionen werden erst dann klar, wenn du in dein eigenes Herz blicken kannst.",
  "Das höchste Privileg eines Lebens ist es, der zu werden, der man wirklich ist.",
  "In allem Chaos ist ein Kosmos, in aller Unordnung eine geheime Ordnung."
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
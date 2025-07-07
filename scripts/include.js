function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');
  elements.forEach(el => {
    const file = el.getAttribute('data-include');
    fetch(file)
      .then(res => res.text())
      .then(html => (el.innerHTML = html))
      .catch(err => (el.innerHTML = `<p style="color:red">${err}</p>`));
  });
}

window.addEventListener("DOMContentLoaded", includeHTML);

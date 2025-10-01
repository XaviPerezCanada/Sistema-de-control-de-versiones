document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('img-demo');
  const btnSrc = document.getElementById('btn-cambiar-src');
/**
 * Reference to the button element used to toggle the title display.
 * This element is expected to have the ID 'btn-toggle-title' in the DOM.
 * @type {HTMLButtonElement|null}
 */
  const btnTitle = document.getElementById('btn-toggle-title');

  if (btnSrc && img) {
    let toggle = false;
    btnSrc.addEventListener('click', () => {
      toggle = !toggle;
      img.setAttribute(
        'src',
        toggle ? 'https://via.placeholder.com/200?text=Otra+imagen' : 'https://via.placeholder.com/200'
      );
    });
  }

  if (btnTitle && img) {
    btnTitle.addEventListener('click', () => {
      if (img.hasAttribute('title')) {
        img.removeAttribute('title');
      } else {
        img.setAttribute('title', 'Título añadido por JS');
      }
    });
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.primary-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if ((path === '' && href.endsWith('index.html')) || href.endsWith(path)) {
      a.classList.add('active');
    }
  });
  const volForm = document.querySelector('#voluntario-form');
  if (volForm) {
    volForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const required = volForm.querySelectorAll('[required]');
      if ([...required].some(el => el.type==='checkbox' ? !el.checked : !el.value.trim())) {
        alert('Por favor, preencha os campos obrigatórios e aceite os termos.');
        return;
      }
      const box = document.getElementById('voluntario-success');
      if (box) { box.hidden = false; box.focus(); volForm.reset(); }
    });
  }
  const contatoForm = document.querySelector('#contato-form');
  if (contatoForm) {
    contatoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const required = contatoForm.querySelectorAll('[required]');
      if ([...required].some(el => !el.value.trim())) { alert('Preencha os campos obrigatórios.'); return; }
      const box = document.getElementById('contato-success');
      if (box) { box.hidden = false; box.focus(); contatoForm.reset(); }
    });
  }
});

const translations = {
  pt: './lang/pt.json',
  en: './lang/en.json'
};

function changeLanguage(lang) {
  fetch(translations[lang])
    .then(response => response.json())
    .then(data => {
      document.getElementById('titleL').textContent = data.titleL;
      document.getElementById('aboutL').textContent = data.aboutL;
      document.getElementById('portfolioL').textContent = data.portfolioL;
      document.getElementById('contactL').textContent = data.contactL;
      document.getElementById('skillsL').textContent = data.skillsL;
      document.getElementById('aboutIntL').textContent = data.aboutIntL;
      document.getElementById('aboutSecL').textContent = data.aboutSecL;
    })
    .catch(error => console.error('Erro ao carregar o idioma:', error));
}

document.getElementById('pt-btn').addEventListener('click', () => changeLanguage('pt'));
document.getElementById('en-btn').addEventListener('click', () => changeLanguage('en'));
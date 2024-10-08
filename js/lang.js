const translations = {
  pt: './lang/pt.json',
  en: './lang/en.json'
};

let typed;

function changeLanguage(lang) {
  fetch(translations[lang])
    .then(response => response.json())
    .then(data => {
      document.getElementById('titleL').textContent = data.titleL;
      document.getElementById('aboutL').textContent = data.aboutL;
      document.getElementById('portfolioL').textContent = data.portfolioL;
      document.getElementById('contactL').textContent = data.contactL;
      document.getElementById('skillsL').textContent = data.skillsL;
      document.getElementById('aboutInt').textContent = data.aboutIntL;
      document.getElementById('aboutIntL').textContent = data.aboutIntL;
      document.getElementById('aboutSecL').textContent = data.aboutSecL;
      document.getElementById('skillsL1').textContent = data.skillsL1;
      document.getElementById('skillsL2').textContent = data.skillsL2;
      document.getElementById('skillsL3').textContent = data.skillsL3;
      document.getElementById('skillsL4').textContent = data.skillsL4;
      document.getElementById('skillsL5').textContent = data.skillsL5;
      document.getElementById('skillsL6').textContent = data.skillsL6;
      document.getElementById('skillsL7').textContent = data.skillsL7;
      document.getElementById('skillsL8').textContent = data.skillsL8;
      document.getElementById('contactDesc').textContent = data.contactDesc;
      document.getElementById('todosP').textContent = data.todosP;
      document.getElementById('professionalP').textContent = data.professionalP;
      document.getElementById('pessoalP').textContent = data.pessoalP;
      document.getElementById('GamePrincipal').textContent = data.GamePrincipal;
      document.getElementById('AliraDescription').textContent = data.AliraDescription;
      document.getElementById('AliraContribution').textContent = data.AliraContribution;
      document.getElementById('BreakersDescription').textContent = data.BreakersDescription;
      document.getElementById('BreakersContribution').textContent = data.BreakersContribution;
      document.getElementById('ErgophobiaDescription').textContent = data.ErgophobiaDescription;
      document.getElementById('ErgophobiaContribution').textContent = data.ErgophobiaContribution;
      document.getElementById('MissaoIngloriaDescription').textContent = data.MissaoIngloriaDescription;
      document.getElementById('MissaoIngloriaContribution').textContent = data.MissaoIngloriaContribution;
      document.getElementById('ResidiuumDescription').textContent = data.ResidiuumDescription;
      document.getElementById('ResidiuumContribution').textContent = data.ResidiuumContribution;
      
      updateTypedText(data.typedText);
    })
    .catch(error => console.error('Erro ao carregar o idioma:', error));
}

function updateTypedText(texts) {
  if (typed) {
    typed.destroy();
  }

  typed = new Typed(".typed", {
    strings: texts,  
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    backDelay: 5000,
    showCursor: false
  });
}


function detectLanguage() {
  const userLang = navigator.language || navigator.userLanguage; 
  if (userLang.startsWith('pt')) {
    changeLanguage('pt');
  } else {
    changeLanguage('en');
  }
}

window.onload = function() {
  detectLanguage();
};

document.addEventListener('DOMContentLoaded', function() {
  detectLanguage();
});
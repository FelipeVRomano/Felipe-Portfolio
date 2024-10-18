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
      document.getElementById('aboutS').textContent = data.aboutL;
      document.getElementById('portfolioL').textContent = data.portfolioL;
      document.getElementById('portfolioS').textContent = data.portfolioL;
      document.getElementById('contactL').textContent = data.contactL;
      document.getElementById('contactS').textContent = data.contactL;
      document.getElementById('skillsL').textContent = data.skillsL;
      document.getElementById('skillsS').textContent = data.skillsL;
      document.getElementById('aboutInt').textContent = data.aboutInt;
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
      document.getElementById('contactDesc2').textContent = data.contactDesc2;
      document.getElementById('todosP').textContent = data.todosP;
      document.getElementById('professionalP').textContent = data.professionalP;
      document.getElementById('pessoalP').textContent = data.pessoalP;
      /*document.getElementById('demoP').textContent = data.demoP;*/

      document.querySelectorAll('.translate[data-translation="vejaMaisP"]').forEach((element) => {
        element.textContent = data.vejaMaisP;
      });

      document.getElementById('AliraContribution').innerHTML = `
        <strong>${data.GamePrincipal}</strong> ${data.AliraContribution}
      `;

      document.getElementById('AliraDescription').innerHTML = `
        <strong>Alira</strong> ${data.AliraDescription}
      `;

      document.getElementById('BreakersContribution').innerHTML = `
        <strong>${data.GamePrincipal}</strong> ${data.BreakersContribution}
      `;

      document.getElementById('BreakersDescription').innerHTML = `
        <strong>Breakers Collection</strong> ${data.BreakersDescription}
      `;

      document.getElementById('ErgophobiaContribution').innerHTML = `
        <strong>${data.GamePrincipal}</strong> ${data.ErgophobiaContribution}
      `;

      document.getElementById('ErgophobiaDescription').innerHTML = `
        <strong>Ergophobia</strong> ${data.ErgophobiaDescription}
      `;

      document.getElementById('MissaoIngloriaContribution').innerHTML = `
        <strong>${data.GamePrincipal}</strong> ${data.MissaoIngloriaContribution}
      `;

      document.getElementById('MissaoIngloriaDescription').innerHTML = `
        <strong>Missão Inglória</strong> ${data.MissaoIngloriaDescription}
      `;

      document.getElementById('ResidiuumContribution').innerHTML = `
        <strong>${data.GamePrincipal}</strong> ${data.ResidiuumContribution}
      `;

      document.getElementById('ResidiuumDescription').innerHTML = `
        <strong>Residiuum</strong> ${data.ResidiuumDescription}
      `;

      
      updateTypedText(data.typedText);
    })
    .catch(error => console.error('Erro ao carregar o idioma:', error));
}

function updateTypedText(texts) {

  if (texts === null || texts === undefined) {
    console.log("A variável é nula ou indefinida. Retornando...");
    return; // Retorna e não prossegue
  }

  if (typed) {
      console.log("Preciso destruir a outra instancia...");
      typed.destroy(); // Destrua a instância anterior, se existir
    }

  console.log(`Meu textinho é ${texts}`);
  typed = new Typed(".sub.typed", {
    strings: texts,  
    typeSpeed: 70,
    backSpeed: 30,
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
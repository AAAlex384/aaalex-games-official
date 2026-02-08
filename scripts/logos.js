function updateLogo(logoSrc) {
  favicon.href = logoSrc;
  homeIcon.src = logoSrc;

  
  
}

const homeIcon = document.querySelector('.pageIcon');
const favicon = document.querySelector('#favicon');

updateLogo('logos/LogoDefault.png');

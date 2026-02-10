function updateLogo(logoSrc) {
  favicon.href = logoSrc;
  homeIcon.src = logoSrc;

  
  
}

function updateVer(versionNum) {
  const version = document.querySelector('#version');
  version.innerText = versionNum;
}

const homeIcon = document.querySelector('.pageIcon');
const favicon = document.querySelector('link[rel="icon"]');

updateLogo('logos/LogoDefault.png');

updateVer('Version 2026.02.10.001');
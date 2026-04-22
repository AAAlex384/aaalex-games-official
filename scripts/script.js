function reloadCSS() {
      try {
        const link = document.getElementById('main-style');
          if (link) {
              const newHref = 'styles.css?v=' + new Date().getTime();
              link.href = newHref;
              console.log("CSS reloaded:", newHref);
        } else {
            console.warn("CSS link not found.");
        }
      } catch (err) {
        console.error("Error reloading CSS:", err);
    }
}

function update() {
  document.querySelector("navbar").innerHTML = `
      <ul>
        <li><a href="social.html">Social</a></li>
        <li><a href="news.html">Newsletters</a></li>
        <li></li>
        <li></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="teams.html">Teams</a></li>
      </ul>
      <a href="index.html"><img class="pageIcon" src="${'logos/' + pageIcon + '.png'}"></a>
  `
  const version = document.querySelector('#version');
  version.innerText = pageVer;

  reloadCSS()
}

const pageIcon = "LogoShiny";
const pageVer = 'Version 2026.04.21.001';

window.addEventListener('load', update);
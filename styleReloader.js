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

window.addEventListener('load', reloadCSS);

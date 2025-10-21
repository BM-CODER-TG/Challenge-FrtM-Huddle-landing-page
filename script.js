  function ajusterAlignement() {
    const hero = document.querySelector('.hero');
    const img = document.querySelector('.hero-image');
    const text = document.querySelector('.hero-text');
    const logos = document.querySelector('.logos');
    const body = document.body;

    if (!hero || !img || !text) return;

    // On compare la position verticale de l'image et du texte
    const imgBottom = img.getBoundingClientRect().bottom;
    const textTop = text.getBoundingClientRect().top;

    // Si le texte commence en dessous de l'image → wrap actif
    if (textTop > imgBottom) {
      text.style.textAlign = 'center';
      text.style.alignItems = 'center';
      logos.style.textAlign = 'center';
       body.style.backgroundImage = "url('/images/bg-mobile.svg')";
    } else {
      text.style.textAlign = 'left';
      text.style.alignItems = 'flex-start';
      logos.style.textAlign = 'right';
      logos.style.textAlign = 'rigth';
      body.style.backgroundImage = "url('/images/bg-desktop.svg')";
    }
  }

  // Exécution au chargement et quand la fenêtre change de taille
  window.addEventListener('load', ajusterAlignement);
  window.addEventListener('resize', ajusterAlignement);

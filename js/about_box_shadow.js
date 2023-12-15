window.addEventListener('scroll', function() {
    const body = document.querySelector('body');
    if (window.scrollY > 0) {
      body.classList.add('scrolled');
    } else {
      body.classList.remove('scrolled');
    }
  });
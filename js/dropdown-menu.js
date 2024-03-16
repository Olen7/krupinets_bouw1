document.getElementById('portfolio').addEventListener('click', function(e) {
  let targetElement = e.target;
  while (targetElement != null) {
    if (targetElement.matches(".portfolio-item")) {
      const targetId = targetElement.getAttribute('data-target');
      const menu = document.getElementById(targetId);
      if (menu) {
        const isDisplayed = menu.style.display === 'flex';
        menu.style.display = isDisplayed ? 'none' : 'flex';
        menu.style.overflowY = isDisplayed ? 'hidden' : 'auto';
      }
      break;
    }
    targetElement = targetElement.parentNode;
  }
});


  
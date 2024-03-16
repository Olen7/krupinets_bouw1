document.getElementById('toggleButton').addEventListener('click', function() {
    let section = document.getElementById('additionalSection');
    if (section.style.display === 'none') {
      section.style.display = 'flex';
    } else {
      section.style.display = 'none';
    }
  });
  
  document.getElementById('toggleButtonOne').addEventListener('click', function() {
    let section = document.getElementById('additionalSectionOne');
    if (section.style.display === 'none') {
      section.style.display = 'flex';
    } else {
      section.style.display = 'none';
    }
  });
  
  document.getElementById('toggleButtonTwo').addEventListener('click', function() {
    let section = document.getElementById('additionalSectionTwo');
    if (section.style.display === 'none') {
      section.style.display = 'flex';
    } else {
      section.style.display = 'none';
    }
  });
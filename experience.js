const accordions = document.getElementsByClassName('experience');

for (let i = 0; i < accordions.length; i++) {
  const accordionToggle = accordions[i].querySelector('.accordion-toggle');
  const experienceContent = accordions[i].querySelector('.experience-content');

  accordionToggle.addEventListener('click', function() {
    if (experienceContent.style.display === 'block') {
      experienceContent.style.display = 'none';
    } else {
      experienceContent.style.display = 'block';
    }
  });
}

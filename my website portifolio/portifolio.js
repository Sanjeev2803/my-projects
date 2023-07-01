const home = document.getElementById("home-section");
const about = document.getElementById("about-section");
const projects = document.getElementById("project-section");

// Get all the anchor elements
var links = document.querySelectorAll('.links a');

// Add a click event listener to each anchor element
links.forEach((link) => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    function scrollview(event, sectionId) {
      event.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    window.scrollview = scrollview;

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      // Remove "active" class from all sections
      [home, about, projects].forEach(section => {
        section.classList.remove('active');
      });

      // Add "active" class to the corresponding section
      targetSection.classList.add('active');
    }
    
  });
});

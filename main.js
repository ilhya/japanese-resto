document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('#navbar ul li a');

  if (menuToggle && navbar) {
    menuToggle.addEventListener('click', () => {
      navbar.classList.toggle('is-active');
    });
  }

  // Close the mobile menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbar.classList.contains('is-active')) {
        navbar.classList.remove('is-active');
      }
    });
  });
});
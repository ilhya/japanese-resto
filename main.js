document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');
  const navLinks = navbar.querySelectorAll('ul li a');

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

  // Set active class on the current page's nav link
  const currentPage = window.location.pathname.split('/').pop();
  if (currentPage === '') {
    // Handle homepage case where path is empty
    const homeLink = navbar.querySelector('a[href="index.html"]');
    if (homeLink) homeLink.classList.add('active');
  } else {
    navLinks.forEach(link => {
      const linkPage = link.getAttribute('href');
      // Remove any existing active class first
      if (link.classList.contains('active')) {
        link.classList.remove('active');
      }
      // Add active class if the link matches the current page
      if (linkPage === currentPage) {
        link.classList.add('active');
      }
    });
  }
});
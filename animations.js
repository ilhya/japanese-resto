document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  if (!animatedElements.length) {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Optional: Stop observing the element once it's visible
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the element is visible
  });

  animatedElements.forEach(element => {
    observer.observe(element);
  });
});
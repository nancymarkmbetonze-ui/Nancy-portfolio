// observe fade-in sections on scroll
document.addEventListener("DOMContentLoaded", function () {
  var sections = document.querySelectorAll(".fade-in-section");
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  sections.forEach(function (section) {
    observer.observe(section);
  });
});

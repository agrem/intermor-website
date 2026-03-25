const path = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".menu a").forEach(link => {
  if (link.getAttribute("href") === path) {
    link.classList.add("active");
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

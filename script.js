const page = location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".menu a").forEach(link => {
  if (link.getAttribute("href") === page) {
    link.classList.add("active");
  }
});

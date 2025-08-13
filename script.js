// Dark / Light mode
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const icon = themeToggle.querySelector("i");
  if (body.classList.contains("dark")) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
});

// Galeri navigasi
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const galleryContainer = document.querySelector(".gallery-container");

nextBtn.addEventListener("click", () => {
  galleryContainer.scrollBy({ left: 320, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  galleryContainer.scrollBy({ left: -320, behavior: "smooth" });
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const progress = document.querySelector(".progress");

menuToggle?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

window.addEventListener("scroll", () => {

  const scrollTop = window.scrollY;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const percentage = (scrollTop / height) * 100;

  if (progress) {
    progress.style.width = percentage + "%";
  }

});

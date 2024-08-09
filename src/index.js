document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  const email = document.querySelector('input[type="email"]').value;
  const message = document.querySelector("textarea").value;

  if (email === "" || message === "") {
    alert("Please fill out all fields.");
    event.preventDefault();
  }
});
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

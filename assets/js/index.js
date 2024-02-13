// navbar code
function toggleMenu() {
    var navMenu = document.getElementById('navMenu');
    var burgerMenu = document.querySelector('.burger-menu');

    navMenu.classList.toggle('show');
    burgerMenu.classList.toggle('cross');
}


//spotlight animation
ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
  });
  ScrollReveal().reveal(
    ".home-content, .heading, .skills-heading,.login-heading",
    { origin: "top" }
  );
  ScrollReveal().reveal("div.main-image, .container img,.about-img,.skill-child:nth-child(2)", {
    origin: "bottom",
  });
  ScrollReveal().reveal(".home-content h2", { origin: "left" });
  ScrollReveal().reveal(".home-content h3", { origin: "right" });
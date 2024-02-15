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
    ".for-h3, .heading, .skills-heading,.login-heading",
    { origin: "top" }
  );
  ScrollReveal().reveal("div.main-image ,.about-img,.skill-child:nth-child(2)", {
    origin: "bottom",
  });
  ScrollReveal().reveal("h3.for-downing", { origin: "left" });
  ScrollReveal().reveal("a.spot-button", { origin: "right" });




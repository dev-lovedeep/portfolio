ham = document.querySelector('.hamburger')
nav = document.querySelector('.nav')
logo = document.querySelector('.logo')
navbar = document.querySelector('header')
ham.addEventListener('click', (e) => {
    nav.classList.toggle('nav-active')
    e.preventDefault();
    e.stopPropagation();

})
document.addEventListener('click', () => {
    nav.classList.remove('nav-active')

})
window.addEventListener('scroll', () => {
    // check if scroll event happened
    if (window.scrollY > 50) { // check if user scrolled more than 50 from top of the browser window
        navbar.style.background = "var(--clr-dark)";
        logo.style.color = "var(--clr-light)"; // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
    } else {
        navbar.style.background = "var(--clr-light)";
        logo.style.color = "var(--clr-dark)"; // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        // if not, change it back to transparent
    }
});

let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .fa-bars");
let menuCloseBtn = document.querySelector(".nav-links .fa-solid.fa-x");

menuOpenBtn.addEventListener("click", function() {
    navLinks.style.top = "0";
});

menuCloseBtn.addEventListener("click", function() {
    navLinks.style.top = "-1214%";
});
  let openArrow = document.getElementById("arrowdrop");
openArrow.addEventListener("click", function () {
    let subMenu = document.getElementById("menusub");
    let computedStyle = window.getComputedStyle(subMenu);

    if (computedStyle.display === "none") {
        subMenu.style.display = "block";
        openArrow.style.transform = "rotate(180deg)"
    } else {
        subMenu.style.display = "none";
        openArrow.style.transform = "rotate(0deg)"
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('nav .navbar .nav-links li a');
    links.forEach(function (link) {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});
// script.js

var preloader = document.getElementById('loader');
function preLoaderHandler(){
    preloader.style.display = 'none';
}





  document.querySelectorAll('.learn-more-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default action if it's a link/button

        // Find the closest .item and then the .overlay within it
        const overlay = this.closest('.item').querySelector('.overlay');
        overlay.classList.toggle('darker');
    });
});

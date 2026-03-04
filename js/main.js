document.addEventListener("DOMContentLoaded", function () {

    const menuIcon = document.querySelector(".bars");
    const navBar = document.querySelector(".nav-bar");

    menuIcon.addEventListener("click", function () {
        navBar.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {

        if (navbar.classList.contains("active") && !navbar.contains(event.target)) {
            navbar.classList.remove("active");
        }
    });
});
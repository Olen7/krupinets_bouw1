(() => {
    const refs = {
        openMenuBtn: document.querySelector("[data-menu-open]"),
        closeMenuBtn: document.querySelector("[data-menu-close]"),
        menu: document.querySelector("[data-menu]"),
        mobileMenu: document.querySelector(".mob-menu"), // Змінена назва класу для вашого мобільного меню
    };

    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);

    function toggleMenu() {
        refs.mobileMenu.classList.toggle("is-hidden"); // Тільки додали тогл для мобільного меню
    }
})();
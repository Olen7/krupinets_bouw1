(() => {
    const refs = {
        openMenuBtn: document.querySelector("[data-menu-open]"),
        closeMenuBtn: document.querySelector("[data-menu-close]"),
        menu: document.querySelector("[data-menu]"),
        mobileMenu: document.querySelector(".mob-menu"),
        h1Element: document.querySelector("h1"),
        h2Element: document.querySelector("h2")
    };

    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);

    function toggleMenu() {
        refs.mobileMenu.classList.toggle("is-hidden");
        if (!refs.mobileMenu.classList.contains("is-hidden")) {
            refs.h1Element.style.display = "none"; // Приховуємо <h1> при відкритті меню
            refs.h2Element.style.display = "none"; // Приховуємо <h2> при відкритті меню
        } else {
            refs.h1Element.style.display = "block"; // Показуємо <h1> при закритті меню
            refs.h2Element.style.display = "block"; // Показуємо <h2> при закритті меню
        }
    }
})();
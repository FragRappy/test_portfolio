export const scrollPosition = {
    headerPosition: () => {
        const lastScrollCheck = Math.round(window.scrollY);
        const menuFix = document.querySelector('.menu');
        lastScrollCheck > 100? menuFix.classList.add('menu__fixed') : menuFix.classList.remove('menu__fixed');
    }
};
export const scrollPosition = {
    headerPosition: () => {
        const lastScrollCheck = Math.round(window.scrollY);
        const menuFix = document.querySelector('.menu');
        const totop = document.querySelector('.totop');
        lastScrollCheck > 1 ? menuFix.classList.add('menu__fixed') : menuFix.classList.remove('menu__fixed');
        lastScrollCheck != 0? totop.style.display ='flex' : totop.style.display ='none';
    }
};
// Gestion du scroll pour afficher le menu en fixed
import { scrollPosition } from "./specific/scroll";
window.addEventListener("scroll", scrollPosition.headerPosition);

//Gestion des cards pour mes différents emplois
import { emplois } from "./data/experiences";

//Gestion en temps réel du menu en mode mobile et tablet/desktop
window.addEventListener("DOMContentLoaded", (event) => {
    const menu = document.querySelector('.menu__nav');
    const menuToogle = document.querySelector('.menu__toogle');

    menuToogle.addEventListener('click', () => {
        menu.style.display = (menu.style.display == 'none')? '':'none';
    });

     window.onload = () => {
        const width = window.innerWidth;
        menu.style.display = ( width > 769 )? '':'none';
        menuToogle.style.display = ( width > 769 )? 'none':'';
    };

    window.onresize = () => {
        const width = window.innerWidth;
        menu.style.display = ( width > 769 )? '':'none';
        menuToogle.style.display = ( width > 769 )? 'none':'';
    };
});


// Gestion du scroll pour afficher le menu en fixed
import { scrollPosition } from "./specific/scroll";
window.addEventListener('scroll', (scrollPosition.headerPosition))

//Gestion des cards pour mes différents emplois
import { emplois } from "./data/experiences";

//gestion des cards de portfolio
import portfolios from "./data/portfolio";

//Gestion en temps réel des menus et boutons en mode mobile et tablet/desktop
window.addEventListener('DOMContentLoaded', function (event) {
    const menu = document.querySelector('.menu__nav');
    const menuToogle = document.querySelector('.menu__toogle');
    const totop = document.querySelector('.totop');
    //gestion du clic sur le menu navigation pour ios
    menuToogle.addEventListener('click', function () {  
        menu.classList.toggle('menu__nav__on');
        menu.style.display = (menu.style.display == 'none')? '':'none';
    });
    //gestion du clic sur le bouton de changement de theme

    //gestion du clic sur le bouton retourner en haut
    totop.addEventListener('click', () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    });
    //gestion de la largeur au chargement de la page
     window.onload = function () {
        const width = window.innerWidth;
        menu.style.display = ( width > 899 )? '':'none';
        menuToogle.style.display = ( width > 899 )? 'none':'';
    };
    //gestion de la largeur au changement de taille de la fenêtre
    window.onresize = function () {
        const width = window.innerWidth;
        menu.style.display = ( width > 899 )? '':'none';
        menuToogle.style.display = ( width > 899 )? 'none':'';
    };
});
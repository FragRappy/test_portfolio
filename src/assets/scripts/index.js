// Gestion du scroll pour afficher le menu en fixed
import { scrollPosition } from "./specific/scroll";
window.addEventListener('scroll', (scrollPosition.headerPosition))

//Gestion des cards d'expériences
import "./data/experiences";

//gestion des cards de portfolio
import "./data/portfolio";


//Gestion en temps réel des menus et boutons en mode mobile et tablet/desktop
window.addEventListener('DOMContentLoaded', function (event) {
    const menu = document.querySelector('.menu__nav');
    const menuToogle = document.querySelector('.menu__toogle');
    const totop = document.querySelector('.totop');
    //gestion du clic pour le menu burger
    function displayNavMobile () {
        if (menu.style.display == 'none'){
            menu.style.display = '';
            menu.classList.add('menu__nav__on');
        } else {
            menu.style.display = 'none';
            menu.classList.remove('menu__nav__on');
        }
    }
    menuToogle.addEventListener('click', displayNavMobile);
    //gestion du clic sur le bouton de changement de theme

    //gestion du clic sur le bouton retourner en haut
    totop.addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        if (menu.style.display == ''){
            menu.classList.remove('menu__nav__on');
            menu.style.display = 'none';
        }
    });
    //gestion de la largeur au chargement de la page
     window.onload = function () {
        const width = window.innerWidth;
        if (width > 899) {
            menu.style.display = '';
            menuToogle.style.display = 'none';
        } else {
            menu.style.display = 'none';
            menuToogle.style.display = '';
        }
    };
    //gestion de la largeur au changement de taille de la fenêtre
    window.onresize = function () {
        const width = window.innerWidth;
        if (width > 899) {
            menu.style.display = '';
            menu.classList.remove('menu__nav__on');
            menuToogle.style.display = 'none';
        } else {
            menu.style.display = 'none';
            menuToogle.style.display = '';
        }
    };
});
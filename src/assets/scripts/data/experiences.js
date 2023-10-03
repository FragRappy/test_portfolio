export const emplois = [
    {
        poste: 'Hotliner niveau 1',
        entreprise: 'B2S',
        years: [
            2009,
            2009
        ],
        months: [
            'mars',
            'juillet'
        ],
        description: 'Dépannage de box internet et des conflits matériels et logiciels BtoC',
    },
    {
        poste: 'Responsable magasin',
        entreprise: 'Occaziophone',
        years: [
            2010,
            2010
        ],
        months: [
            'avril',
            'juillet'
        ],
        description: 'Réparation de smartphones - Gestion des stocks - Merchandising - Gestion de la caisse',
    },
    {
        poste: 'Vendeur',
        entreprise: 'Game',
        years: [
            2010,
            2010
        ],
        months: [
            'octobre',
            'avril'
        ],
        description: 'Gestion de la caisson - Gestion du réassort - Merchandising - Conseil client',
    },
    {
        poste: 'Hotliner niveau 2 et formateur',
        entreprise: 'JDL Entreprise',
        years: [
            2011,
            2012
        ],
        months: [
            'décembre',
            'juillet'
        ],
        description: 'Support utilisateur en informatique et data mobile (iOS / Blackberry / Android / Clés 3G) - Formation des clients B2B sur l\'utilisation basique des smartphones (Mail / Internet / Messageries)',
    },
    {
        poste: 'Responsable rayon informatique',
        entreprise: 'Happy Cash',
        years: [
            2013,
            2014
        ],
        months: [
            'juin',
            'octobre'
        ],
        description: 'Gestion du rayon informatique (Conseil client / Vente / Achat / SAV / Suivi des stocks)',
    },
    {
        poste: 'Adjoint responsable magasin',
        entreprise: 'Phone House sarl',
        years: [
            2015,
            2017
        ],
        months: [
            'août',
            'juillet'
        ],
        description: 'Achat / Vente / Réparation de matériel informatique et smartphones - Gestion des stocks - Merchandising - Gestion des plannings - Supervision de deux techniciens',
    }
];

function addWorkToDom (){
    const ul = document.querySelector('#test');//a completer
    for (let i=0; i<emplois.length;i++){
        const li = document.createElement('li');
        li.style.display = 'flex'
        li.style.flexDirection = 'column'
        li.style.marginBottom = '1rem'
        // li.classList.add('');a completer
        const div = document.createElement('div');
        div.style.border = '2px solid black'
        div.style.display = 'flex'
        div.style.flexDirection = 'column'
        //div.classList.add('');a completer
        const pPoste = document.createElement('p');
        //pPoste.classList.add('');a completer
        pPoste.textContent = emplois[i].poste;
        const pEntreprise = document.createElement('p');
        //pEntreprise.classList.add('');a completer
        pEntreprise.textContent = emplois[i].entreprise;
        const spanDate = document.createElement('span');
        //spanDate.classList.add('');a completer et ajouter une ligne de séparation ici en bottom de ce p avec une classe
        spanDate.textContent = `${emplois[i].months[0]}-${emplois[i].years[0]} à ${emplois[i].months[1]}-${emplois[i].years[1]}`;
        const pDescription = document.createElement('p');
        //pDescription.classList.add('');a completer
        pDescription.textContent = emplois[i].description;
        li.append(div);
        div.append(pPoste, pEntreprise, pDescription);
        pEntreprise.append(spanDate);
        ul.append(li);
    }
};

addWorkToDom();
addWorkToDom();
addWorkToDom();
   
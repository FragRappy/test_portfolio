const jobs = [
  {
    poste: "Stage",
    entreprise: "Tremplin 01",
    years: [2024, 2024],
    months: ["mars", "avril"],
    description:
      "Réalisation du site internet (front-end et back-end) textile360.fr / Framework utilisé NextJs / composant UI React Mantine / ORM Prisma / Mise en production du site sur vercel",
  },
  {
    poste: "Renovation de biens immobiliers",
    entreprise: "A titre personnel",
    years: [2017, 2023],
    months: ["août", "décembre"],
    description: `Renovation complète de 3 biens immobiliers comprenant tout le second oeuvre ainsi qu'une grosse partie du gros oeuvre :
        Second oeuvre : électricité/plomberie et sanitaire/cuisine/menuiserie/carrelage/isolation/placo/peinture/
        Gros oeuvre : dalle sur hérisson/chape flottante sur isolant type xps/embrasure`,
  },
  {
    poste: "Adjoint responsable magasin",
    entreprise: "Phone House sarl",
    years: [2015, 2017],
    months: ["août", "juillet"],
    description:
      "Achat / Vente / Réparation de matériel informatique et smartphones - Gestion des stocks - Merchandising - Gestion des plannings - Supervision de deux techniciens",
  },
  {
    poste: "Responsable rayon informatique",
    entreprise: "Société Happy Cash",
    years: [2013, 2014],
    months: ["juin", "octobre"],
    description:
      "Gestion du rayon informatique (Conseil client / Vente / Achat / SAV / Suivi des stocks)",
  },
  {
    poste: "Hotliner niveau 2 et formateur",
    entreprise: "Société JDL Entreprise",
    years: [2011, 2012],
    months: ["décembre", "juillet"],
    description:
      "Support utilisateur en informatique et data mobile (iOS / Blackberry / Android / Clés 3G) - Formation des clients B2B sur l'utilisation basique des smartphones (Mail / Internet / Messageries)",
  },
  {
    poste: "Vendeur",
    entreprise: "Société Game",
    years: [2010, 2011],
    months: ["octobre", "avril"],
    description:
      "Gestion de la caisson - Gestion du réassort - Merchandising - Conseil client",
  },
  {
    poste: "Responsable magasin",
    entreprise: "Société Occaziophone",
    years: [2010, 2010],
    months: ["avril", "juillet"],
    description:
      "Réparation de smartphones - Gestion des stocks - Merchandising - Gestion de la caisse",
  },
  {
    poste: "Hotliner niveau 1",
    entreprise: "Société B2S",
    years: [2009, 2009],
    months: ["mars", "juillet"],
    description:
      "Dépannage de box internet et des conflits matériels et logiciels BtoC",
  },
];

const addJobToDom = (job) => {
  const ul = document.querySelector("#job-content");
  const li = document.createElement("li");
  li.classList.add("cv__container__content__card");
  const pPoste = document.createElement("p");
  pPoste.classList.add("cv__container__content__card__poste");
  pPoste.textContent = job.poste;
  const pEntreprise = document.createElement("p");
  pEntreprise.classList.add("cv__container__content__card__entreprise");
  pEntreprise.textContent = job.entreprise;
  const spanDate = document.createElement("span");
  spanDate.classList.add("cv__container__content__card__date");
  spanDate.textContent = `de ${job.months[0]}-${job.years[0]} à ${job.months[1]}-${job.years[1]}`;
  const pDescription = document.createElement("p");
  //pDescription.classList.add('');a completer
  pDescription.textContent = job.description;
  li.append(pPoste, pEntreprise, spanDate, pDescription);
  ul.append(li);
};

for (const job of jobs) {
  addJobToDom(job);
}

const trainings = [
  {
    name: "TP Développeur web et web mobile (option accessibilité)",
    school: "O'Clock (75008) - Adea (01000)",
    years: "de 2023 à 2024",
    statut: "Obtenu",
  },
  {
    name: "Formation Hotliner niveau 1",
    school: "Orange / France Télécom (13290)",
    years: "2009",
    statut: "certifié",
  },
  {
    name: "Bac Pro Système Electronique Numérique",
    school: "Lycée Saint Joseph (01000)",
    years: "2008",
    statut: "Niveau - diplôme non passé",
  },
  {
    name: "Bep Electronique",
    school: "Lycée Alexandre Bérard (01500)",
    years: "de 2007 à 2008",
    statut: "Obtenu",
  },
];

const addTrainingToDom = (training) => {
  const ul = document.querySelector("#training-content");
  const li = document.createElement("li");
  li.classList.add("cv__container__content__card");
  const spanName = document.createElement("span");
  spanName.classList.add("cv__container__content__card__poste");
  spanName.textContent = training.name;
  const spanSchool = document.createElement("span");
  spanSchool.classList.add("cv__container__content__card__entreprise");
  spanSchool.textContent = training.school;
  const spanYear = document.createElement("span");
  // spanYear.classList.add('');
  spanYear.textContent = training.years;
  const spanStatut = document.createElement("span");
  spanStatut.classList.add("cv__container__content__card__entreprise");
  spanStatut.textContent = training.statut;
  li.append(spanName, spanSchool, spanYear, spanStatut);
  ul.append(li);
};

for (const training of trainings) {
  addTrainingToDom(training);
}

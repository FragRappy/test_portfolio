//gestion des cards de portfolio

const portfolios = [
  {
    language: "js",
    title: "Textile360",
    desc: "Projet de stage",
    url: new URL("https://textile360.fr"),
    thumbImg: new URL(
      "../../../assets/img/thumb/textile360.png",
      import.meta.url
    ),
  },
  {
    language: "css",
    title: "TimUps",
    desc: "Exercice personnel en html/css",
    url: new URL("https://timups-one.vercel.app"),
    thumbImg: new URL("../../../assets/img/thumb/timups.png", import.meta.url),
  },
  {
    language: "css",
    title: "PokeBon",
    desc: "Atelier de formation html/css",
    url: new URL("https://s02-e10-exos-pokebon-frag-rappy.vercel.app"),
    thumbImg: new URL("../../../assets/img/thumb/pokebon.png", import.meta.url),
  },
  {
    language: "js",
    title: "Portfolio",
    desc: "Exercice personnel en html/css/js",
    url: new URL("https://fragrappy-portfolio.vercel.app"),
    thumbImg: new URL(
      "../../../assets/img/thumb/portfolio.png",
      import.meta.url
    ),
  },
  {
    language: "css",
    title: "Blog",
    desc: "Atelier de formation",
    url: new URL("https://s02-atelier-revision-bonus-frag-rappy.vercel.app"),
    thumbImg: new URL("../../../assets/img/thumb/bonus.png", import.meta.url),
  },
  {
    language: "js",
    title: "Penalty Game",
    desc: "Exercice personnel en html/css/js",
    url: new URL("https://penalty-game-one.vercel.app"),
    thumbImg: new URL("../../../assets/img/thumb/penalty.png", import.meta.url),
  },
];

function addCardToDom(portfolio) {
  const card = document.querySelector(".portfolio__container");
  const article = document.createElement("article");
  article.classList.add("portfolio__container__card");
  if (portfolio.language == "css") {
    article.setAttribute("data-language", "css");
  } else {
    article.setAttribute("data-language", "js");
  }
  const div = document.createElement("div");
  div.classList.add("portfolio__container__card__img");
  const aImg = document.createElement("a");
  aImg.setAttribute("href", portfolio.url);
  aImg.setAttribute("target", "_blank");
  aImg.setAttribute("rel", "noopener");
  const img = document.createElement("img");
  img.setAttribute("src", portfolio.thumbImg);
  const aTitle = document.createElement("a");
  aTitle.setAttribute("href", portfolio.url);
  aTitle.setAttribute("target", "_blank");
  aTitle.setAttribute("rel", "noopener");
  const h2 = document.createElement("h2");
  h2.textContent = portfolio.title;
  const p = document.createElement("p");
  p.textContent = portfolio.desc;
  card.append(article);
  article.append(div, h2, aTitle, p);
  div.append(aImg);
  aImg.append(img);
  aTitle.append(h2);
}

// Cela insert un objet du tableau portfolios dans le dom avec addCardToDom
for (const portfolio of portfolios) {
  addCardToDom(portfolio);
}

//fonction de filtre pas fofolle
const filter = {
  cards: document.querySelectorAll(`.portfolio__container__card`),
  allFolio: document.querySelector("#all-folio"),
  cssFolio: document.querySelector("#css-folio"),
  jsFolio: document.querySelector("#js-folio"),

  cardFilter: (lang) => {
    for (const card of filter.cards) {
      if (card.dataset.language != lang) {
        card.classList.add("hidden");
      } else {
        card.classList.remove("hidden");
      }
    }
  },
};

//ecouteur pour les differents boutons de filtre des cards
filter.allFolio.addEventListener("click", () => {
  filter.allFolio.classList.add("current");
  filter.cssFolio.classList.remove("current");
  filter.jsFolio.classList.remove("current");
  for (const card of filter.cards) {
    card.classList.remove("hidden");
  }
});
filter.cssFolio.addEventListener("click", () => {
  filter.allFolio.classList.remove("current");
  filter.cssFolio.classList.add("current");
  filter.jsFolio.classList.remove("current");
  filter.cardFilter("css");
});
filter.jsFolio.addEventListener("click", () => {
  filter.allFolio.classList.remove("current");
  filter.cssFolio.classList.remove("current");
  filter.jsFolio.classList.add("current");
  filter.cardFilter("js");
});

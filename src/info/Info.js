import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";
import mock6 from "../img/mock6.png";
import mock7 from "../img/mock7.png";
import mock8 from "../img/mock8.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(245, 230, 220)", "rgb(212, 193, 178)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
      firstName: "Salma",
      lastName: "Aboudou",
      initials: "sa", // the example uses first and last, but feel free to use three or more if you like.
      position: "En recherche d’une alternance en test logiciel (QA)",
      selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
      gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
      baseColor: colors[0],
      miniBio: [
            // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
            {
                  emoji: "↪︎",
                  text: "Ancienne étudiante en neurosciences, je me suis ensuite formée au développement web.",
            },
            {
                  emoji: "↪︎",
                  text: "Après deux ans d’entrepreneuriat, j’ai décidé de me réorienter vers le test logiciel.",
            },
            {
                  emoji: "↪︎",
                  text: "Je suis actuellement à la recherche d’une alternance en tant que QA Analyst.",
            },
            {
                  emoji: "📩",
                  text: "aboudou.salma@live.fr",
            },
      ],
      socials: [
            {
                  link: "https://www.instagram.com/shoptonsitefr/",
                  icon: "fa fa-instagram",
                  label: "instagram",
            },
            {
                  link: "https://github.com/salmaaboudou",
                  icon: "fa fa-github",
                  label: "github",
            },
            {
                  link: "https://www.linkedin.com/in/salma-aboudou/",
                  icon: "fa fa-linkedin",
                  label: "linkedin",
            },
            {
                  link: "https://www.linkedin.com/in/salma-aboudou/",
                  icon: "fa-brands fa-tiktok",
                  label: "tiktok",
            },
            // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
            // Just change the links so that they lead to your social profiles.
      ],
      bio: "Titulaire d’une licence en neurosciences, je me suis réorientée vers le développement web en suivant une formation de Développeuse Intégratrice Web.\n\nPendant deux ans, j’ai accompagné des petites entreprises dans la création ou la refonte de leur site, en gérant le design, l’intégration et le contenu.\n\nAujourd’hui, je souhaite me former au métier de testeuse logiciel (QA) en alternance (4j/semaine), un domaine qui allie rigueur, analyse et souci du détail. ",
      skills: {
            proficientWith: ["HTML", "CSS", "Vanilla Javascript", "React", "Wordpress", "Git", "Github", "Figma"],
            exposedTo: ["Node.js", "MongodDB", "API Rest"],
      },
      formations: [
            {
                  label: "Formation Développeur Web - Openclassrooms (fev 2023 - oct 2023)",
                  emoji: "👩🏾",
            },
            {
                  label: "Formation WordPress - Centre Savoir Agir (Sept 2023) ",
                  emoji: "💻",
            },
            {
                  label: "Licence Sciences de la Vie spé. Neurosciences - Aix Marseille Université (2022)",
                  emoji: "🧠",
            },
            // Same as above, change the emojis to match / relate to your hobbies or interests.
            // You can also remove the emojis if you'd like, I just think they look cute :P
      ],
      portfolio: [
            // This is where your portfolio projects will be detailed
            {
                  title: "Shop Ton Site",
                  live: "https://shoptonsite.com/",
                  source: null,
                  image: mock7,
                  year: "2025",
                  mission: "Lancement de ma propre marque digitale dédiée à la vente de modèles de sites web conçus sur Canva. J’ai imaginé le concept, créé un premier template, réalisé le tutoriel vidéo et développé le site e-commerce sous WordPress. J’ai également mis en place une stratégie de contenu sur TikTok & Instagram pour faire connaître le projet (11K abonnés).",
                  projectDescription: " Création de la marque Shop ton site, dédiée à la vente de modèles de sites web Canva.",
                  technologiesUsed: "WordPress pour le site et Canva pour les visuels",
                  clientFeedback : null,
            },
            {
                  title: "Papershock",
                  live: "https://papershock.com/",
                  source: null,
                  image: mock8,
                  year: "2025",
                  mission: "Cliente freelance – Refonte complète du site d’une marque de fiches éducatives. Le site initial, créé via le builder Ionos, limitait fortement la personnalisation. J’ai entièrement repensé le design, puis intégré les éléments à l’aide de HTML, CSS et JavaScript afin de contourner les contraintes techniques de l’éditeur.",
                  projectDescription: "",
                  technologiesUsed: "Builder via Ionos, HTML, CSS, JavaScript, Canva (visuels)",
                  clientFeedback : null,
            },
            {
                  title: "Booki",
                  live: "https://salmaaboudou.github.io/Projet2_openclassrooms/", 
                  source: "https://github.com/salmaaboudou/Projet2_openclassrooms", 
                  image: mock1,
                  year: "2023",
                  mission: "Projet réalisé durant ma formation. Intégration du site vitrine d’une agence de voyage à partir d’une maquette Figma, en HTML et CSS.",
                  projectDescription: "Page d'accueil de l'agence de voyage Booki.",
                  technologiesUsed: "HTML, CSS",
                  clientFeedback : null
            },
            {
                  title: "Mon vieux grimoire",
                  live: "https://github.com/salmaaboudou/mon-vieux-grimoire",
                  source: "https://github.com/salmaaboudou/mon-vieux-grimoire",
                  image: mock2,
                  year: "2023",
                  mission: "Projet réalisé dans le cadre de ma formation. Développement du backend d’un site de notation de livres : création d’une API Rest, base de données MongoDB, système d’authentification via JWT, et gestion des fichiers utilisateur avec Multer et Sharp.",
                  projectDescription: "Site de référencement et de notation de livres.",
                  technologiesUsed: "API Rest, NodeJS, Express, MondoDB",
                  clientFeedback : null
            },
            {
                  title: "Portfolio de Sophia Bluel ",
                  live: "https://github.com/salmaaboudou/Projet3_openclassrooms",
                  source: "https://github.com/salmaaboudou/Projet3_openclassrooms",
                  image: mock3,
                  year: "2023",
                  mission: "Projet réalisé durant ma formation de développeuse web. J’ai connecté le backend (Express.js) au frontend existant, puis intégré une modale permettant l’ajout, la modification et la suppression de nouveaux médias. J’ai également mis en place une page de connexion dédiée à l’administrateur du site.",
                  projectDescription: "Portfolio d'une architecte d'intérieur avec modale d'ajout de projets.",
                  technologiesUsed: "HTML, CSS, Javascript",
                  clientFeedback : null
            },
            {
                  title: "Kasa",
                  live: "https://salmaaboudou.github.io/P6_Openclassrooms/",
                  source: "https://github.com/salmaaboudou/P6_Openclassrooms",
                  image: mock4,
                  year: "2023",
                  mission: "Projet réalisé dans le cadre de ma formation en développement web. J’ai intégré le frontend de l’application à partir d’une maquette Figma, en créant les différentes routes de navigation avec React Router.",
                  projectDescription: "Application web de location immobilière KASA.",
                  technologiesUsed: "HTML, SASS, React, React-router",
                  clientFeedback : null
            },
            {
                  title: "Menu Maker by Qwenta",
                  live: "https://salma-dev.notion.site/Outil-de-gestion-de-projet-Menu-Maker-by-Qwenta-b2aa56300fa34f59af63fb0c652f76a1",
                  source: null,
                  image: mock6,
                  year: "2023",
                  mission: "Projet réalisé dans le cadre de ma formation en développement web. Il consistait à organiser la gestion de projet pour une application web dédiée à l’impression de supports professionnels (restauration, immobilier, etc.).J’ai mis en place un espace de travail collaboratif sur Notion, rédigé les spécifications techniques à partir des besoins clients, et structuré les tâches dans un tableau Kanban selon la méthodologie Scrum.",
                  projectDescription: "Cheffe de projet pour l’application web fictive Menu Maker by Qwenta",
                  technologiesUsed: "Notion, Méthodologie Agile (Scrum), Documentation technique.",
                  clientFeedback : null
            }
      ],
};

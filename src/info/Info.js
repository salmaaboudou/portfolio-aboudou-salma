import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(181, 221, 255)", "rgb(217, 152, 255)"];
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
      position: "Développeuse front-end React",
      selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
      gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
      baseColor: colors[0],
      miniBio: [
            // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
            {
                  emoji: "🌐",
                  text: "Passionée du web",
            },
            {
                  emoji: "🇫🇷",
                  text: "Basée en France",
            },
            {
                  emoji: "📩",
                  text: "aboudou.salma@live.fr",
            },
      ],
      socials: [
            {
                  link: "https://www.instagram.com/salma.codes/",
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
            // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
            // Just change the links so that they lead to your social profiles.
      ],
      bio: "Salut, je suis Salma, une développeuse frontend passionnée par la création d'expériences web exceptionnelles. 🚀\n\n Mon parcours dans le développement web m'a conduit à me spécialiser en React, une technologie que j'adore pour sa puissance et sa flexibilité. 💻\n\n Je suis à la recherche de nouveaux défis et de projets stimulants pour mettre en pratique mes compétences en développement frontend. Mon objectif est de concevoir des interfaces utilisateur modernes, intuitives et esthétiquement plaisantes qui captivent les utilisateurs et apportent de la valeur à chaque projet. 💡\n\n Lorsque je ne code pas, vous me trouverez probablement en train d'explorer les dernières tendances en matière de design et de technologie, ou en train de travailler sur des projets personnels pour continuer à apprendre et à grandir en tant que développeuse. 🌟\n\n J'ai hâte de discuter avec vous de vos idées et de collaborer sur des projets passionnants. N'hésitez pas à me contacter pour que nous puissions transformer votre vision en réalité numérique. 💬\n\n ",
      skills: {
            proficientWith: ["HTML", "CSS", "Vanilla Javascript", "React", "Wordpress", "Git", "Github", "Figma"],
            exposedTo: ["Node.js", "MongodDB", "API Rest"],
      },
      formations: [
            {
                  label: "Formation Développeur Web - Openclassrooms (fev 2023 - oct 2023)",
                  emoji: "👩🏾‍💻",
            },
            {
                  label: "Formation WordPress - Centre Savoir Agir (Sept 2023) ",
                  emoji: "💻",
            },
            {
                  label: "Licence Neurosciences - Aix Marseille Université (2022)",
                  emoji: "🧠",
            },
            // Same as above, change the emojis to match / relate to your hobbies or interests.
            // You can also remove the emojis if you'd like, I just think they look cute :P
      ],
      portfolio: [
            // This is where your portfolio projects will be detailed
            {
                  title: "Mon portfolio 💯",
                  live: "https://salmaaboudou.github.io/portfolio-aboudou-salma/", 
                  source: "https://github.com/salmaaboudou/portfolio-aboudou-salma", 
                  image: mock5,
                  year: "2023",
                  mission: "Réalisation de mon portfolio de développeuse web freelance",
                  projectDescription: "Portfolio réalisé à partir d'un template react auquel j'ai ajouté une modale d'informations supplémentaire pour chacun des projets du portfolio.",
                  technologiesUsed: "HTML, CSS, React",
            },
            {
                  title: "Booki ✈️",
                  live: "https://salmaaboudou.github.io/Projet2_openclassrooms/", 
                  source: "https://github.com/salmaaboudou/Projet2_openclassrooms", 
                  image: mock1,
                  year: "2023",
                  mission: "Intégration du frontend du site à partir d'une maquette Figma.",
                  projectDescription: "Page d'accueil de l'agence de voyage Booki.",
                  technologiesUsed: "HTML, CSS",
            },
            {
                  title: "Mon vieux grimoire 📚",
                  live: "https://github.com/salmaaboudou/mon-vieux-grimoire",
                  source: "https://github.com/salmaaboudou/mon-vieux-grimoire",
                  image: mock2,
                  year: "2023",
                  mission: "Création d'un serveur express simple / Mise en place d'une API Rest / Configuration d'une base de donnés mongoDB / Mise en plase d'un système d'authentification par Token(jwt) / Mise en place d'une gestion des fichiers utilisateur via Sharp et Multer",
                  projectDescription: "Site de référencement et de notation de livres.",
                  technologiesUsed: "API Rest, NodeJS, Express, MondoDB",
            },
            {
                  title: "Portfolio de Sophia Bluel 📸",
                  live: "https://github.com/salmaaboudou/Projet3_openclassrooms",
                  source: "https://github.com/salmaaboudou/Projet3_openclassrooms",
                  image: mock3,
                  year: "2023",
                  mission: "Connexion du backend (app express) au front end du site  / Intégration d'une modale permettant l'ajout, la modification et la suppression de nouveaux médias / Intégration d'une page de connexion pour l'administrateur du site",
                  projectDescription: "Portfolio d'une architecte d'intérieur avec modale d'ajout de projets.",
                  technologiesUsed: "HTML, CSS, Javascript",
            },
            {
                  title: "Kasa 🏘️",
                  live: "https://salmaaboudou.github.io/P6_Openclassrooms/",
                  source: "https://github.com/salmaaboudou/P6_Openclassrooms",
                  image: mock4,
                  year: "2023",
                  mission: "Intégration du frontend de l'application à partir d'une maquette Figma/ Création des routes de l'application avec React-router",
                  projectDescription: "Application web de location immobilière KASA.",
                  technologiesUsed: "HTML, SASS, React, React-router",
            },
      ],
};

import projectEr from "../img/project/project-er.webp";
import erIntranet from "../img/project/erIntranet.webp";
import ocproject from "../img/project/ocp14intra.png";
import ocproject2 from "../img/project/ocprojectp13.png";
import ocbill from "../img/project/ocbill.png";
const dataProject = [
    {
        title: "Site Easy-Réunion (en alternance)",
        description: "Organisation et réservation en ligne pour vos événements, initialement créé avec *Laravel* et *Vue.js*.",
        experience: ["Apprentissage du langage *PHP*", "Découverte et prise en main du framework web *Laravel*.",
            "Architecture logicielle (Modèle MVC)", "Refonte du front-end (intégration de maquettes).","Intégration de fonctionnalités utilisateur (carte interactive avec *leaflet*, *Openstreetmap*, et *Mapbox*).",
            "Optimisation seo"
        ],
        link:"https://www.easyreunion.fr/",
        image: projectEr,
        hasWebSite: true,
    },
    {
        title: "Intranet (en alternence)",
        description: "Outil interne développé spécifiquement pour répondre aux besoins liés aux activités des différents services de l'entreprise, tel que la gestion des demandes clients, la planification et le calendrier, ainsi que la logistique des événements. Cet outil facilite également la gestion du workflow des demandes clients, depuis la réception jusqu'à la réalisation des projets. Il est conçu avec *Laravel* pour le back-end et *Vue.js* pour le front-end",
        experience: ["Découverte du framework *Inertia.js*, qui permet de créer des interfaces utilisateur fluides et réactives avec des frameworks front-end tels que *Vue.js*",
            "Configuration d'un projet avec *Vite*",
            "Ajout de fonctionnalités précises dans l'agenda avec Vue, comme un tooltip au survol d'une journée pour indiquer les détails sur la réservation de ce jour",
            "Assurer le bon fonctionnement du flux de travail de l'application, notamment en gérant les demandes de réservation, l'agenda et tout autre élément de l'application",
            "Avec les nombreuses données stockées dans l'application (les demandes, réservations ou les devis), nous avons travaillé sur un service à but commercial en back-end afin de fournir des statistiques sur ces données, telles que le nombre moyen de demandes sur une période ou le classement des lieux les plus demandés"
        ],
        link:"portfolioA/not-found",
        image: erIntranet,
        hasWebSite: false,
    },
    {
        title: "Faites passer une librairie jQuery vers React (formation)",
        description: "Refondre les pages clés de l’application en remplaçant un plugin jQuery spécifique par un composant React",
        experience: [" Migration d'une application de *jQuery* vers *React*", "Réduire la dette technique et d'améliorer la performance d'une application web",
            "Prise en compte des issues Github et de la documetation des pluging jQuery afain de trouver la meilleure solution avec React",
            "Utilisation de *Redux*","Création et publication d'un *package npm*","mise en place d'un algorite de recherche le plus performant possible"
        ],
        link:"https://github.com/Lokikun5/hrnet",
        image: ocproject,

    },
    {
        title: "Utilisez une API pour un compte utilisateur bancaire (formation)",
        description: "travaillerez sur le développement *front-end* d’une application bancaire en utilisant *React* et *Redux* pour créer une expérience utilisateur dynamique et réactive",
        experience: ["Intégration de pages statiques dans une application *React*", "Découverte et utilisation de *Redux*, une bibliothèque de gestion d'état pour les applications *JavaScript*. *Redux* permet de gérer l'état global de l'application de manière prévisible en utilisant un flux de données unidirectionnel. Il se compose principalement de trois concepts clés : *le store*, qui contient l'état global de l'application ; *les actions*, qui sont des objets JavaScript représentant des événements qui modifient l'état ; et *les reducers*, qui sont des fonctions pures qui spécifient comment l'état de l'application change en réponse à une action donnée",
            "Mise en place d'un service pour interagir avec le *backend* via une *API*. Cela implique de créer des modules ou des fonctions qui envoient des *requêtes HTTP* au serveur *backend* et qui gèrent les réponses de manière appropriée, par exemple en traitant les données renvoyées et en mettant à jour l'état de l'application en conséquence",
            "Maîtrise des concepts importants de *React* (et des frameworks *JavaScript* en général) sur le cycle de vie d'un composant. Le cycle de vie d'un composant *React* se compose de différentes méthodes qui sont automatiquement appelées à des moments spécifiques du cycle de vie d'un composant, comme son initialisation, son montage, sa mise à jour et son démontage. Comprendre ces concepts permet une gestion efficace des interactions et des mises à jour dans l'application",
        ],
        link:"https://github.com/Lokikun5/argent-bank",
        image: ocproject2,

    },
    {
        title: "Débuggez et testez un SaaS RH (formation)",
        description: " débugger et tester une application. Vous travaillerez sur des tests unitaires et d'intégration en JavaScript",
        experience: ["corriger les bugs d’un système RH", " implémenterez des tests unitaires en JavaScript",
            "élaborerez également un plan de test end-to-end manuel pour assurer le bon fonctionnement du parcours employé de l'application", "Le Chrome Debugger sera utilisé pour le débogage de l'application, vous permettant de détecter et de résoudre les problèmes de manière efficace"
        ],
        link:"https://github.com/Lokikun5/Billed-app-FR_Antonio-Quadjovie2",
        image: ocbill,

    },

];
export default dataProject;
import { reactive } from "vue";

export const store = reactive({
    group_projects: [
        {
            id:1,
            github: "https://github.com/Valeria-Caramellino/vue-boolzapp",
            img: "/img_progetti/whats.png",
            title: "Web App WhatsApp",
            text: "Progetto riproduzione Web App WhatsApp con risposta automatica dopo due secondi.",
            tecnology:"Html, Css, Javascript, Bootstrap, FontAwesome, VueJs",
            video:"/video/Boolzap.mp4"
        },
        {
            id:2,
            github: "https://github.com/Valeria-Caramellino/htmlcss-discord",
            img: "/img_progetti/Discord.png",
            title: "Discord",
            text: "Creazione di una pagina web ispirata al layout Discord.",
            tecnology:"HTML, CSS",
            video:"/video/Discord.mp4"
        },
        {
            id:3,
            github: "https://github.com/Valeria-Caramellino/laravel-dc-comics",
            img: "/img_progetti/dc.png",
            title: "DC Comics",
            text: "Progetto effettuato con Laravel, PHP. E' una riproduzione di DC-Comics. Alla vista troviamo comics già caricati con possibilità di crearne altri, modificarli e cancellarli direttamente!",
            tecnology:"Laravel, PHP, HTML, CSS, SASS, Bootstrap, Javascript.",
            video:"/video/DC_Laravel.mp4"
        },
        {
            id:4,
            github: "https://github.com/Valeria-Caramellino/html-css-bootstrap-dashboard",
            img: "/img_progetti/Dashboard.png",
            title: "Dashboard",
            text: "Progetto di riproduzione di un Dashboard Responsive realizzato con Bootstrap.",
            tecnology:"HTML, CSS, Bootstrap ",
            video:"/video/Dashboard.mp4"
        },
        {
            id:5,
            github: "https://github.com/Valeria-Caramellino/htmlcss-dropbox",
            img: "/img_progetti/DropBox-1.png",
            title: "DropBox",
            text: "Creazione di una pagina web ispirata al layout DropBox.",
            tecnology:"HTML, CSS",
            video:"/video/DropBox.mp4"
        },
        {
            id:6,
            github: "https://github.com/Valeria-Caramellino/vite-boolflix",
            img: "/img_progetti/Netflix.png",
            title: "Netflix",
            text: "Progetto di riproduzione simil Netflix con chiamata Api tramite Ajax. Gestione dei voti espressi in stelle e della lingua del film sotto forma di bandierine.",
            tecnology:"HTML, CSS, SASS, Vuejs, Api, Javascript, Bootstrap, Ajax ",
            video:"/video/Netflix.mp4"
        },
        {
            id:7,
            github: "https://github.com/Valeria-Caramellino/proj-html-vuejs",
            img: "/img_progetti/Game.png",
            title: "GameHoax",
            text: "Progetto di riproduzione pagina GameHoax.",
            tecnology:"HTML, CSS, Bootstrap, VueJs, Javascript, FontAwesome",
            video:"/video/Game.mp4"
        },
        {
            id:8,
            github: "https://github.com/Valeria-Caramellino/html-css-spotifyweb",
            img: "/img_progetti/Spotify.png",
            title: "Spotify Web",
            text: "Progetto riproduzione pagina statica della nota applicazione Spotify Web in modo responsive.",
            tecnology:"HTML, CSS, FontAwesome",
            video:"/video/Spotify.mp4"
        },
        {
            id:9,
            github: "https://github.com/Valeria-Caramellino/js-social-posts",
            img: "/img_progetti/Social_Post.png",
            title: "Social Post",
            text: "Progetto riproduzione pagina statica di una pagina Social con Like.",
            tecnology:"HTML, CSS, Javascript, FontAwesome",
            video:"/video/Social_Post.mp4"
        },
        {
            id:10,
            github: "https://github.com/Valeria-Caramellino/vite-yu-gi-oh",
            img: "/img_progetti/Yu.png",
            title: "Yu-Gi-Oh",
            text: "Progetto di riproduzione Carte Yu-Gi-Oh con chiamata Api tramite Ajax e gestione della ricerca per tipologia.",
            tecnology:"HTML, CSS, Vuejs, Api, Javascript, Bootstrap, Ajax",
            video:"/video/Yu-Gi-Oh.mp4"
        },
        {
            id:11,
            github: "https://github.com/Valeria-Caramellino/New_Adventure",
            img: "/img_progetti/Adventures.png",
            title: "Adventure",
            text: "Progetto di gioco testuale che offre esperienze coinvolgenti grazie a OpenAI e VueJS. Combina l'intelligenza artificiale per la generazione di storie uniche e avvincenti con un'interfaccia utente reattiva e adattabile su tutti i dispositivi.",
            tecnology:"Vuejs, Api, Javascript, Bootstrap, Ajax, Open AI",
            video:"/video/Adventures.mp4"
        },
    ]
})
// 
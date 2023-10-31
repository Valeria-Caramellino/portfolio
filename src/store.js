import { reactive } from "vue";

export const store = reactive({
    group_projects: [
        {
            id:1,
            github: "https://github.com/Valeria-Caramellino/vue-boolzapp",
            img: "/src/assets/img_progetti/whats.png",
            title: "Web App WhatsApp",
            text: "Progetto riproduzione Web App WhatsApp con risposta automatica dopo due secondi.",
            tecnology:"Html, Css, Javascript, Bootstrap, FontAwesome, VueJs",
            video:"/src/assets/video/Boolzap.mp4"
        },
        {
            id:2,
            github: "https://github.com/Valeria-Caramellino/htmlcss-discord",
            img: "/src/assets/img_progetti/Discord.png",
            title: "Discord",
            text: "Creazione di una pagina web ispirata al layout Discord.",
            tecnology:"HTML, CSS",
            video:"/src/assets/video/Discord.mp4"
        },
        {
            id:3,
            github: "https://github.com/Valeria-Caramellino/laravel-dc-comics",
            img: "/src/assets/img_progetti/dc.png",
            title: "DC Comics",
            text: "Progetto effettuato con Laravel, PHP. E' una riproduzione di DC-Comics. Alla vista troviamo comics già caricati con possibilità di crearne altri, modificarli e cancellarli direttamente!",
            tecnology:"Laravel, PHP, HTML, CSS, SASS, Bootstrap, Javascript.",
            video:"/src/assets/video/DC_Laravel.mp4"
        },
        {
            id:4,
            github: "https://github.com/Valeria-Caramellino/html-css-bootstrap-dashboard",
            img: "/src/assets/img_progetti/Dashboard.png",
            title: "Dashboard",
            text: "Progetto di riproduzione di un Dashboard Responsive realizzato con Bootstrap.",
            tecnology:"HTML, CSS, Bootstrap ",
            video:"/src/assets/video/Dashboard.mp4"
        },
        {
            id:5,
            github: "https://github.com/Valeria-Caramellino/htmlcss-dropbox",
            img: "/src/assets/img_progetti/DropBox-1.png",
            title: "DropBox",
            text: "Creazione di una pagina web ispirata al layout DropBox.",
            tecnology:"HTML, CSS",
            video:"/src/assets/video/DropBox.mp4"
        },
        {
            id:6,
            github: "https://github.com/Valeria-Caramellino/vite-boolflix",
            img: "/src/assets/img_progetti/Netflix.png",
            title: "Netflix",
            text: "Progetto di riproduzione simil Netflix con chiamata Api tramite Ajax. Gestione dei voti espressi in stelle e della lingua del film sotto forma di bandierine.",
            tecnology:"HTML, CSS, SASS, Vuejs, Api, Javascript, Bootstrap, Ajax ",
            video:"/src/assets/video/Netflix.mp4"
        },
        {
            id:7,
            github: "https://github.com/Valeria-Caramellino/proj-html-vuejs",
            img: "/src/assets/img_progetti/Game.png",
            title: "GameHoax",
            text: "Progetto di riproduzione pagina GameHoax.",
            tecnology:"HTML, CSS, Bootstrap, VueJs, Javascript, FontAwesome",
            video:"/src/assets/video/Game.mp4"
        },
        {
            id:8,
            github: "https://github.com/Valeria-Caramellino/html-css-spotifyweb",
            img: "/src/assets/img_progetti/Spotify.png",
            title: "Spotify Web",
            text: "Progetto riproduzione pagina statica della nota applicazione Spotify Web in modo responsive.",
            tecnology:"HTML, CSS, FontAwesome",
            video:"/src/assets/video/Spotify.mp4"
        },
        {
            id:9,
            github: "https://github.com/Valeria-Caramellino/js-social-posts",
            img: "/src/assets/img_progetti/Social_Post.png",
            title: "Social Post",
            text: "Progetto riproduzione pagina statica di una pagina Social con Like.",
            tecnology:"HTML, CSS, Javascript, FontAwesome",
            video:"/src/assets/video/Social_Post.mp4"
        },
        {
            id:10,
            github: "https://github.com/Valeria-Caramellino/vite-yu-gi-oh",
            img: "/src/assets/img_progetti/Yu.png",
            title: "Yu-Gi-Oh",
            text: "Progetto di riproduzione Carte Yu-Gi-Oh con chiamata Api tramite Ajax e gestione della ricerca per tipologia.",
            tecnology:"HTML, CSS, Vuejs, Api, Javascript, Bootstrap, Ajax",
            video:"/src/assets/video/Yu-Gi-Oh.mp4"
        },
    ]
})
// 
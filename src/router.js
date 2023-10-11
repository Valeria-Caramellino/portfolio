import { createRouter , createWebHistory } from "vue-router";


//importi le pagine
// import AppHome from './pages/AppHome.vue';
import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
const router = createRouter({

    history: createWebHistory(),
    routes:[
        // crei rotte es 
        //se devi ridinizzonare un percorso metti path: '/' e redirect:'/home'
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component : AppHome
        },
        {
            path:'/ChiSono',
            name: 'about',
            component: AppAbout
        },

    ]

});
export { router };
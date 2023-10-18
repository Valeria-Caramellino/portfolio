import { createRouter , createWebHistory } from "vue-router";


//importi le pagine

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import AppSkill from './pages/AppSkill.vue';
import AppPortfolio from './pages/AppPortfolio.vue';
import AppContatti from './pages/AppContatti.vue';

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
        {
            path:'/Skills',
            name: 'skills',
            component: AppSkill
        },
        {
            path:'/Portfolio',
            name: 'portfolio',
            component: AppPortfolio
        },
        {
            path:'/Contatti',
            name:'contatti',
            component: AppContatti
        }

    ]

});
export { router };
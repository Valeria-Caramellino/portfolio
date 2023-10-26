import { createRouter , createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import AppSkill from './pages/AppSkill.vue';
import AppPortfolio from './pages/AppPortfolio.vue';
import AppContatti from './pages/AppContatti.vue';
import SingleProject from './pages/SingleProject.vue';
import ErrorPage from './pages/ErrorPage.vue';

const router = createRouter({

    history: createWebHistory(),
    routes:[
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
        },
        {
            path:'/Portfolio/:id',
            name :'single',
            component: SingleProject
        },
        {
            path:'/error/:code',
            name:'error',
            component: ErrorPage
        }

    ]

});
export { router };
<script>
import Navbar from '../components/Navbar.vue';
import { store } from '../store';

export default {
    name: "SingleProject",
    components: {
        Navbar
    },
    data() {
        return {
            store,
            project: null
        };
    },
    created() {
        const projectId = this.$route.params.id;
        const projectList = this.store.group_projects;

        this.project = projectList.find(project => project.id == projectId);
        //console.log(this.project);

        if (!this.project) {
            // Progetto non trovato, reindirizza a una pagina di errore
            this.$router.push({ name: 'error', params: { code: 404 } });
            return;
        }
    },

};

</script>
<template>
    <body>
        <header>
            <Navbar />
        </header>
        <main>

            <div v-if="project">
                <div class="container-fluid">

                    <div class="row align-items-center justify-content-around">
                        <div class="d-none d-lg-block">
                            <router-link to="/Portfolio">
                                <img src="/icon/sinistra.png" alt="back">
                            </router-link>
                           
                        </div>

                        <div class="col-12 col-lg-6 scale-in-center">

                            <video controls  :src="project.video"></video>

                        </div>

                        <div class="col-12 col-lg-4 text-focus-in pb-2">

                            <h2>{{ project.title }}</h2>
                            <p>{{ project.text }}</p>
                            <h2>Tecnologie utilizzate:</h2>
                            <p>{{ project.tecnology }}</p>
                            <a :href="project.github" target="_blank" class="mx-1"><i class="fa-brands fa-github"></i></a>
                        </div>

                    </div>
                </div>
            </div>
            <div v-else>
                Progetto non trovato
            </div>

        </main>
    </body>
</template>
<style lang="scss" scoped>
@use'../style/variable.scss' as*;

body {
    background-image: url(../../public/img_bg/sun.svg);
    background-size: 130% 120%;
    height: 100%;
    img{
        position: absolute;
        top: 100px;
        left: 50px;
        height: 50px;
    }
    .row>.col-lg-6.scale-in-center {
        padding: 0 !important;
        animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

        @keyframes scale-in-center {
            0% {
                transform: scale(0);
                opacity: 1;
            }

            25% {
                transform: scale(0.25);
                opacity: 1;
            }

            50% {
                transform: scale(0.5);
                opacity: 1;
            }

            75% {
                transform: scale(0.75);
                opacity: 1;
            }

            90% {
                transform: scale(0.90);
                opacity: 1;
            }

            100% {
                transform: scale(1);
                opacity: 1;
            }
        }
    }

    .row {
        height: 100vh;
        .col-lg-4.text-focus-in {
            text-align: center;
            color: $bianco;
            animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
            background-color: $bg;

            @keyframes text-focus-in {
                0% {
                    filter: blur(12px);
                    opacity: 0;
                }

                100% {
                    filter: blur(0px);
                    opacity: 1;
                }
            }

            p {
                text-align: justify;
            }

            a {
                color: $bianco;

                i {
                    font-size: 2rem;
                    background-color: $verde;
                    padding: 0.25rem;
                }
            }
        }

        video {
            width: 100%;
            min-height: 200px;
            // max-height:300px ;
            object-fit: contain;
        }
    }

    @media (max-width: 425px) {
      
        p {
            font-size: 14px;
        }
    }
    @media (min-width: 426px) {
        video{
            width: 100%;
            height: 350px;
        }
    }
    @media (min-width: 1024px) {
        .row {
            
            height: $h_row;
            video{
                width: 100%;
                height: 100%;
            }
        }
    
    }
}
</style>
<script>

export default {
    name: 'Navbar',

    data() {
        return {
            // è impostato con il nome della rotta di dove siamo
            currentPage: this.$route.name,
            navLink: [
                {
                    label: "Home",
                    name: "home"
                },
                {
                    label: "Chi Sono",
                    name: "about"

                },
                {
                    label: "Skills",
                    name: "skills"
                },
                {
                    label: "Portfolio",
                    name: "portfolio"
                },
                {
                    label: "Contatti",
                    name: "contatti"
                },
            ]
        }
    },
    methods: {
        // funzione che mi serve per cambiare colore
        setCurrentPage(pageName) {
            this.currentPage = pageName;
        },
    },

}

</script>

<template>
    <div class="container-fluid ">
        <div class="row my_bg">

            <nav class="d-flex justify-content-around align-items-center col-12 position-relative">
                
                <!-- logo -->
                <div class="col-5 d-flex justify-content-start align-items-center">

                    <img src="../assets/log/logo_bianco.png" alt="logo">


                </div>

                <!-- bottone collapse -->
                <div class="col-5 d-lg-none d-flex justify-content-end align-items-center">
                    
                    <button type="button" data-bs-toggle="collapse" data-bs-target="#collapseRow" aria-expanded="false" aria-controls="collapseRow">

                        <i class="fa-solid fa-bars p-1"></i>

                    </button>

                </div>

                <!-- link rotte -->
                <div class="d-none col-lg-6 d-lg-flex justify-content-around align-items-center ">

                    <template v-for="item in navLink">
                        
                        <router-link :to="{ name: item.name }" :class="['nav-link', { 'selected': item.name === currentPage }]" @click="setCurrentPage(item.name)">
                            {{ item.label }}
                        </router-link>

                    </template>

                </div>

            </nav>
            
            <div class="collapse" id="collapseRow">
                <div class="row">

                    <div class="card card-body">
                        <ul>

                            <template v-for="item in navLink">

                                <li>
                                    <router-link :to="{ name: item.name }">
                                        {{ item.label }}
                                    </router-link>

                                </li>

                            </template>

                        </ul>
                    </div>

                </div>
            </div>


        </div>
    </div>
</template>
<style lang="scss" scoped>
@use'../style/variable.scss' as*;

.my_bg{
    background-color: $bg;
}
.collapse {
    margin-top: -0.55rem;
    z-index: 4;
    position: absolute;
    top: 96px;
    .card {
        background-image: url(../assets/img_bg/sun.svg) !important;
        background-repeat: no-repeat;
        background-size: cover;
        border: 5px solid $bianco;
        text-align: center; 
    }

    ul {
        text-align: center;
        padding-left: 0;

        li {
            list-style: none;

            a {
                color: $bianco;
                text-decoration: none;
            }
        }
    }
}

nav {
    height: $h_nav;

    button {
        background-color: transparent;
        border: none;

        i {
            color: $bianco;
            font-size: 2.5rem;
        }
    }

    .col-5 {
        height: $h_col_nav;

        img {

            width: $h_img_nav;
        }

    }

    a {
        text-decoration: none;
        color: $bianco;

        &:hover {
            color: $bianco;
        }
    }

    .nav-link {
        text-decoration: none;
        padding: 10px 20px;
        transition: background-color 0.3s, color 0.3s;
    }

    .nav-link.selected {
        background-color: $bianco;
        color: $verde;
        font-weight: 600;
        border-radius: 20px;
    }

}
</style>
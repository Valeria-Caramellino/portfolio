<script>

export default {
    name: 'Navbar',

    data() {
        return {
            // è impostato con il nome della rotta di dove siamo
            currentPage: this.$route.name,
            isOffcanvasOpen: false,
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
        // funzione che mi serve per cambiare colore in base al nome 
        setCurrentPage(pageName) {
            this.currentPage = pageName;
        },
        toggleOffcanvas() {
          this.isOffcanvasOpen = !this.isOffcanvasOpen;
        },
        closeOffcanvas() {
          this.isOffcanvasOpen = false;
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
                    
                    <button class="btn btn-success" type="button" @click="toggleOffcanvas">
                        <i class="fa-solid fa-bars p-1"></i>
                    </button>
            
                </div>

                <!-- link rotte -->
                <div class="d-none col-lg-6 d-lg-flex justify-content-around align-items-center ">

                    <template v-for="item in navLink">

                        <router-link :to="{ name: item.name }"
                            :class="['nav-link', { 'selected': item.name === currentPage }]"
                            @click="setCurrentPage(item.name)">
                            {{ item.label }}
                        </router-link>

                    </template>

                </div>

            </nav>

            <!-- offcanvas -->
            <div class="offcanvas offcanvas-end offcanvas-custom" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" :class="{ 'show': isOffcanvasOpen }">
                        
                <div class="offcanvas-header d-flex justify-content-end">
                    <button type="button" class="btn-close" @click="closeOffcanvas" aria-label="Close"></button>
                </div>
                        
                <div class="offcanvas-body">
                                    
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
</template>
<style lang="scss" scoped>
@use'../style/variable.scss' as*;
.offcanvas-custom {
    position: fixed;
    top: 0;
    width: 100%;
    right: -100%;
    height: 100%;
    z-index: 1050;
    transition: right 0.5s ease-in-out;
   
    /* Altre personalizzazioni qui */
    background-image: url(../assets/img_bg/sun.svg);
    background-repeat: no-repeat;
    background-size: cover;

    li {
        list-style: none;

        a {
            text-decoration: none;
            color: $bianco;
            font-size: larger;
            font-weight: 600;
        }
    }

}

.offcanvas-custom.show {
    right: 0;
}
.my_bg {
    background-color: $bg;
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
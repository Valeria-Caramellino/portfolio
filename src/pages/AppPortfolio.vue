<script>
import Navbar from '../components/Navbar.vue';
import TitleBand from '../components/TitleBand.vue';
import { store } from '../store';

export default{
    name:"AppPortfolio",
    components:{
        Navbar,
        TitleBand,
    },
    data() {
        return {
            index: 0,
            store
        }
    },
    
}

</script>
<template>

    <body>
        <header>
            <Navbar />
        </header>
        <main>
            <div class="container-fluid">

                <TitleBand :text="'PORTFOLIO'"/>

                <div class="row justify-content-around flex-wrap align-items-center mt-2">

                        
                    
                    <div class="my_container" v-for=" (item, key) in store.group_projects">
                        
                        <router-link :to="'/Portfolio/' + (key+1)">
                            
                            <img :src="item.img" alt="img_project" class="scale-in-hor-left">
    
                        </router-link>

                    </div>

                </div>

            </div>

        </main>

    </body>

</template>

<style lang="scss" scoped>
@use'../style/variable.scss' as*;

body{
    background-image: url(../../public/img_bg/sun.svg);
    background-size: 130% 120% ;
    min-height: $vh_100;

    .row{
        height: 350px;
        overflow-y: scroll;
        background-color: $bg;
    }
    .scale-in-hor-left {
	animation: scale-in-hor-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    
    @keyframes scale-in-hor-left {
    0% {
        transform: scaleX(0);
        transform-origin: 0% 0%;
        opacity: 1;
    }
    100% {
        transform: scaleX(1);
        transform-origin: 0% 0%;
        opacity: 1;
    }
    }
    img {
        width: 100%;
        height: 100%;
        cursor: pointer;
        object-fit:cover;
    }
    @media (max-width: 426px) {
        .row{
            height: 70vh;
        }
       .my_container{
           width: 90%;
           margin: 0.5rem;
           height: 150px;
       }  
    }
    @media (min-width: 427px) {
        .my_container{
           width: calc( 100% / 2 - 1rem );
           margin: 0.5rem;
           height: 150px;
       }
    }
    @media (min-width: 769px) {
        .my_container{
           width: calc( 100% / 3 - 1rem );
           margin: 0.5rem;
           height: 175px;
       }
    }
    @media (min-width: 1025px) {
        .row{
            height: 400px;
        }
        .my_container{
           width: calc( 100% / 4 - 1rem );
           margin: 0.5rem;
           height: 200px;
       }
    }
}

/* Chrome, Edge and Safari */
*::-webkit-scrollbar {
  height: 10px;
  width: 10px;
}
*::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: $scroll_sotto;
}

*::-webkit-scrollbar-track:hover {
  background-color: $scroll_sotto;
}

*::-webkit-scrollbar-track:active {
  background-color: $scroll_sotto;
}

*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: $scroll_sopra;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: $scroll_sopra;
}

*::-webkit-scrollbar-thumb:active {
  background-color: $scroll_sopra;
}

</style>
<script>
import Navbar from '../components/Navbar.vue';
import TitleBand from '../components/TitleBand.vue';
import SectionImg from '../components/SectionImg.vue';
import Contact from '../components/Contact.vue';

export default{
    name:"AppContatti",
    components:{
        Navbar,
        TitleBand,
        SectionImg,
        Contact
      
    },
    data(){
        return{

        }
    }
}

</script>
<template>
    <body>
        <header>
            <Navbar/>
        </header>
        <main>
            <div class="container-fluid">

                <TitleBand :text="'CONTATTI'"/>

                <div class="row  justify-content-around  flex-wrap align-items-center">
                    
                    <Contact/>

                    <SectionImg :path='"/img_face/meee.png"'/>
     

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
    min-height: 100vh;
  .row{
        min-height: $h_100;
    }
    @media ( min-width:1247px ) {
    .row{
        min-height: $h_row_band;
    }
    }
}

</style>
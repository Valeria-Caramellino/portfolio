<script>
import Navbar from '../components/Navbar.vue';
import TitleBand from '../components/TitleBand.vue';
import SectionImg from '../components/SectionImg.vue';
import SectionText from '../components/SectionText.vue';

export default{
    name:"AppAbout",
    components:{
        Navbar,
        TitleBand,
        SectionImg,
        SectionText
      
    },
    data(){
        return{
            text:"Ho trascorso molti anni lavorando nel settore della ristorazione, acquisendo abilità quali la capacità organizzative, contatto con i clienti, la pazienza, la gestione dello stress e la puntualità. Dopo diversi anni di esperienza e con una raggiunta stabilità, ho deciso di iniziare un nuovo percorso professionale e mi sono iscritta ad un corso intensivo di programmazione presso Boolean, acquisendo competenze pratiche e teoriche in vari linguaggi e framework. Durante il corso, ho sviluppato progetti ispirati a famose web app e ho lavorato sia in autonomia che in team. Ho anche consolidato soft skills che mi sono state di aiuto come precisione, capacità relazionali, problem-solving e serietà. Sono determinata, appassionata e pronta a mettere in pratica queste competenze."
        }
    }
}

</script>
<template>

    <body>
        <header>
            <Navbar />
        </header>
        <main>
            <div class="container-fluid">
                
                <TitleBand :text="'CHI SONO'"/>

                <div class="row  justify-content-around  flex-wrap align-items-center">

                     <SectionImg :path='"src/assets/img_face/bye.png"'/>
     
                     <SectionText  :text="text"  />
     
                </div>

            </div>
           
        </main>
    </body>

</template>
<style lang="scss" scoped>

@use'../style/variable.scss' as*;


body{
    background-image: url(../assets/img_bg/sun.svg);
    background-size: 130% 120% ;
    
    .row{
        height: $h_100;
    }
    @media ( min-width:1247px ) {
    .row{
        height: $h_row_band;
    }
    }
}


</style>
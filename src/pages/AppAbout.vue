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
            text:"Ciao, mi chiamo Valeria Caramellino e sono un'aspirante Web Developer. Ho trascorso molti anni lavorando nel settore della ristorazione, facendo mie diverse abilità quali la capacità organizzativa, il contatto con la clientela, la pazienza, la gestione dello stress e la puntualità. Dopo diversi anni di esperienza e con una raggiunta stabilità, ho deciso di iniziare un nuovo percorso professionale e mi sono iscritta ad un corso intensivo di programmazione organizzato da Boolean. Durante il corso ho acquisito competenze pratiche e teoriche in vari linguaggi e framework e ho sviluppato numerosi progetti, ispirati a famose web app, lavorando sia in autonomia che in team. Ho anche consolidato soft skills che mi sono state d'aiuto come la precisione, le capacità relazionali, il problem-solving e la serietà. Sono determinata, appassionata e pronta a mettermi in gioco nell'avvincente mondo della programmazione."
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

                     <SectionImg :path='"/img_face/bye.png"'/>
     
                     <SectionText  :text="text"  />
     
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
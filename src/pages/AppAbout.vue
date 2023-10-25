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
            text:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, quod quidem accusamus adipisci consequatur error, magnam inventore fugiat eum voluptas quibusdam perferendis. Quia fugit odio quidem repellendus obcaecati iusto harum! adipisicing elit. Molestiae, quod quidem accusamus adipisci consequatur error, magnam inventore fugiat eum voluptas quibusdam perferendis. Quia fugit odio quidem repellendus obcaecati iusto harum!Molestiae, quod quidem accusamus adipisci consequatur error, magnam inventore fugiat eum voluptas quibusdam perferendis. Quia fugit odio quidem repellendus obcaecati iusto harum!",
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
     <!-- align-items-strech -->
                     <SectionImg :path='"src/assets/img_face/me_avatar_.png"'/>
     
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
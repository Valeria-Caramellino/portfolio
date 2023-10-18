<script>
import SectionImg from '../components/SectionImg.vue';
import TitleBand from '../components/TitleBand.vue';
import SectionText from '../components/SectionText.vue';
export default{
    name:"ContainerAbout",
    components:{
        SectionImg,
        TitleBand,
        SectionText
    },
    data(){
        return{
            text:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, quod quidem accusamus adipisci consequatur error, magnam inventore fugiat eum voluptas quibusdam perferendis. Quia fugit odio quidem repellendus obcaecati iusto harum!",
        }
    }
}

</script>
<template>

    <div class="container-fluid">
        <div class="row">
            

            <TitleBand :text="'CHI SONO'" :colore="'black'"/>

            
            <div class="col-12 d-flex justify-content-around align-items-center">
                <SectionImg :path='"src/assets/img_face/me_avatar.png"' />
                
               <SectionText  :text="text" />

            </div>
        </div>
    </div>

</template>
<style lang="scss" scoped>
@use'../style/variable.scss' as*;
.row {
    height: $h_row;

    .col-12.d-flex.justify-content-around.align-items-center {
        height: $col ;
       
    }
}
</style>
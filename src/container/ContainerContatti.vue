<script>
import SectionImg from '../components/SectionImg.vue';
import TitleBand from '../components/TitleBand.vue';
import Contact from '../components/Contact.vue';
export default{
    name:"ContainerContatti",
    components:{
        SectionImg,
        TitleBand,
        Contact
    }
}

</script>
<template>

<div class="container-fluid">
    <div class="row">

        <TitleBand :text="'CONTATTI'" :colore="'#F5F5F5'" />

        <div class="col-12 d-flex justify-content-around align-items-center">

            <Contact/>

            <SectionImg :path='"src/assets/img_face/meee.png"'/>


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
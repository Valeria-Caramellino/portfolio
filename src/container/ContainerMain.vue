<script>
import SectionImg from '../components/SectionImg.vue';
import SectionName from '../components/SectionName.vue';
export default {
    name: "ContainerMain",
    components: {
        SectionImg,
        SectionName
    }
}

</script>
<!-- col-12 d-flex flex-column align-content-center col-lg-12 d-lg-flex justify-content-around align-items-center -->


<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 d-flex flex-column flex-md-row align-content-center col-md-12 justify-content-around align-items-center">

                <SectionName :name="'Valeria'" :surname="'Caramellino'"
                    :text="'Front-end Developer / Back-end Developer'" />

                <SectionImg :path='"src/assets/img_face/me.jpg"' />

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use'../style/variable.scss' as*;

.row {
    height: $h_row;

    .col-12 {
        height: $h_100 ;
    }
    @media (max-width: 450px) {
        background-image: url(../assets/img_bg/macchia.png);
        background-repeat: no-repeat;
        background-position: 45% 105% ;
        background-size: 80%;
    }
}
</style>
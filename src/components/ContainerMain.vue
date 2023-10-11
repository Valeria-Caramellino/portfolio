<script>
import SectionImg from './SectionImg.vue';
import SectionName from './SectionName.vue';
export default {
    name: "ContainerMain",
    components: {
        SectionImg,
        SectionName
    }
}

</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 d-flex justify-content-around align-items-center">

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
}
</style>
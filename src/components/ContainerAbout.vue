<script>
import SectionImg from './SectionImg.vue';
export default{
    name:"ContainerAbout",
    components:{
        SectionImg
    }
}

</script>
<template>

    <div class="container-fluid">
        <div class="row">
            <div class="col-12 d-flex justify-content-around align-items-center">

                <SectionImg :path='"src/assets/img_face/me_avatar.png"' />
                <div class="col-5">
                    <h2 class="text-light text-center">Chi Sono</h2>
                    <h4 class="text-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, quod quidem accusamus adipisci consequatur error, magnam inventore fugiat eum voluptas quibusdam perferendis. Quia fugit odio quidem repellendus obcaecati iusto harum!</h4>
                </div>
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
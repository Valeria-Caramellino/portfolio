<script>

export default {
    name: "Tech",
    data() {
        return {
            Title: "COMPETENZE TECH",
            List: [
                {

                    img: "src/assets/icon/html.svg",
                },
                {

                    img: "src/assets/icon/css.svg",
                },
                {

                    img: "src/assets/icon/javascript.svg",
                },
                {

                    img: "src/assets/icon/vue.svg",
                },
                {

                    img: "src/assets/icon/vite.png",
                },
                {

                    img: "src/assets/icon/git.svg",
                },
                {

                    img: "src/assets/icon/vsc.svg",
                },
                {

                    img: "src/assets/icon/bootstrap.svg",
                },
                {

                    img: "src/assets/icon/postman.png",
                },
                {

                    img: "src/assets/icon/mamp.png",
                },
                {

                    img: "src/assets/icon/npm.svg",
                },
                {

                    img: "src/assets/icon/laravel.png",
                },
                {

                    img: "src/assets/icon/sass.svg",
                },
                {

                    img: "src/assets/icon/php.png",
                },
            ]
        }
    }
}

</script>
<template>
    <div class="col-5 d-flex flex-column align-items-center">

        <h5 class="text-center col-10">{{ Title }}</h5>

        <div class="col-10 d-flex justify-content-around align-items-center flex-wrap">
            <div class="col-2 m-2" v-for="item in List">

                <img :src="item.img" alt="img">
            </div>

        </div>


    </div>
</template>
<style lang="scss" scoped>
@use '../style/variable.scss' as*;

h5 {
    // width: 500px;
    padding: 1rem;
    border: 0.5rem solid $verde;
    color: $verde;
    font-weight: 600;
}

img {
    width: 5rem;
}
.col-5{
   
    height: calc(100% - 50px);
}
</style>
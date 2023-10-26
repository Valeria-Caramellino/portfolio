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
    <div class="col-12 col-lg-5 d-flex flex-column align-items-center mb-2">

        <h5 class="text-center col-10 col-lg-11">{{ Title }}</h5>

        <div class="col-10 d-flex justify-content-around align-items-center flex-wrap">
            <div class="" v-for="item in List">

                <img :src="item.img" alt="img" class="scale-in-hor-left">
            </div>

        </div>


    </div>
</template>
<style lang="scss" scoped>
@use '../style/variable.scss' as*;
.col-10.d-flex{
    background-color: $bg;
}
.scale-in-hor-left {
	animation: scale-in-hor-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@keyframes scale-in-hor-left {
  0% {
    transform: scaleX(0);
    transform-origin: 0% 0%;
    opacity: 1;
  }
  100% {
    transform: scaleX(1);
    transform-origin: 0% 0%;
    opacity: 1;
  }
}

h5 {
    // width: 500px;
    padding: 0.5rem;
    border: 0.5rem solid $bianco;
    border-radius: 20px;
    color: $bianco;
    font-weight: 600;
}

img {
    width: 3rem;
    margin: 0.25rem;
}
@media (min-width: 426px) {
    img{
        width: 4rem;
        margin: 0.20rem;
    }
}

@media (min-width: 1024px) {
    .col-lg-5{
        height: 346px;
    }
}

@media(min-width: 1440px) {
    img{
        width: 5rem;
        margin: 0.25rem;
    }
    h5{
        font-size: 2rem;
    }
}
</style>
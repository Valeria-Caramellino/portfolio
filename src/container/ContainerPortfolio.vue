<script>
import SectionImg from '../components/SectionImg.vue';
import TitleBand from '../components/TitleBand.vue';
import SectionText from '../components/SectionText.vue';

export default {
    name: "ContainerPortfolio",
    components: {
        SectionImg,
        TitleBand,
        SectionText
    },
    data() {
        return {
            index: 0,
            group_projects: [
                {
                    github: "https://github.com/Valeria-Caramellino",
                    img: "src/assets/img_progetti/whats.png",
                    title: "Descrizione",
                    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, quod quidem accusamus adipisci consequatur error, magnam inventore fugiat eum voluptas quibusdam perferendis. Quia fugit odio quidem repellendus obcaecati iusto harum!",
                },
                {
                    github: "https://github.com/Valeria-Caramellino/htmlcss-discord",
                    img: "src/assets/img_progetti/Discord.png",
                    title: "Descrizione",
                    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, quod quidem accusamus adipisci consequatur error, magnam inventore fugiat eum voluptas quibusdam perferendis. Quia fugit odio quidem repellendus obcaecati iusto harum  ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, quod quidem accusamus adipisci consequatur error, magnam inventore fugiat eum voluptas quibusdam perferendis. Quia fugit odio quidem repellendus obcaecati iusto harum!",
                }
            ]
        }
    },
    methods:{
        changeNext() {
            if (this.index === 1) {
                this.index = 0
            } else {
                this.index++
            }
        },
        changePrev(){
            if (this.index === 0) {
                this.index = 1
            } else {
                this.index--
            }
        }
    }
}

</script>

<template>
    <div class="container-fluid">
        <div class="row">


            <TitleBand :text="'PORTFOLIO'" :colore="'black'" />


            <div class="col-12 d-flex justify-content-around align-items-center position-relative">

                <a :href="group_projects[index].github" target="_blank" class="position-absolute top-50 start-50 translate-middle">
                    <i class="fa-brands fa-github"></i>
                </a>

                <img src="../assets/img_freccia/sinistra.png" alt="sinistra" class="sinistra" @click="changePrev()">
                <img src="../assets/img_freccia/destra.png" alt="destra" class="destra" @click="changeNext()">
               
                <SectionText :text="group_projects[index].text" :title="group_projects[index].title" />

                <SectionImg :path="group_projects[index].img" class="my" />

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
        img{
            cursor: pointer;
        }
        a {
            color: $bianco;

            i {
                font-size: 3rem;
                background-color: $verde;
                padding: 0.25rem;
            }
        }
    }

    .sinistra {
        position: absolute;
        top: 80%;
        left: 20%;
        color: $nero;
    }

    .destra {
        position: absolute;
        color: $bianco;
        top: 80%;
        right: 20%;
    }

    .my {
        &:hover {
            position: absolute;

            top: 20%;
            left: 40%;
            transform: scale(2);
        }
    }

}
</style>
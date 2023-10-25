<script>

export default{
    name:"List",
    data(){
        return{
            Title:"COMPETENZE PERSONALI",
            List:[
                {
                    text:"Capacità Organizzative"
                },
                {
                    text:"Precisione"
                },
                {
                    text:"Contatto con Clientela"
                },
                {
                    text:"Pazienza"
                },
                {
                    text:"Gestione dello stress"
                },
                {
                    text:"Puntualità"
                },
                {
                    text:"Serietà"
                },
                {
                    text:"Capacità Relazionali"
                },
                {
                    text:"Problem Solving"
                },
            ]
        }
    }
}

</script>
<template>

    <div class="col-12 col-lg-5 d-flex flex-column align-items-center mb-2">

        <h5 class="text-center col-10 col-lg-11">{{ Title }}</h5>

        <div class="col-10 bg text-center">

            <ul>
                <li v-for="item in List">{{ item.text }}</li>
            </ul>
        </div>

    </div>


</template>
<style lang="scss" scoped>
@use '../style/variable.scss' as*;
.bg{
    background-color: rgba($color: #000000, $alpha: 0.6);
}
h5{
    // width: 500px;
    padding: 0.5rem;
    border: 0.5rem solid $bianco;
    border-radius: 20px;
    color: $bianco;
    font-weight: 600;
}
ul{
    padding-inline-start: 0px;
    li{
        list-style-position: inside;
        color: $bianco;
    }
}
@media (min-width: 1024px) {
    .col-lg-5{
        height: 346px;
    }
    li{
        line-height: 1.75rem;
    }
}
@media(min-width: 1440px) {
   
    h5{
        font-size: 2rem;
    }
    li{
        font-size: 20px;
    }
}
</style>










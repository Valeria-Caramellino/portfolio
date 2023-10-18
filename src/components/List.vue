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

    <div class="col-5 d-flex flex-column align-items-center">

        <h5 class="text-center col-10">{{ Title }}</h5>

        <ul>
            <li v-for="item in List">{{ item.text }}</li>
        </ul>

    </div>


</template>
<style lang="scss" scoped>
@use '../style/variable.scss' as*;
.col-5{
   
    height: calc(100% - 50px);
}
h5{
    // width: 500px;
    padding: 1rem;
    border: 0.5rem solid $bianco;
    color: $bianco;
    font-weight: 600;
}
ul{
    padding-inline-start: 0px;
    li{
        list-style-position: inside;
        line-height: 2rem;
        color: $bianco;
    }
}

</style>










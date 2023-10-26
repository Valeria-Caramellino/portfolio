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

        <div class="col-10  my_bg">

            <ul>
                <li v-for="item in List" class="scale-in-hor-left ">{{ item.text }}</li>
            </ul>
        </div>

    </div>


</template>
<style lang="scss" scoped>
@use '../style/variable.scss' as*;
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
.my_bg{
    background-color: $bg;
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
    margin-left: 2rem;
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










<script>
import Navbar from '../components/Navbar.vue';
export default{
    name:"ErrorPage",
    components:{
        Navbar
    }
}
</script>
<template>
    <body>
        
        <header>
            <Navbar/>
        </header>
        <main>
            <div class="container-fluid">
                <div class="row justify-content-center align-items-center flex-wrap">
                    <div class="col-12 col-sm-3 scale-in-center">
                        
                    </div>
                    <div class="col-12 col-sm-5 tracking-in-expand">
                        <h1>OPS!?!?!</h1>
                        <h2>Errore nel caricamento della pagina</h2>
                        <!-- <p>Error code: {{ $route.params.code }}</p> -->
                    </div>
                </div>
            </div>
            
    
        </main>
    </body>

</template>
<style lang="scss" scoped>
@use'../style/variable.scss' as*;
body{
    background-image: url(../public/img_bg/sun.svg);
    background-size: 130% 120% ;
    .row{
        height: $h_row;
        
        .col-sm-3{
            height: 300px;
            background-image: url(../public/img_face/error_avatar.png);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
           
        }
        .col-sm-5{
            text-align: center;
            color: $bianco;
            background-color: $bg;
        }
    }
    
}
.scale-in-center {
  animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@keyframes scale-in-center {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  25%{
    transform: scale(0.25);
    opacity: 1;
  }
  50%{
    transform: scale(0.5);
    opacity: 1;
  }
  75%{
    transform: scale(0.75);
    opacity: 1;
  }
  90%{
    transform: scale(0.90);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}


.tracking-in-expand {
    animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}

@keyframes tracking-in-expand {
    0% {
        letter-spacing: -0.5em;
        opacity: 0;
    }

    40% {
        opacity: 0.6;
    }

    100% {
        opacity: 1;
    }
}
</style>
<script>

import Navbar from '../components/Navbar.vue';
import SectionName from '../components/SectionName.vue';
import SectionImg from '../components/SectionImg.vue';
export default{
  name:'AppHome',
  components:{
    Navbar,
    SectionName,
    SectionImg
  },
  data(){
    return{
      
    }
  }
}

</script>

<template>
  <body >
    <header>
      <Navbar/>
    </header>
    <main >
      <div class="container-fluid">
        
        <div class="row justify-content-around  flex-wrap">
<!-- align-items-strech -->
          <SectionName :name="'Valeria'" :surname="'Caramellino'" :text="'Front-end Developer / Back-end Developer'"/>
<!-- 
          <SectionImg :path='"../assets/img_face/meee.png"' /> -->
          <div class="col-12 col-lg-5 d-flex align-items-center justify-content-center scale-in-center">
            <img src="../assets/img_face/meee.png" alt="foto">
          </div>

        </div>
      
      </div> 
      
     
    </main>
  </body>

  
</template>

<style lang="scss" scoped>

@use'../style/variable.scss' as*;



body{
  background-image: url(../assets/img_bg/sun.svg);
  background-size: 130% 120% ;

}
@media (min-width: 1024px) {
  .row{
    height: $h_row;
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

img{
  width: 400px;
}
</style>

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

          <SectionImg :path='"../assets/img_face/meee.png"' />

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
</style>

<script>
import Navbar from '../components/Navbar.vue';
import ContainerContatti from '../container/ContainerContatti.vue';

export default{
    name:"AppContatti",
    components:{
        Navbar,
        ContainerContatti
    },
    data(){
        return{

        }
    }
}

</script>
<template>
    <body>
        <header>
            <Navbar :img='"src/assets/log/logo_verde.png"'/>
        </header>
        <main>
            <ContainerContatti/>
        </main>
    </body>
</template>

<style lang="scss" scoped>
@use'../style/variable.scss' as*;
body{
  height: 100vh;
  width: 100vw;
  background-image: url(../assets/img_bg/sfondo_bianco.png);
  background-size: 100% 120% ;
}

</style>
<script>
import Navbar from '../components/Navbar.vue';
import ContainerPortfolio from '../container/ContainerPortfolio.vue';
export default{
    name:"AppPortfolio",
    components:{
        Navbar,
        ContainerPortfolio
    }
    
}

</script>
<template>

    <body>
        <header>
            <Navbar :img='"src/assets/log/logo_bianco.png"' />
        </header>
        <main>

            <ContainerPortfolio/>

        </main>

    </body>

</template>

<style lang="scss" scoped>

body{
  height: 100vh;
  width: 100vw;
  background-image: url(../assets/img_bg/sfondo_nero.png);
  background-size: 100% 120% ;
}

</style>
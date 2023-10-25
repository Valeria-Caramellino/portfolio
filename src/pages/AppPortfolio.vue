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
    background-image: url(../assets/img_bg/sun.svg);
  background-size: 130% 120% ;
}

</style>
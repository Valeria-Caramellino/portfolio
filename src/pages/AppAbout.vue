<script>
import Navbar from '../components/Navbar.vue';
import ContainerAbout from '../components/ContainerAbout.vue';
export default{
    name:"AppAbout",
    components:{
        Navbar,
        ContainerAbout
    }
}

</script>
<template>

    <body>
        <header>
            <Navbar :img='"src/assets/log/logo_bianco.png"'/>
        </header>
        <main>
            <ContainerAbout />
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
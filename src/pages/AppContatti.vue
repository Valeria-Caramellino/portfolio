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
    background-image: url(../assets/img_bg/sun.svg);
  background-size: 130% 120% ;
}

</style>
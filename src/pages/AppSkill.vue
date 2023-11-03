<script>
import Navbar from '../components/Navbar.vue';
import TitleBand from '../components/TitleBand.vue';
import Tech from '../components/Tech.vue';
import List from '../components/List.vue';

export default{
    name:"AppSkill",
    components:{
        Navbar,
        TitleBand,
        Tech,
        List
        
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

                <TitleBand :text="'SKILLS'"/>

                <div class="row justify-content-around flex-wrap align-items-center mt-2">

                    <Tech/>
                    <List/>

                </div>

            </div>
           
        </main>

    </body>

</template>

<style lang="scss" scoped>
@use'../style/variable.scss' as*;

body{
    background-image: url(../../public/img_bg/sun.svg);
    background-size: 130% 120% ;
    .row{
        height: $h_100;
    }
    @media ( min-width:1024px ) {
    .row{
        height: calc( $h_row_band - 0.50rem)  ;
    }
    }
}

</style>
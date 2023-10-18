<script>
import TitleBand from '../components/TitleBand.vue';
import List from '../components/List.vue';
import Tech from '../components/Tech.vue';
export default{
    name:"ContainerSkill",
    components:{
        TitleBand,
        List,
        Tech
    }
}

</script>
<template>

<div class="container-fluid">
        <div class="row">
            <TitleBand :text="'SKILLS'" :colore="'#F5F5F5'" />
            
            <div class="col-12 d-flex justify-content-around align-items-stretch">

                <Tech/>
                <List/>

            </div>
        </div>
    </div>
    
</template>
<style lang="scss" scoped>

@use'../style/variable.scss' as*;

.row {
    height: $h_row;

    .col-12.d-flex.justify-content-around.align-items-center {
        height: $col ;
    }
}

</style>
<script>

export default{
    name:"TitleBand",
    props:{
        text:String,
        colore: String
    },
    
    
  }

</script>
<template>
    
    <div class="col-12 d-flex justify-content-center align-items-center" :style="{ backgroundColor: colore }" >

       <div class="col-6 d-flex justify-content-center align-items-center">

        <h1>{{ text }}</h1>

       </div>

    </div>


</template>
<style lang="scss" scoped>
 @use'../style/variable.scss' as*;
.col-12{
    height: $band ;
    .col-6{
        height: 100px;
        border: 0.75rem solid $verde;
        // border-radius: 10px;
        h1{
            color: $verde;
            font-weight: bold;
        }
    }
}

</style>
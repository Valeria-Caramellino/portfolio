<script>

export default{
    name:"TitleBand",
    props:{
        text:String,
    },
    
    
  }

</script>
<template>
    <div class="container-fluid">
        <div class="row justify-content-center align-items-center">
            
            <div class="col-11 col-lg-7 d-flex justify-content-center align-items-center">
        
                <h1>{{ text }}</h1>
        
            </div>
        
        </div>
    </div>


</template>
<style lang="scss" scoped>
 @use'../style/variable.scss' as*;
.row{
    height: $band ;
    .col-lg-7{
        height: 100px;
        border-radius: 20px;
        background-color: $bianco;
        // border-radius: 10px;
        h1{
            color: $verde;
            
            font-weight: bold;
        }
    }

    @media (max-width: 450px) {
        height: $band_mobile;
        .col-11.col-lg-7{
            
            height: 50px;

            h1{
                margin: 0.25px;
            }
        }
    }
}

</style>
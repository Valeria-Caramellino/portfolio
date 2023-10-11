<script>

export default{
    name:'Navbar',
    props:{
        img: String,
    },
    data(){
        return{
            navLink:[
                {
                    label:"Home",
                    name:"home"
                },
                {
                    label:"Chi Sono",
                    name:"about"
                
                },
                {
                    label:"Skills"
                },
                {
                    label:"Portfolio"
                },
                {
                    label:"Contatti"
                },
            ]
        }
    }
}

</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                
                <nav class="d-flex justify-content-around align-items-center">
                    
                    <div class="col-5 d-flex justify-content-center align-items-center">
                        <img :src=" img " alt="logo_verde">
                    </div>
                    <div class="col-5 d-flex justify-content-around align-items-center">
                        
                        <template v-for="item in navLink">
                            <router-link :to="{name:item.name}" >{{ item.label }}</router-link>
                            
                        </template>
                        
                    </div>
                    
                </nav>

            </div>
        </div>
    </div>

</template>
<style lang="scss" scoped>

@use'../style/variable.scss' as*;

nav{
    height: $h_nav;
   
    .col-5{
        height: $h_col_nav;
        
        img{
            width: $h_img_nav;
        }
        a{
            text-decoration: none;
            color: $bianco;
        }
    }
}
</style>
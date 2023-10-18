<script>

export default{
    name:'Navbar',
    props:{
        img: String,
    },
    data(){
        return{
            // è impostato con il nome della rotta di dove siamo
            currentPage: this.$route.name, 
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
                    label:"Skills",
                    name:"skills"
                },
                {
                    label:"Portfolio",
                    name:"portfolio"
                },
                {
                    label:"Contatti",
                    name: "contatti"
                },
            ]
        }
    },
    methods: {
        // funzione che mi serve per cambiare colore
    setCurrentPage(pageName) {
      this.currentPage = pageName;
    },
  },
  
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
                            <router-link :to="{name:item.name}"   :class="['nav-link', { 'selected': item.name === currentPage }]"
                            @click="setCurrentPage(item.name)">{{ item.label }}</router-link>
                            
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
        .nav-link {
        text-decoration: none;
        padding: 10px 20px;
        // border-radius: 10px;
        transition: background-color 0.3s, color 0.3s;
        }

        .nav-link.selected {
        background-color: $bianco;
        color: $verde;
        font-weight: 600;
        }

        // .nav-link:not(.selected):hover {
        // background-color: $bianco; // Sostituisci con il colore desiderato
        // color: $verde; // Sostituisci con il colore desiderato
        // }

    }


}
</style>
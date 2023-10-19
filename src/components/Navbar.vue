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
          
                
                <nav class="d-flex justify-content-around align-items-center col-12">
                    
                    <div class="col-5 d-flex justify-content-start align-items-center">

                        <img :src=" img " alt="logo_verde">
                        
                       
                    </div>

                    <div class="col-5 d-lg-none d-flex justify-content-end align-items-center">
                        <button class=" " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            
                            <i class="fa-solid fa-bars p-1"></i>
   
                        </button>
                    </div>
                    
                    <div class="d-none col-lg-5 d-lg-flex justify-content-around align-items-center ">
                        
                        <template v-for="item in navLink">
                            <router-link :to="{name:item.name}"   :class="['nav-link', { 'selected': item.name === currentPage }]"
                            @click="setCurrentPage(item.name)">{{ item.label }}</router-link>
                            
                        </template>
                        
                    </div>
                    
                </nav>
                <div class="collapse" id="collapseExample">
                    <div class="row">

                        <div class="card card-body">
                            <ul>

                                <template v-for="item in navLink">
                                    
                                    <li>
                                        <router-link :to="{name:item.name}">
                                            {{ item.label }}
                                        </router-link>

                                    </li>
                                
                                </template>
                            </ul>
                        </div>
                    </div>
                </div>

      
        </div>
    </div>

</template>
<style lang="scss" scoped>

@use'../style/variable.scss' as*;
.collapse{
    margin-top: -0.55rem;
    z-index: 3;
    position: absolute;
    top: 64px;
    .card{

        background-color: $verde !important;
    }
    ul{
        text-align: center;
        li{
            list-style: none;
            a{
                color: $bianco;
                text-decoration: none;
            }
        }
    }
}
nav{
    height: $h_nav;
    button{
        background-color: $verde;
        border: none;
        i{
            color: $bianco;
            font-size: 1.5rem;
        }
   }
    .col-5{
        height: $h_col_nav;
        
        img{
            
            width: $h_img_nav;
        }
        
    }
    a{
        text-decoration: none;
        color: $bianco;
        &:hover{
            color: $bianco;
        }
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

    @media screen and (max-width: 450px) {
  .col-5 img {
        content: url("../assets/log/logo_bianco.png");
        }
    }


}
</style>
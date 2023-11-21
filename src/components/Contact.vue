<script>

export default{
    name:"Contact",
    data(){
        return{
            email:"valeria.caramellino@gmail.com",
            num_cell:"3454839122",
            github:"https://github.com/Valeria-Caramellino",
            linkedin:"https://www.linkedin.com/in/valeriacaramellino/"
        }
    },
    
}

</script>
<template>

    <div class="col-12 col-lg-5 tracking-in-expand d-flex flex-column justify-content-center align-items-center">

        <h3>Recapiti Personali</h3>

        <h4>E-mail</h4>
        
        <p><a :href="'mailto:' + email">{{ email }}</a></p>

        <h4>Cell</h4>
        <p> <a :href="'tel:+39' + num_cell">{{ num_cell }}</a></p>

        <h3>Recapiti Social</h3>
        <div class="mb-2">

            <a :href="github" target="_blank" class="mx-1"><i class="fa-brands fa-github"></i></a>
            <a class="mx-1" :href="linkedin" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        </div>

    </div>

</template>
<style lang="scss" scoped>
@use'../style/variable.scss' as*;
.tracking-in-expand {
    animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    background-color: $bg;
    h3{
        padding: 0.5rem;
        border-bottom: 0.5rem solid $bianco;
        border-radius: 20px;
        color: $bianco;
        font-weight: 600;
    }
    h4,p{
        color: $bianco;
    }
    a{
        color: $bianco;
        text-decoration: none;
        
        i{
            font-size: 2rem;
            background-color: $verde;
            padding: 0.25rem;
        }
    }
}
@keyframes tracking-in-expand {
    0% {
        letter-spacing: -0.5em;
        opacity: 0;
    }

    40% {
        opacity: 0.6;
    }

    100% {
        opacity: 1;
    }
}
</style>
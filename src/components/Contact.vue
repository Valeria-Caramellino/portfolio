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

    <div class="col-5 text-center">

        <h2>RECAPITI PERSONALI</h2>

        <h4>E-mail</h4>
        <p>{{ email }}</p>

        <h4>Cell</h4>
        <p>{{ num_cell }}</p>

        <h2>RECAPITI SOCIAL</h2>
        <a :href="github" target="_blank" class="mx-1"><i class="fa-brands fa-github"></i></a>
        <a class="mx-1" :href="linkedin" target="_blank"><i class="fa-brands fa-linkedin"></i></a>

    </div>

</template>
<style lang="scss" scoped>
@use'../style/variable.scss' as*;
h2{
    font-weight: 600;
}
a{
    color: $bianco;
    
    i{
        font-size: 2rem;
        background-color: $verde;
        padding: 0.25rem;
    }
}
</style>
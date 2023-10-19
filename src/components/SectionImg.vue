<script>

export default{
    name:"SectionImg",
    props:{
        path: String,
    }
}

</script>
<template>

    <div class=" col-11 col-lg-5">
        <img :src=" path " alt="foto">
    </div>

</template>

<style lang="scss" scoped>
.col-lg-5{
    max-width: 40vw;
    max-height: 60vh;
    img{
        max-width: 70%;
        max-height: 80%;
    }
    @media (max-width:450px) {
        max-width: 50vw;
        max-height: 60vh;
        img{
            
            max-width: 100%;
            max-height: 100%;
        }
    }
}

</style>
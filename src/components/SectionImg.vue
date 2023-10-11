<script>

export default{
    name:"SectionImg",
    props:{
        path: String,
    }
}

</script>
<template>

    <div class="col-5">
        <img :src=" path " alt="foto">
    </div>

</template>

<style lang="scss" scoped>
.col-5{
    max-width: 40vw;
    max-height: 60vh;
    img{
        max-width: 70%;
        max-height: 80%;
    }
}

</style>
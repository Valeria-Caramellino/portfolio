<script>

export default {
    name: "SectionName",
    props: {
        name: String,
        surname: String,
        text: String
    }
}

</script>
<template>
    <div class="col-12 col-lg-5 d-flex flex-column align-items-center justify-content-center">
        <h1>{{ name }}</h1>
        <h1>{{ surname }}</h1>
        <h4>{{ text }}</h4>
    </div>
</template>

<style lang="scss" scoped>
@use'../style/variable.scss' as*;

.col-lg-5 {
    @media (max-width: 450px) {
        max-width: 90vw;
        max-height: 40vh;
        h1{
            font-size: 2rem;
            font-weight: 600;
        }
        h4{
            font-size: 1rem;
            text-align: center;
        }
    }
    max-width: 40vw;
    max-height: 60vh;
    
    h1 {
        color: $verde;
        font-weight: bold;
        line-height: 3rem;
    }
    
    h4 {
        text-align: center;
        text-decoration: underline 2px $verde;
    }
    
}
</style>
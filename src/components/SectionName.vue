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
    <div class="col-12 col-lg-5 tracking-in-expand d-flex flex-column justify-content-center align-items-center">
        <h1>{{ name }}</h1>
        <h1>{{ surname }}</h1>
        <h4>{{ text }}</h4>
    </div>
</template>

<style lang="scss" scoped>
@use'../style/variable.scss' as*;

.tracking-in-expand {
    animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;

    h1{
        color: $bianco;
        font-weight: bold;
        margin-bottom: 2rem;
        font-size: 4rem;
    }
    
    h4 {
        text-decoration: underline 2px $bianco;
        text-align: center;
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
@media(max-width: 768px){
  .tracking-in-expand{
  margin: 2rem 0 2rem 0;

    h1{
        font-size: 3rem;
        margin-bottom: 1rem;
    }
  }
}


</style>
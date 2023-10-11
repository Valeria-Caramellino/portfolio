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
    <div class="col-5 d-flex flex-column align-items-center">
        <h1>{{ name }}</h1>
        <h1>{{ surname }}</h1>
        <h4>{{ text }}</h4>
    </div>
</template>

<style lang="scss" scoped>
@use'../style/variable.scss' as*;

.col-5 {

    max-width: 40vw;
    max-height: 60vh;

    h1 {
        color: $verde;
        font-weight: bold;
        line-height: 3rem;
    }

    h4 {
        text-decoration: underline 2px $verde;
    }

}</style>
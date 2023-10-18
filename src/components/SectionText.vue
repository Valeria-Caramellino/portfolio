<script>

export default {
    name: "SectionText",
    props: {
        text: String,
        title: String
    }
}

</script>

<template>
    <div class="col-5">
        <h4 class="text-light">{{ title }}</h4>
        <p class="text-light">
           {{ text }}
        </p>
    </div>
</template>

<style lang="scss" scoped></style>
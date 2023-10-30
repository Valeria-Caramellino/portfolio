<script>

export default {
  name: "SectionText",
  props: {
    text: String,

  }
}

</script>

<template>
  <div class="col-12 col-lg-5 text-focus-in d-flex flex-column justify-content-center align-items-center">
    <p>
      {{ text }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
@use'../style/variable.scss' as*;

.text-focus-in {
  animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  background-color: $bg;
}

p {
  font-size: 18px;
  line-height: 1.75rem;
  font-weight: 500;
  color: $bianco;
  // color: $bianco;
  text-align: justify;
}

@keyframes text-focus-in {
  0% {
    filter: blur(12px);
    opacity: 0;
  }

  100% {
    filter: blur(0px);
    opacity: 1;
  }
}

@media(max-width: 1025px) {
  p {
    max-height: 370px;
    line-height: 1.5rem;
    font-size: 14px;
    overflow-y: scroll;
  }
}
</style>
<script>

export default{
    name:"SectionImg",
    props:{
        path: String,
    }
}

</script>
<template>

    <div class="col-12 col-lg-5 d-flex align-items-center justify-content-center scale-in-center">
        <img :src=" path " alt="foto">
    </div>

</template>

<style lang="scss" scoped>
.scale-in-center {
  animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@keyframes scale-in-center {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  25%{
    transform: scale(0.25);
    opacity: 1;
  }
  50%{
    transform: scale(0.5);
    opacity: 1;
  }
  75%{
    transform: scale(0.75);
    opacity: 1;
  }
  90%{
    transform: scale(0.90);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

img{
  width: 400px;
}

@media(max-width: 768px){
  .scale-in-center{
    // animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
 
  margin: 2rem 0 2rem 0;
  }
}
@media(max-width: 425px){
  img{
    width: 300px;
  }
}

</style>
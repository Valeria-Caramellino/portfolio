<script>

export default{
  name:'HelloWorld',
  data(){
    return{
      text:"Sono Hello",
    }
  }
}

</script>

<template>
  <h1>{{ text }}</h1>

  <p class="bg-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorum qui voluptatum illo sapiente natus? Aspernatur quasi cumque ipsa. Voluptates obcaecati impedit dolorum doloribus suscipit esse expedita accusamus quo temporibus.</p>

  
</template>

<style lang="scss" scoped>
h1{
  color: aquamarine;
}
</style>

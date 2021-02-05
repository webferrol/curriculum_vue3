<template>
  <div class="home grid">
    <div class="col-4">
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <div class="col-8">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
  $tablet: 720px;
  .grid{
    display: grid;
    grid-template-rows: auto auto;
    @media (min-width: $tablet){
      grid-template-columns: repeat(12,1fr);
      .col-4{
        grid-column: 2 / 4 span;
        background: orange;
      }
      .col-8{
        grid-column: 6 / 6 span;
        background: lavenderblush;
      }
    }
  }
</style>

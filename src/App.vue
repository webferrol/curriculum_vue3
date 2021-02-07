<template>
  <MainMenu />
  <router-view/>
  <main-footer></main-footer>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue'
import MainFooter from '@/components/MainFooter.vue'
export default {
  components:{
    MainMenu,
    'main-footer': MainFooter
  }
}
</script>

<style lang="scss">
html{
  box-sizing: border-box;
  font-size: 100%;
}
*,*::before,*::after{
  box-sizing: inherit;
}
body{
  margin: 0;
}
h1{
  color: salmon;
}
#app {
  display: grid;
  grid-template-rows: 4rem 1fr auto;
  min-height: 100vh;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

$tablet: 720px;
  $pc: 1200px;
  .grid{
    display: grid;
    grid-template-rows: auto auto;
    gap: 12px;
    padding: .5em;
    @media (min-width: $tablet){
      grid-template-columns: repeat(12,1fr);
      padding: 0;
      .col-4{
        grid-column: 2 / 4 span;
        //background: orange;
      }
      .col-8{
        grid-column: 6 / 6 span; 
        padding-left: .5em;        
        //background: lavenderblush;
      }
      .col-8b{
        grid-column: 2 / 6 span;
      }
      .col-4b{
        grid-column: 9 / 3 span;
      }
    }
    @media (min-width: $pc){
      .col-4{
        grid-column: 2 / 3 span;
        //background: orange;
      }
      .col-8{
        grid-column: 5 / 7 span;
              
        //background: red;
      }
    }
  }
</style>

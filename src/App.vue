<template>
  <MainMenu />
  <router-view/>
  <MainFooter />
</template>

<script>
import MainMenu from '@/components/MainMenu.vue'
import MainFooter from '@/components/MainFooter.vue'
export default {
  components:{
    MainMenu,
    MainFooter
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
h1{
  color: salmon;
}
#app {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

<template>
  <div class="home grid">
    <div class="col-4">      
      <datos-personales nombre='Xurxo González Tenreiro' :datos="formacionAcademica"></datos-personales>
    </div>
    <div class="col-8">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>    
  </div>
</template>

<script>

import DatosPersonales from '@/components/DatosPersonales.vue'

import {mapState,mapActions} from "vuex"

export default {
  name: 'Home',
  computed:{
    ...mapState(['formacionAcademica'])
  },
  methods:{
    ...mapActions(['getFormacionAcademica'])
  },
  components: {
    'datos-personales': DatosPersonales
  },
  beforeMount(){
    this.$store.dispatch('getFormacionAcademica');
  }
}
</script>

<style lang="scss" scoped>
  $tablet: 720px;
  $pc: 1200px;
  .grid{
    display: grid;
    grid-template-rows: auto auto;
    @media (min-width: $tablet){
      grid-template-columns: repeat(12,1fr);
      .col-4{
        grid-column: 2 / 4 span;
        //background: orange;
      }
      .col-8{
        grid-column: 6 / 6 span;        
        //background: lavenderblush;
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

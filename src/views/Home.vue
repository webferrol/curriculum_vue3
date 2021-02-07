<template>
  <div class="home grid">
    <div class="col-4">      
      <datos-personales nombre="Xurxo González Tenreiro" :datos="formacionAcademica.conocimientos"></datos-personales>
    </div>
    <div class="col-8">
      <formacion-academica :formacionAcademica="formacionAcademica.formacion_academica" :formacionComplementaria="formacionAcademica.formacion_complementaria"></formacion-academica>
    </div>    
  </div>
</template>

<script>

import DatosPersonales from '@/components/DatosPersonales.vue'
import FormacionAcademica from '@/components/FormacionAcademica.vue'

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
    'datos-personales': DatosPersonales,
    'formacion-academica': FormacionAcademica
  },
  beforeMount(){
    this.$store.dispatch('getFormacionAcademica');
  }
}
</script>
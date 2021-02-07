<template>
  <div class="home grid">
    <div class="load-wraper col-8b">
      <div class="activity"></div>      
      <section>
        <header>
          <h1>Experiencia laboral</h1>
        </header>
        <div>
          <dl>
            <template  v-for="(item,key) of experienciaLaboral.experiencias" :key="key">
              <dt>{{item.titulo}}</dt>
              <dd>{{item.puesto}} {{item.fecha}}</dd>
            </template>
          </dl>
         
        </div>
      </section>
    </div>
    <div class="load-wraper col-4b">
      <div class="activity"></div>
      <section>
        <h1>Páginas</h1>
         <ul>
          <li
          v-for="(item,key) of experienciaLaboral.paginas"
          v-bind:key="key"
          >          
          <a :href="item.pagina" v-if="item.bool" target="_blank">
            
            {{item.pagina}}
          </a>
          <span :href="item.pagina" v-else>
            
            {{item.pagina}}
          </span>
          </li>
        </ul>
      </section>
    </div>    
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
export default {
  computed:{
    ...mapState(['experienciaLaboral'])
  },
  methods:{
    ...mapActions(['getExperienciaLaboral'])
  },
  beforeMount(){
    this.$store.dispatch('getExperienciaLaboral')
  }
}
</script>

<style lang="scss" scoped>
  dt,dd{
    line-height: 1.5em;
  }
  dd{
    margin-bottom: 1em;
  }
  dt {
    font-weight: bold;
  }
  ul{
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding-left: 0;
    li{
      box-shadow:
      0 0 25px inset lighten(orange,40),
      0 0 2px  lighten(orange,20);
      border-radius: .5em;
      padding: .5em;
      &:hover{
        box-shadow: 0 0 25px inset darken(orange,9.99),
        0 0 2px  darken(orange,9.99);
      }
      &:focus,&:active{
        box-shadow: 0 0 25px inset darken(orange,99),
        0 0 2px  darken(orange,99);
      }
    }
  }
  a{
    display: block;
    text-decoration: none;
    color: black;
   
  }
  
</style>

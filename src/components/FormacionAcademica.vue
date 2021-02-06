<template>
    <div class="formacion-academica">        
        <section class="formacion-academica__content">
            <header class="formacion-academica__header">
                <h1>Formación Académica</h1>
            </header>
            <dl class="formacion-academica__list">
                <template  v-for="(item,key) of formacionAcademica" :key="key">
                    <dt><span class="info primary">{{item.titulo}}</span></dt>
                    <dd>{{item.centro}} {{item.fecha}}</dd>
                </template>
            </dl>
        </section>
        <section class="formacion-academica__content">
            <header class="formacion-academica__header">
                <h1>Formación Complementaria</h1>
            </header>
            <dl class="formacion-academica__list">
                <template  v-for="(item,key) of formacionComplementaria" :key="key">
                    <dt><span class="info secondary">{{item.titulo}}</span></dt>
                    <dd>{{item.centro}} {{item.fecha}}</dd>
                </template>
            </dl>
        </section>
    </div>
</template>

<script>
export default {
    name: 'FormacionAcademica',
    props: ['formacionAcademica','formacionComplementaria']
}
</script>

<style lang="scss" scoped>
   $light: rgba(grey,.3);
   $border-color: $light;
   $primary: #17a2b8;
   $secondary:#20c997;
   .formacion-academica__list{
       display: flext;
       flex-direction: column;
       border: 1px solid $border-color;
       border-radius: .5em;
       dd,dt{
           padding: .5em;
       }
       dd{
          border-bottom: 1px solid $border-color;
          margin-left: 0;
          &:last-child{
              
              border-bottom-width: 0;
          }
       }
   }
   .info{
       display: inline-block;
       width: 100%;
       padding: .5em;
       margin-top: .2em;
       color: white;
       border-radius: .5em;
       &.primary{
           
           background: linear-gradient(90deg, rgba(2,0,36,1) 37%, $primary 81%);
       }
       &.secondary{
           background: linear-gradient(90deg, rgba(2,0,36,1) 37%, $secondary 81%);
       }
   }

</style>
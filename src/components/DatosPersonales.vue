<template>
    <div class="datos-personales">
        <figure class="datos-personales__figure">
            <img alt="Vue logo" src="../assets/foto_2010.jpg">
            <figcaption>{{nombre}}</figcaption>
           
        </figure>
        <section class="datos-personales__seccion">
            <header>
                <h1>Datos personales</h1>
            </header>
            <ul class="datos-personales__list small">
                <li v-for="(item,key) of datos_personales" :key="key"><strong>{{item.termino}}</strong><em>{{item.valor}}</em></li>
            </ul>
        </section>
        <section class="datos-personales__seccion">
            <header>
                <h1>Competencias</h1>
            </header>
            <ul class="datos-personales__list">
                <li v-for="(item,key) of datos" :key="key"><strong>{{item.conocimiento}}</strong><em :class="{ destacado: item.nivel.toLowerCase()=='alto'}">{{item.nivel}}</em></li>
            </ul>
        </section>
    </div> 
</template>

<script>

export default {
    // props:['nombre','datos'],
    props:{
        nombre:{
            type: String,
            required: false,
            default: '',
            validator: (value) => /^[ÁÉÍÓÚA-Z][a-záéíóú]+(\s+[ÁÉÍÓÚA-Z]?[a-záéíóú]+)*$/.test(value)
            
        },
        datos:{
            type: Array,
            required: false,
            default: () => ([])
        }
    },
    data(){
        return {
            datos_personales:[
                {termino: 'DNI', valor: "32670089S"},
                {termino: 'Fecha de nacimiento', valor: "6 de abril de 1973"},
                {termino: 'Teléfono', valor: "+34 655908367"},
                {termino: "Correo electrónico", valor:"info@webferrol.com"},
                {termino: "Permiso de conducir", valor: "B"}
            ]
        }
    }
    
}
</script>

<style lang="scss" scoped>
$light: rgba(grey,.3);
$border-color: $light;
$max-width: 400px;
.datos-personales{
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    max-width: $max-width;
    .datos-personales__figure{
        margin: 0;
        img{
            display: block;
            width: 100%;
            //max-width: 269px;
            object-fit: cover;
            border-radius: .5em .5em 0 0;
        }
        figcaption{
            padding: .5em 0;
            border: 1px solid $border-color;
            border-width: 0 1px 0 1px;
            text-align: center;
            font-size: .8em;
            font-weight: bold;
            font-variant: small-caps;
            color: white;
            background-color: salmon;
        }
    }
    .datos-personales__seccion{
        border: 1px solid $border-color;
        border-width: 0 1px 0 1px;
        &:last-child{
            border-bottom-width: 1px;
        }
        h1{
            text-align: center;
            
        }
    }
    .datos-personales__list{
        width: 95%;
        margin-left: auto;
        margin-right: auto;
        list-style-type: none;
        padding-left: 0;

        border: 1px solid $border-color;
        border-radius: .3em;

        li{
            display:flex;
            justify-content: space-between;
            align-self: center;
            padding: .8em 1em;
            border-bottom: 1px solid $border-color;
            &:last-child{
                border-style:none;
            }
        }

        &.small{
            font-size: .8em;
        }
    }
    .destacado{
        padding: 0 .5em;
        background-color: $light;
        border-radius: .5em;
    }
}
</style>
<template>
    <nav id="nav">
        <router-link to="/">Formación Académica</router-link>
        <router-link to="/about">Experienica laboral</router-link>
    </nav>
</template>

<script>
export default {
    name: 'MainMenu'
}
</script>


<style lang="scss">
    $bgcolor: #343a40;
    $tablet: 720px;
    #nav{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 1em;
        background-color: $bgcolor;
        @media (min-width: $tablet){
            flex-direction: row;
            justify-content: flex-start;
        }
        a{
            color: hsla(0,0%,100%,.75);
            line-height: 3rem;
            padding-left: 1em;
            text-decoration: none;
            box-shadow: 0 1px rgba(white,.2);
            @media (min-width: $tablet){
                box-shadow: none;
            }
            transition-property: text-shadow;
            transition-timing-function: ease-in-out;
            transition-duration: .5s;            
            &:hover{
                text-shadow: 2px 2px 1em white;
            }
            &.router-link-exact-active{
                color: white;
                
            }
        }
    }
</style>
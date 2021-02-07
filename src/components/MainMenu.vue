<template>
    <component :is="currentMenu" :right="side === 'right' ? true: false">
        <router-link to="/" v-slot="{navigate}">
            <i class="fa fa-fw fa-bell-o"></i>                
            <span @click="navigate">Formación académica</span>                
        </router-link>
        <router-link to="/workexperience" v-slot="{navigate}">
            <i class="fa fa-fw fa-bell-o"></i>                
            <span @click="navigate">Experiencia laboral</span>                
        </router-link>
    </component>
</template>


<script>
import slide from '@/components/Menu/slide';
import bubble from '@/components/Menu/bubble';
import elastic from '@/components/Menu/elastic';
import falldown from '@/components/Menu/fallDown';
import push from '@/components/Menu/push';
import pushrotate from '@/components/Menu/pushRotate';
import reveal from '@/components/Menu/reveal';
import scaledown from '@/components/Menu/scaleDown';
import scalerotate from '@/components/Menu/scaleRotate';
import stack from '@/components/Menu/stack';
import Menu from '@/components/Menu';

export default {
    name: 'MainMenu',
    data() {
        return {
            menus: {
                slide: { buttonText: 'Slide' },
                push: { buttonText: 'Push' },
                pushRotate: { buttonText: 'Push Rotate' },
                reveal: { buttonText: 'Reveal' },
                scaleDown: { buttonText: 'Scale Down' },
                scaleRotate: { buttonText: 'Scale Rotate' },
                // elastic: { buttonText: 'Elastic - (WIP)' },
                // stack: { buttonText: 'Stack - (WIP)' },
                bubble: { buttonText: 'Bubble' },
                fallDown: { buttonText: 'Fall Down' }
            },
            side: 'left',
            currentMenu: 'slide'
        }   
    },
    components:{
        slide,
        bubble,
        elastic,
        push,
        pushrotate,
        scaledown,
        scalerotate,
        reveal,
        stack,
        falldown,
        Menu
    }
}
</script>


<style lang="scss" scoped> 
    a{
        color: hsla(0,0%,100%,.75);
        line-height: 3rem;
        text-decoration: none;
        box-shadow: 0 1px rgba(white,.2);
        transition-property: text-shadow;
        transition-timing-function: ease-in-out;
        transition-duration: .5s;            
        &:hover{
            text-shadow: 2px 2px 1em white;
        }
        &.router-link-exact-active{
            span{
            color: orange;
            }
            
        }
    }

</style>
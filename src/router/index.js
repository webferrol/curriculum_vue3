import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {title: 'Formación académica'},
    component: Home
  },
  {
    path: '/workexperience',
    name: 'workexperience',
    meta: {title: 'Experiencia laboral'},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/WorkExperience.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  //base: process.env.BASE_URL,
  base: 'curriculumvitae',
  routes
})


//https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router

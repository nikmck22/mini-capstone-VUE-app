import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProductsIndex from '../views/ProductsIndex.vue';
import ProductsUpdate from '../views/ProductsUpdate.vue'; 
import ProductsNew from '../views/ProductsNew.vue'; 

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'ProductsIndex',
    component: ProductsIndex
  },
  {
    path: '/products/new',
    name: 'ProductsNew',
    component: ProductsNew
  },
  {
    path: '/products/:id/edit',
    name: 'ProductsUpdate',
    component: ProductsUpdate
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

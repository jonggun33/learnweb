import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DataBinding from '../views/DataBinding.vue'
import EventHandling from '../views/EventHandling.vue'
import AxiosBasic from '../views/AxiosBasic.vue'
import InterComponent from '../views/InterComponent.vue'
import VuexToDoAdd from '../views/VuexToDoAdd.vue'
import VuexToDoList from '../views/VuexToDoList.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/eventhandling',
    name: 'EventHandling',
    component: EventHandling
  },
  {
    path: '/axiosbasic',
    name: 'AxiosBasic',
    component: AxiosBasic
  },
  {
    path: '/intercomponent',
    name: 'InterComponent',
    component: InterComponent
  },
  {
    path: '/vuextodoadd',
    name: 'VuexToDoAdd',
    component: VuexToDoAdd
  },
  {
    path: '/vuextodolist',
    name: 'VuexToDoList',
    component: VuexToDoList
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

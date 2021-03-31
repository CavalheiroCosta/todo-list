import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/TodoList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TODOLIST',
    component: Home
  },
]

const router = new VueRouter({
  routes
})

export default router

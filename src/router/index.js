import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoComponent from '../views/TodoList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TODOLIST',
    component: TodoComponent
  },
]

const router = new VueRouter({
  routes
})

export default router

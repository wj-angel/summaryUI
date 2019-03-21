import Vue from 'vue'
import Router from 'vue-router'
import compents from "../pages/components"

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'compents',
      component: compents
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import JuryPage from '@/components/JuryPage'
import Home from '@/components/Home'
import About from '@/components/About'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/jury',
      name: 'Jury',
      component: JuryPage
    },
    { path: '/login', name: 'Login', component: Login },
    { path: '/Home', name: 'Home', component: Home },
    { path: '/About', name: 'About', component: About },
    {
      path: '*',
      component: JuryPage
    }

  ]
})

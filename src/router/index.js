import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Activities from '@/components/Activities'
import UserActivity from '@/components/UserActivity'
import Skills from '@/components/Skills'
import UserSkills from '@/components/UserSkills'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/Login'
import Signup from '@/components/Signup'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/login',
      name: 'Login',
      component: Login
    },

    {
      path: '/sign_up',
      name: 'Signup',
      component: Signup
    },

    {
      path: '/activities',
      name: 'Activities',
      component: Activities
    },

    {
      path: '/user_activity/:id',
      name: 'UserActivity',
      component: UserActivity
    },

    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },

    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },

    {
      path: '/user_skills',
      name: 'UserSkills',
      component: UserSkills
    }
  ]
})

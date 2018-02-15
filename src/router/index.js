import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import property from '@/components/Property'
import AutoMobile from '@/components/AutoMobile'
import Medical from '@/components/Medical'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/Property',
      name: 'Property',
      component: property
    },
    {
      path: '/AutoMobile',
      name: 'AutoMobile',
      component: AutoMobile
    },
    {
      path: '/Medical',
      name: 'Medical',
      component: Medical
    }
  ]
})

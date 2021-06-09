import Vue from 'vue'
import Router from 'vue-router'

import PaymentForm from '../components/PaymentForm'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/add/payment/:category',
      name: 'addPayment',
      component: PaymentForm
    }
  ]
})

export default router

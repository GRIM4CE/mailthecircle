import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/home.vue'
import Success from '../components/success.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/success',
      name: 'success',
      component: Success,
    },
    {
      path: '/*',
      name: 'home',
      component: Home,
    }
  ]
});

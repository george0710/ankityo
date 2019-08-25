import Vue from 'vue';

import Router from 'vue-router';

Vue.use(Router);

import Login from '@/components/Login.vue';
import HelloWorld from '@/components/home/HelloWorld.vue';

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
});

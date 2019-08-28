import Vue from 'vue';

import Router from 'vue-router';

Vue.use(Router);

import Home from '@/components/home/Home.vue';
import SearchDetail from '@/components/home/SearchDetail.vue';
import SearchResult from '@/components/home/SearchResult.vue';

import Test from '@/components/Test.vue';

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/search',
      name: 'SearchDetail',
      component: SearchDetail
    },
    {
      path: '/search-result/:word',
      name: 'SearchResult',
      component: SearchResult,
      props: true
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
});

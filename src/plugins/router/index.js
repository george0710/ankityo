import Vue from 'vue';

import Router from 'vue-router';

Vue.use(Router);

import Home from '@/views/home/Index.vue';
import ChartContainer from '@/views/chart/Index.vue';
import WordBook from '@/views/word/book/Index.vue';
import WordList from '@/views/word/List.vue';
import SearchDetail from '@/views/home/search/Detail.vue';
import SearchResult from '@/views/home/search/Result.vue';
import User from '@/views/user/Index.vue';

import Test from '@/components/Test.vue';

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/search',
      name: 'SearchDetail',
      component: SearchDetail,
      props: true
    },
    {
      path: '/search-result',
      name: 'SearchResult',
      component: SearchResult,
      props: true
    },
    {
      path: '/chart',
      name: 'ChartContainer',
      component: ChartContainer
    },
    {
      path: '/wordbook',
      name: 'WordBook',
      component: WordBook
    },
    {
      path: '/wordbook/:id/wordlist',
      name: 'WordList',
      component: WordList,
      props: true
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      props: true
    }
    ,{
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
});

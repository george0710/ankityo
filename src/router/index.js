import Vue from 'vue';

import Router from 'vue-router';

Vue.use(Router);

import Home from '@/components/home/Home.vue';
import ChartContainer from '@/components/chart/ChartContainer.vue';
import WordBook from '@/components/wordbook/WordBook.vue';
import WordList from '@/components/wordbook/WordList.vue';
import Study from '@/components/wordbook/Study.vue';
import WordBookDetail from '@/components/wordbook/WordBookDetail.vue';
import SearchDetail from '@/components/home/SearchDetail.vue';
import SearchResult from '@/components/home/SearchResult.vue';

import Test from '@/components/FormModalTest.vue';

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
      path: '/wordbook/:id',
      name: 'WordBookDetail',
      component: WordBookDetail,
      props: true
    },
    {
      path: '/wordbook/:id/wordlist',
      name: 'WordList',
      component: WordList,
      props: true
    },
    {
      path: '/wordbook/:id/study',
      name: 'Study',
      component: Study,
      props: true
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
});

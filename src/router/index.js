import Vue from 'vue';

import Router from 'vue-router';

Vue.use(Router);

import Home from '@/views/home/Index.vue';
import ChartContainer from '@/views/chart/Index.vue';
import WordBook from '@/views/word/book/Index.vue';
import WordList from '@/views/word/List.vue';
import Study from '@/views/word/book/Study.vue';
import WordBookDetail from '@/views/word/book/Detail.vue';
import SearchDetail from '@/views/home/search/Detail.vue';
import SearchResult from '@/views/home/search/Result.vue';

// import Test from '@/components/FormModalTest.vue';

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
    }
    // ,{
    //   path: '/test',
    //   name: 'Test',
    //   component: Test
    // }
  ]
});

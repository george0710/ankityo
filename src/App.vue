<template>
  <div id="app">
    <div class="main-content">
      <router-view />
    </div>
    <FootNav />
  </div>
</template>

<script>
import router from './router';
import FootNav from '@/components/FootNav.vue';

export default {
  name: 'App',
  components: {
    FootNav
  },
  router
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-content {
  margin: 10px;
}
</style>

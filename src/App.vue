<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
    <!-- <v-footer app /> -->
    <FootNav />
  </v-app>
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

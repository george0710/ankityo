<template>
  <v-app>
    <v-content>
      <v-container
        fluid
        class="bottom-up"
      >
        <router-view />
      </v-container>
    </v-content>
    <!-- <v-footer app /> -->
    <FootNav />
  </v-app>
</template>

<script>
import router from '@/plugins/router';
import store from '@/plugins/store';

import firebase from 'firebase';
import {mapActions} from 'vuex';
import FootNav from '@/components/FootNav.vue';

export default {
  name: 'App',
  components: {
    FootNav
  },
  router,
  store,
  created() {
    //ログインやログアウトを検知したら呼ばれるように設定する。
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        //ログインした
        this.setLoginUser(user);
      } else {
        //ログアウトした
        this.deleteLoginUser(user);
      }
    });
  },
  methods: {
    ...mapActions(['setLoginUser','deleteLoginUser'])
  }
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

.bottom-up {
  margin-bottom: 32px;
}
</style>

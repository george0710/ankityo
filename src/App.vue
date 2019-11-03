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
import User from '@/model/User.vue';

export default {
  name: 'App',
  components: {
    FootNav
  },
  mixins:[User],
  router,
  store,
  created() {
    //ログインやログアウトを検知したら呼ばれるように設定する。
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.setLoginUser(user);

        var _user = {};
        _user.displayName = user.displayName;
        _user.email = user.email;
        _user.photoURL = user.photoURL;
        _user.uid = user.uid;
        // TODO:: 登録する必要があるかを確認する
        // _user.refreshToken = user.refreshToken;
        this.insertOrUpdate(_user);
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

import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setLoginUser(state, user) {
      state.user = user;
    },
    deleteLoginUser(state) {
      state.user = null;
    }
  },
  actions: {
    login() {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(google_auth_provider);
    },
    logout(){
      firebase.auth().signOut();
    },
    setLoginUser({commit}, user) {
      commit('setLoginUser', user);
    },
    deleteLoginUser({commit}){
      commit('deleteLoginUser');
    }
  }
});

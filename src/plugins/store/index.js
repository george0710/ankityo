import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    wordBookId: ''
  },
  mutations: {
    setLoginUser(state, user) {
      state.user = user;
    },
    deleteLoginUser(state) {
      state.user = null;
    },
    setWordBookId(state,id){
      state.wordBookId = id;
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
    },
    setWordBookId({commit}, id){
      commit('setWordBookId', id);
    },
  },
  getters:{
    uid: state => state.user ? state.user.uid : null
  }
});

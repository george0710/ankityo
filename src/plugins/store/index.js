import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import firebase from 'firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    wordBookId: '',
    // 単語に紐づく「覚えた」「あと少し」「覚えてない」の三段階のステータスの管理を行う。
    // 例:
    //   (id) : {
    //     id: (id)
    //     red: bookmark_border,
    //     green: bookmark_border,
    //     yellow: bookmark,
    //   },
    words: {}
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
    },
    setWord(state, word){
      console.log(word.id);
      state.words[word.id] = word;
    },
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
    setWord({commit}, word){
      commit('setWord', word);
    },
  },
  getters:{
    uid: state => state.user ? state.user.uid : null
  },
  plugins: [createPersistedState()]
});

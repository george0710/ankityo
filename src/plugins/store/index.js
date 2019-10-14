import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import firebase from 'firebase';
import moment from 'moment';

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
    words: {},
    // 例 { 2019/10/14: 10,2019/10/15: 14,...}
    studyHistory: {}
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
      state.words[word.id] = word;
    },
    incrementStudyHistory(state){
      const today = moment().format('YYYY/MM/DD');
      if (today in state.studyHistory) {
        state.studyHistory[today]++;
      } else {
        state.studyHistory[today] = 1;
      }
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
    incrementStudyHistory({commit}){
      commit('incrementStudyHistory');
    },
  },
  getters:{
    uid: state => state.user ? state.user.uid : null
  },
  plugins: [createPersistedState()]
});

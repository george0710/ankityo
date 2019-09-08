import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import vuetify from './plugins/vuetify';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
import 'vuetify/dist/vuetify.min.css';
import firebase from 'firebase';

Vue.use(VueRouter);

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
});

const firebaseConfig = {
  apiKey: 'AIzaSyBtH5zMzUp1vKQnpVcb_vR1hKA0djU5jLg',
  authDomain: 'ankityo-184c3.firebaseapp.com',
  databaseURL: 'https://ankityo-184c3.firebaseio.com',
  projectId: 'ankityo-184c3',
  storageBucket: '',
  messagingSenderId: '731675034322',
  appId: '1:731675034322:web:2bc1a72a581dbdb52ba30b'
};

firebase.initializeApp(firebaseConfig);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');

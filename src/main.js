import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueAuthenticate from 'vue-authenticate';
import VueAxios from 'vue-axios';
import axios from 'axios';
import vuetify from './plugins/vuetify';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
import 'vuetify/dist/vuetify.min.css';

Vue.use(VueRouter);

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(Vuetify);


export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
});

var baseUrl = 'http://localhost:8080';
//Oauth2を使用するためのライブラリ
Vue.use(VueAuthenticate, {
  tokenName: 'access_token',
  baseUrl: baseUrl,
  storageType: 'cookieStorage',
  providers: {
    // Define OAuth providers config
    google: {
      clientId: '381139650014-8mnnhula42sarof13fkb9j641op2rjc7.apps.googleusercontent.com',
      clientSecret: 'mNAv95QPFB_XUCNtV0_icgWf',
      url: 'http://localhost:3000/auth/google'
    }
  }
});

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');

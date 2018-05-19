import Vue from 'vue';

import '../images/favicon.png';
import '../stylesheets/main.css';

import store from './modules/store/index';
import App from './components/app.vue';

global.app = new Vue({
  name: 'TicTacVue',
  el: '#vue',
  components: {
    App,
  },
  store,
  render: h => h(App),
});

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in global.navigator) {
  global.addEventListener('load', () => {
    global.navigator.serviceWorker.register('sw.js');
  });
}

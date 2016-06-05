import "../stylesheet/main.css";

import Vue from "vue";
import Vuex from "vuex";

import App from "./components/app.vue";

import store from "./modules/store/index";

Vue.use(Vuex);

new Vue({
  el:         "body",
  store:      store,
  components: { App }
});

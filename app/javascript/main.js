import "../stylesheet/main.css";

import Vue from "vue";
import Vuex from "vuex";

import router from "./router/router";

import Intro from "./components/intro.vue";
import App from "./components/app.vue";

import store from "./modules/store/index";

Vue.use(Vuex);


router.map({
  "/": {
    component: Intro
  },
  "/app": {
    component: App
  }
});

let Root = Vue.extend({
  store: store
});

router.start(Root, "body");

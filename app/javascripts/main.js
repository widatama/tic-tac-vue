import "../images/favicon.png";

import "../stylesheets/app.css";

import Vue from "vue";

import store from "./modules/store/index";

import App from "./components/app.vue";

new Vue({
  el: "#vue",
  store,
  render: (h) => {return h(App);}
});

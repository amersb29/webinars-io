import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import CountryFlag from "vue-country-flag";

Vue.config.productionTip = false;

Vue.component("country-flag", CountryFlag);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");

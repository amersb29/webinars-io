import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

const validCurrencies = ["MXN", "USD", "EUR"];

export default new Vuex.Store({
  state: {
    currency: undefined,
    loading: false,
    webinar: undefined,
    webinarjam: undefined
  },
  mutations: {
    updateState(state, { key, value }) {
      state[key] = value;
    }
  },
  actions: {
    async getCheckoutInfo({ commit, dispatch }, code) {
      const {
        data: { currencies }
      } = await axios.get(
        `${process.env.VUE_APP_REST_COUNTRIES}/${code.toLowerCase()}`
      );
      const currency = currencies[0].code;

      commit("updateState", { key: "loading", value: true });
      const {
        data: { webinar, webinarjam }
      } = await axios.get(
        `${process.env.VUE_APP_RESOURCES_URL}/resources/webinar_info.php`
      );

      dispatch("updateCheckoutInfo", {
        webinar,
        webinarjam,
        currency
      });
    },
    updateCheckoutInfo({ commit }, { webinar, webinarjam, currency }) {
      commit("updateState", { key: "currency", value: currency });
      commit("updateState", { key: "webinar", value: webinar });
      commit("updateState", { key: "webinarjam", value: webinarjam });
      commit("updateState", { key: "loading", value: false });
    }
  },
  getters: {
    currency: state =>
      validCurrencies.indexOf(state.currency) !== -1 ? state.currency : "USD",
    loading: state => state.loading,
    checkoutDescription: state =>
      `${state.webinar.title}: ${state.webinar.subtitle} - ${state.webinar.date} ${state.webinar.time}`,
    checkoutPrice: state =>
      validCurrencies.indexOf(state.currency) !== -1
        ? state.webinar.prices[state.currency]
        : state.webinar.prices["USD_LATAM"],
    checkoutBanner: state => (state.webinar ? state.webinar.banner : ""),
    checkoutReturnUrl: state => state.webinarjam.return_url
  },
  modules: {}
});

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currency: "MXN",
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
    updateCheckoutInfo({ commit }, { webinar, webinarjam, currency }) {
      commit("updateState", { key: "currency", value: currency });
      commit("updateState", { key: "webinar", value: webinar });
      commit("updateState", { key: "webinarjam", value: webinarjam });
      commit("updateState", { key: "loading", value: false });
    }
  },
  getters: {
    currency: state => state.currency,
    loading: state => state.loading,
    checkoutDescription: state =>
      `${state.webinar.title}: ${state.webinar.subtitle} - ${state.webinar.date} ${state.webinar.time}`,
    checkoutPrice: state => state.webinar[state.currency],
    checkoutReturnUrl: state => state.webinarjam.return_url
  },
  modules: {}
});

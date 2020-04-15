import Vue from "vue";
import Vuex from "vuex";

import { login, createPayment, getPaymentInfo } from "@/services/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    access_token: null,
    approvalUrl: null,
    expires_in: 0
  },
  mutations: {
    updateLoginInfo(state, { access_token, expires_in }) {
      state.access_token = access_token;
      state.expires_in = expires_in;
    },
    updateApprovalUrl(state, url) {
      state.approvalUrl = url;
    }
  },
  actions: {
    async getApprovalUrl({ commit }) {
      const {
        data: { access_token, expires_in }
      } = await login();

      commit("updateLoginInfo", { access_token, expires_in });

      const { data: paymentInfo } = await getPaymentInfo();

      const {
        data: { links }
      } = await createPayment(access_token, paymentInfo);

      commit(
        "updateApprovalUrl",
        links.find(link => link.rel === "approval_url").href
      );
    }
  },
  getters: {
    approval_url: state => state.approvalUrl
  },
  modules: {}
});

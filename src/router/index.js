import Vue from "vue";
import VueRouter from "vue-router";
import Checkout from "../views/Checkout.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Selecciona tu país",
    component: Home
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

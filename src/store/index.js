import Vue from "vue";
import Vuex from "vuex";
import currencyModule from "@/store/currencyModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    currencyModule
  },
});

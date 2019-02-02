/*global getTime*/

import Vue from "vue";
import Vuex from "vuex";

import { mutators, actors } from "./constants";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    errors: [],
    single_toast: false
  },
  mutations: {
    [mutators.ADD_ERROR](state, value) {
      state.errors.push(value);
    },
    [mutators.REMOVE_ERROR](state, id) {
      state.errors = state.errors.filter(err => err.id !== id);
    },
    [mutators.TOGGLE_SINGLE_TOAST](state, value) {
      state.single_toast = value;
    }
  },
  actions: {
    [actors.ADD_TOAST]({ commit }, value) {
      commit(mutators.ADD_ERROR, {
        id: new Date().getTime(),
        text: "Unable to take your call."
      });
    },
    [actors.REMOVE_TOAST]({ commit }, id) {
      commit(mutators.REMOVE_ERROR, id);
    }
  }
});

import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    notes: []
  },
  mutations: {
    getNotes: function(state, payload) {
      state.notes = payload;
    }
  },
  actions: {
    getNotes: function(context) {
      axios.get("https://suminotes-api.herokuapp.com/").then(res => {
        context.commit("getNotes", res.data);
      });
    }
  }
});

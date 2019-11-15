import Vue from "vue";
import Vuex from "vuex";
import city from "./city"
import token from "./token"
import det from "./det"
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        city,
        token,
        det
    },
})
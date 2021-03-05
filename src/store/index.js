import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as actions from './actions'
import mutations from './mutations'
import area from './modules/area'
import map from './modules/map'

Vue.use(Vuex)

const state = {
  baseinfo: {
  },
  count: 1
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules: {
    area,
    map
  },
  strict: process.env.NODE_ENV !== 'production',
  plugins: [createPersistedState({
    key: 'SmartCould'
  })]
})

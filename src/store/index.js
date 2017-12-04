import Vue from 'vue'
import Vuex from 'vuex'
import sidebar from './modules/sidebar'

import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    sidebar
  },
  getters
})

export default store

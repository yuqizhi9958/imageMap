import {
  INITIAL_AREA,
  UPDATE_AREA
} from '../mutation-types'

const state = {
  areaLevel: 0,
  areaCode: '',
  areaName: '全国',
  pLevel: 0,
  pCode: '',
  pName: '全国'
}

const getters = {}

const actions = {}

const mutations = {
  [INITIAL_AREA] (state) {
    state.areaLevel = 0
    state.areaCode = ''
    state.areaName = '全国'
    state.pLevel = 0
    state.pCode = ''
    state.pName = '全国'
  },
  [UPDATE_AREA] (state, area) {
    state.areaLevel = area.level
    state.areaCode = area.code
    state.areaName = area.name
    state.pLevel = area.pLevel
    state.pCode = area.pCode
    state.pName = area.pName
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

import {
  INITIAL_MAP,
  UPDATE_MAP_TYPE,
  UPDATE_MAP_EDIT,
  UPDATE_MAP_HIGHPONIT,
  UPDATE_MAP_EDIT_LEVEL,
  UPDATE_MAP_EDIT_TYPE,
  UPDATE_MAP_EDIT_LOCATION
} from '../mutation-types'

const state = {
  type: 'MapEarth',
  hightpoint: '1,34020000001320000001,rtsp://admin:bx123456@192.168.1.199:554/h264/ch1/main/av_stream',
  edit: false,
  editlevel: '',
  edittype: 'point',
  editlocation: []
}

const getters = {}

const actions = {}

const mutations = {
  [INITIAL_MAP] (state) {
    state.type = 'MapEarth'
    state.hightpoint = '1,34020000001320000001_rtsp://admin:bx123456@192.168.1.199:554/h264/ch1/main/av_stream'
    state.edit = false
    state.editlevel = ''
    state.edittype = 'point'
    state.editlocation = []
  },
  [UPDATE_MAP_TYPE] (state, type) {
    state.type = type
  },
  [UPDATE_MAP_EDIT] (state, edit) {
    state.edit = edit
  },
  [UPDATE_MAP_HIGHPONIT] (state, hightpoint) {
    state.hightpoint = hightpoint
  },
  [UPDATE_MAP_EDIT_LEVEL] (state, editlevel) {
    state.editlevel = editlevel
  },
  [UPDATE_MAP_EDIT_TYPE] (state, edittype) {
    state.edittype = edittype
  },
  [UPDATE_MAP_EDIT_LOCATION] (state, editlocation) {
    state.editlocation = editlocation
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

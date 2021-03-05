import {
  INITIAL_STATE
} from './mutation-types'

const mutations = {
  [INITIAL_STATE] (state, status) {
  },
  add (state) {
    state.count++
  }
}

export default mutations


// reducers/index.js


import {
  TOGGLE_LEFT_SIDEBAR,
  TOGGLE_RIGHT_SIDEBAR,
} from '../actions/index'

const initState = {
  leftActive: true,
  rightActive: false
}


function reducer(state = initState, action) {
  switch (action.type) {
    case TOGGLE_LEFT_SIDEBAR:
      return {...state, leftActive: action.active}
    case TOGGLE_RIGHT_SIDEBAR:
      return {...state, rightActive: action.active}
    default:
      return state
  }

}

export default reducer

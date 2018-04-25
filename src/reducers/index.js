import {COINS_REQUEST, COINS_SUCCESS, COINS_FAILURE} from '../actions'

const initialState = {
  isFetching: false,
  coinsData: [],
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case COINS_REQUEST:
      return {...state, isFetching: true}
    case COINS_SUCCESS:
      return {...state, isFetching: false, error: false, coins: action.data}
    case COINS_FAILURE:
      return {...state, isFetching: false, error: true}
    default:
      return state
  }
}

export default rootReducer

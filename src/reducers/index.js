import {COINS_REQUEST, COINS_SUCCESS, COINS_FAILURE} from '../actions'

const initialState = {
  isFetching: true,
  isData: false,
  isError: false,
  coins: [],
}

function computeCoins(prevCoins, coins) {
  return coins.map((coin) => {
    const prevCoin = prevCoins.find((prevCoin) => prevCoin.id === coin.id)
    if (!prevCoin) return {...coin, priceOscilation: 0}
    if (prevCoin.last_updated === coin.last_updated) return {...prevCoin}

    const priceOscilation = coin.price_usd - prevCoin.price_usd
    return {...coin, priceOscilation}
  })
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case COINS_REQUEST:
      return {...state, isFetching: true}
    case COINS_SUCCESS:
      const isData = action.data.length > 0
      const coins = computeCoins(state.coins, action.data)
      return {
        ...state,
        isFetching: false,
        isData,
        isError: false,
        coins,
      }
    case COINS_FAILURE:
      return {...state, isFetching: false, isError: true}
    default:
      return state
  }
}

export default rootReducer

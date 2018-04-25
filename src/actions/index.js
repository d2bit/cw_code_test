import axios from 'axios'

export const COINS_REQUEST = 'COINS_REQUEST'
export const COINS_SUCCESS = 'COINS_SUCCESS'
export const COINS_FAILURE = 'COINS_FAILURE'

const URL = 'https://api.coinmarketcap.com/v1/ticker/'

function requestCoins() {
  return {
    type: COINS_REQUEST,
  }
}
function successCoins(coins) {
  return {
    type: COINS_SUCCESS,
    data: coins,
  }
}
function failureCoins() {
  return {
    type: COINS_FAILURE,
  }
}

export const fetchCoins = (coinIds) => {
  return (dispatch) => {
    dispatch(requestCoins(coinIds))

    axios
      .get(URL)
      .then((response) => response.data)
      .then((data) => data.filter((coin) => coinIds.includes(coin.id)))
      .then((coins) => dispatch(successCoins(coins)))
      .catch(() => dispatch(failureCoins()))
  }
}

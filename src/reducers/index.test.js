import {COINS_REQUEST, COINS_SUCCESS, COINS_FAILURE} from '../actions'
import rootReducer from './index'

it('initializes coin priceOscilation', () => {
  const state = {
    isFetching: true,
    isData: true,
    isError: false,
    coins: [],
  }
  const action = {
    type: COINS_SUCCESS,
    data: [{id: 'bitcoin', last_updated: 1234, price_usd: 12.34}],
  }
  const expectedState = {
    ...state,
    isFetching: false,
    coins: [
      {id: 'bitcoin', last_updated: 1234, price_usd: 12.34, priceOscilation: 0},
    ],
  }
  const newState = rootReducer(state, action)

  expect(newState).toEqual(expectedState)
})

it('does not update the coin if last_updated is current', () => {
  const state = {
    isFetching: true,
    isData: true,
    isError: false,
    coins: [
      {id: 'bitcoin', last_updated: 1234, price_usd: 12.34, priceOscilation: 0},
    ],
  }
  const action = {
    type: COINS_SUCCESS,
    data: [
      {id: 'bitcoin', last_updated: 1234, price_usd: 12.34, priceOscilation: 0},
    ],
  }
  const expectedState = {...state, isFetching: false}
  const newState = rootReducer(state, action)

  expect(newState).toEqual(expectedState)
})

it('updates the coin and computes priceOscilation', () => {
  const state = {
    isFetching: true,
    isData: true,
    isError: false,
    coins: [
      {id: 'bitcoin', last_updated: 1234, price_usd: 12.34, priceOscilation: 0},
    ],
  }
  const action = {
    type: COINS_SUCCESS,
    data: [{id: 'bitcoin', last_updated: 1278, price_usd: 13.34}],
  }
  const expectedState = {
    ...state,
    isFetching: false,
    coins: [
      {
        id: 'bitcoin',
        last_updated: 1278,
        price_usd: 13.34,
        priceOscilation: 1,
      },
    ],
  }
  const newState = rootReducer(state, action)

  expect(newState).toEqual(expectedState)
})

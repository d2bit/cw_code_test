import React from 'react'
import {render} from 'react-testing-library'
import Info from './Info'

it('renders without crashing', () => {
  const {container} = render(
    <Info name="Bitcoin" symbol="BTC" price={123.45} priceOscilation={0} />,
  )
  expect(container).toMatchSnapshot()
})

it('applies class if priceOscilation is positive', () => {
  const {container} = render(
    <Info name="Bitcoin" symbol="BTC" price={123.45} priceOscilation={0.5} />,
  )
  expect(container).toMatchSnapshot()
})

it('applies class if priceOscilation is negative', () => {
  const {container} = render(
    <Info name="Bitcoin" symbol="BTC" price={123.45} priceOscilation={-0.5} />,
  )
  expect(container).toMatchSnapshot()
})

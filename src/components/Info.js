import React from 'react'
import './Info.css'

class Info extends React.PureComponent {
  render() {
    const {name, price_usd: price, symbol} = this.props.data

    return <div className='Info'>
      <header className='Info-header'>
        <h1 className='Info-title'>{name} - {symbol}</h1>
      </header>
      <h1 className='Info-price'>${price}</h1>
    </div>
  }
}

export default Info

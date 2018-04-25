import React from 'react'
import './Info.css'

class Info extends React.PureComponent {
  priceClassNames = () => {
    const {priceOscilation} = this.props
    let classNames = ['Info-price']

    if (priceOscilation > 0) classNames.push('Info-price-up')
    else if (priceOscilation < 0) classNames.push('Info-price-down')

    return classNames.join(' ')
  }

  render() {
    const {name, symbol, price} = this.props

    return (
      <div className="Info">
        <header className="Info-header">
          <h1 className="Info-title">
            {name} - {symbol}
          </h1>
        </header>
        <h1 className={this.priceClassNames()}>${price}</h1>
      </div>
    )
  }
}

export default Info

import React from 'react'
import {connect} from 'react-redux'
import {fetchCoins} from '../actions'
import Info from '../components/Info'
import './App.css'

export class App extends React.PureComponent {
  static defaultProps = {
    isFetching: false,
    isData: false,
    isError: false,
    coins: [],
    fetchCoins: () => {},
    trackCoins: ['bitcoin', 'ethereum'],
    refreshTime: 10000,
  }

  updateCoins = () => {
    const {fetchCoins, trackCoins} = this.props
    fetchCoins(trackCoins)
  }

  componentDidMount() {
    const {refreshTime} = this.props
    this.updateCoins()

    this.interval = setInterval(this.updateCoins, refreshTime)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const {isData, isFetching, coins} = this.props

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CoverWallet Code Test</h1>
        </header>
        { !isData && isFetching && <div className='App-loading' /> }
        { isData && <div className="App-content">
            {coins.map((coin) =>
              <Info
              key={coin.id}
              symbol={coin.symbol}
              name={coin.name}
              price={coin.price_usd}
              priceOscilation={coin.priceOscilation}
              />
            )}
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.isFetching,
  isData: state.isData,
  isError: state.isError,
  coins: state.coins,
})

export default connect(mapStateToProps, {fetchCoins})(App)

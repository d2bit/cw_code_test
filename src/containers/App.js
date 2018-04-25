import React from 'react'
import {connect} from 'react-redux'
import {fetchCoins} from '../actions'
import Info from '../components/Info'
import './App.css'

export class App extends React.PureComponent {
  static COINS_TO_SHOW = ['bitcoin', 'ethereum', 'litecoin']
  static defaultProps = {
    isFetching: true,
    coins: [],
    fetchCoins: () => {},
  }

  componentDidMount() {
    this.props.fetchCoins(this.constructor.COINS_TO_SHOW)
  }

  render() {
    const {coins} = this.props

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CoverWallet Code Test</h1>
        </header>
        <div className="App-content">
          {coins.map((coin) => <Info key={coin.id} data={coin} />)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.isFetching,
  coins: state.coins,
})

export default connect(mapStateToProps, {fetchCoins})(App)

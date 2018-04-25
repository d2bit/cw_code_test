import axios from 'axios'
import React from 'react'
import {connect} from 'react-redux'
import {fetchCoins} from '../actions'
import Info from '../components/Info'

class App extends React.PureComponent {
  static COINS_TO_SHOW = ['bitcoin', 'ethereum', 'litecoin']
  static defaultProps = {
    isFetching: true,
    coins: [],
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
        {coins.map((coin) => <Info key={coin.id} data={coin} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.isFetching,
  coins: state.coins,
})

export default connect(mapStateToProps, {fetchCoins})(App)

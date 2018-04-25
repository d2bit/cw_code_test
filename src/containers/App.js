import axios from 'axios'
import React from 'react'
import Info from '../components/Info'

class App extends React.PureComponent {
  static COINS_TO_SHOW = ['bitcoin', 'ethereum', 'litecoin']
  state = {
    fetching: true,
    data: [],
  }

  componentDidMount() {
    const url = 'https://api.coinmarketcap.com/v1/ticker/'
    const data = axios.get(url)
      .then(response => response.data)
      .then(data => this.setState({ fetching: false, data }))
  }

  render() {
    const coins = this.state.data
      .filter(coin => App.COINS_TO_SHOW.includes(coin.id))

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CoverWallet Code Test</h1>
        </header>
        {coins.map(coin =>
          <Info key={coin.id} data={coin} />
        )}
      </div>
    )
  }
}

export default App

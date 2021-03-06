import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store'
import App from './containers/App'
import './index.css'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App refreshTime={30000} trackCoins={['bitcoin', 'ethereum', 'litecoin']} />
  </Provider>,
  document.getElementById('root'),
)
registerServiceWorker()

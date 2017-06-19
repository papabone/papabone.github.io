import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import './style/app.css'
import App from './containers/App'
import About from './containers/about'
import LiPage from './containers/liPage'
import configureStore from './store/configureStore'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'


const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)

render(
  <Provider store={store}>
    <div className='app'>
      <Router history={history}>
        <Route path='/' component={App} />
        <Route path='/about' component={About} />
        <Route path='/inputAddLi/:idm' component={LiPage} />
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
)

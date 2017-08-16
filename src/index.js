import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import './style/normolise.css'
import './style/grid.css'
import './style/style.css'
import './style/animation.css'
import configureStore from './store/configureStore'
import { Router, Route, hashHistory} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Shell from './containers/Shell'
import NotFound from './components/NotFound'
import AboutDes from './containers/AboutDes'
import AboutDev from './containers/AboutDev'
import PortfolioDes from './containers/PortfolioDes'
import PortfolioDev from './containers/PortfolioDev'

const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)

render(
  <Provider store={store}>
    <div className='app'>
      <Router history={history} >
        <Route path='/' component={Shell}>
          <Route path='/about-des' component={AboutDes} />
          <Route path='/about-dev' component={AboutDev} />
          <Route path='/portfolio-des' component={PortfolioDes} />
          <Route path='/portfolio-dev' component={PortfolioDev} />
        </Route>
        <Route path='*' component={NotFound} />
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
)

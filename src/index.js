import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import './style/normolise.css'

const browser = require('detect-browser')
switch (browser && browser.name) {
  case 'ie' :
  case 'edge':
  case 'ios':
  case 'safari':
  case 'chrome':
    require('./style/grid-fb.css')
    console.log('grid - unsupported')
    break

  default:
    require('./style/grid.css')
    console.log('grid - supported')
}

import './style/style.css'
import './style/animation.css'
import configureStore from './store/configureStore'
import { Router, Route, hashHistory} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Shell from './containers/Shell'
import E404 from './containers/E404'
import AboutDes from './containers/AboutDes'
import AboutDev from './containers/AboutDev'
import PortfolioDes from './containers/PortfolioDes'
import PortfolioDev from './containers/PortfolioDev'
import Menu from './containers/Menu'
import Project from './containers/Project'

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
          <Route path='/portfolio-des/project-:project' component={Project} />
          <Route path='/portfolio-dev' component={PortfolioDev} />
          <Route path='/menu' component={Menu} />
          <Route path='*' component={E404} />
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
)

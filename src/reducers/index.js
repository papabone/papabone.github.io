import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import who from './who'
import menu from './menu'
import port from './port'

export default combineReducers({
  routing: routerReducer,
  who,
  menu,
  port
})

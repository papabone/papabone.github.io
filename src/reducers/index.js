import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import page from './page'
import user from './user'
import inputAddLi from './inputAddLi'
import filtredLi from './filtredLi'

export default combineReducers({
  routing: routerReducer,
  page,
  user,
  inputAddLi,
  filtredLi
})

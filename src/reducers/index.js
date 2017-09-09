import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import lang from './lang'
import menu from './menu'
import shell from './shell'
import port from './port'
import about from './about'
import main from './main'
import e404 from './e404'

export default combineReducers({
  routing: routerReducer,
  lang,
  menu,
  shell,
  port,
  about,
  main,
  e404
})

import { hashHistory } from 'react-router'

import {
  ROUTING
} from '../constants/routing'

export const redirect = store => next => action => { //eslint-disable-line no-unused-vars
  if (action.type === ROUTING) {
    hashHistory[action.payload.method](action.payload.nextUrl)
    if (action.payload.warning) alert(action.payload.warning)
  }

  return next(action)
}

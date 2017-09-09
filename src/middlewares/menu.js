import { hashHistory } from 'react-router'
import { CALL_HISTORY_METHOD } from 'react-router-redux'


export const menu = store => next => action => { //eslint-disable-line no-unused-vars
  if (action.type === CALL_HISTORY_METHOD) {
    hashHistory[action.payload.method](action.payload.args[0])
  }

  return next(action)
}

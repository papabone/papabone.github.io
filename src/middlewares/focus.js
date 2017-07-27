import {
  FOCUS
} from '../constants/app'

export const focusOnLoad = store => next => action => { //eslint-disable-line no-unused-vars
  if (action.type === FOCUS) {
    action.payload.focus()
  }

  return next(action)
}

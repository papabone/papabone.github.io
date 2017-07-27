import {
  FOCUS
} from '../constants/app'

export function focus(subject) {

  return (dispatch) => {

    dispatch({
      type: FOCUS,
      payload: subject
    })

  }
}

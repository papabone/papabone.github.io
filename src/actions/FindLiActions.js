import {
  FIND_LI
} from '../constants/findLi'

export function findLi(inner) {

  return (dispatch) => {

    dispatch({
      type: FIND_LI,
      payload: inner
    })

  }
}

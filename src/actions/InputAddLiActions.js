import {
  ADD_LI_FROM_INPUT
} from '../constants/inputAddLi'

export function addLiFromInput(inner) {

  return (dispatch) => {

    dispatch({
      type: ADD_LI_FROM_INPUT,
      payload: inner
    })

  }
}

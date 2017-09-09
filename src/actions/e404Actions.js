import {
  SHOW_ERROR_404
} from '../constants/e404'

export function showError404(isError) {

  return (dispatch) => {

    dispatch({
      type: SHOW_ERROR_404,
      payload: isError
    })

  }
}

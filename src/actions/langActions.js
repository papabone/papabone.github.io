import {
  CHANGE_LANGUAGE
} from '../constants/lang'

export function changeLang(lang) {

  return (dispatch) => {

    dispatch({
      type: CHANGE_LANGUAGE,
      payload: lang
    })

  }
}

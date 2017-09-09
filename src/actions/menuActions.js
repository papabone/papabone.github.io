import {
  OPEN_MENU,
  CLOSE_MENU 
} from '../constants/menu'

export function openMenu() {

  return (dispatch) => {

    dispatch({
      type: OPEN_MENU,
      payload: true
    })

  }
}

export function closeMenu() {

  return (dispatch) => {

    dispatch({
      type: CLOSE_MENU,
      payload: false
    })

  }
}

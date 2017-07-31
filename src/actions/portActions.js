import {
  TAB_LANDINGS,
  TAB_OLD_PORT,
  TAB_SPA
} from '../constants/port'

export function tabLandings() {

  return (dispatch) => {

    dispatch({
      type: TAB_LANDINGS,
      payload: 'landings'
    })

  }
}

export function tabOldPort() {

  return (dispatch) => {

    dispatch({
      type: TAB_OLD_PORT,
      payload: 'oldPort'
    })

  }
}

export function tabSPA() {

  return (dispatch) => {

    dispatch({
      type: TAB_SPA,
      payload: 'SPA'
    })

  }
}

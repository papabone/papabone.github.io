import {
  TAB_NUM_DEV,
  TAB_NUM_DES,
  FILTER_PROJECT,
  OPEN_PROJECT,
  CLOSE_PROJECT
} from '../constants/port'


export function tabNumDev(numer) {

  return (dispatch) => {

    dispatch({
      type: TAB_NUM_DEV,
      payload: numer
    })

  }
}

export function tabNumDes(numer) {

  return (dispatch) => {

    dispatch({
      type: TAB_NUM_DES,
      payload: numer
    })

  }
}

export function filterPtoject(name) {

  return (dispatch) => {

    dispatch({
      type: FILTER_PROJECT,
      payload: name
    })

  }
}

export function openProject() {

  return (dispatch) => {

    dispatch({
      type: OPEN_PROJECT,
      payload: true
    })

  }
}

export function closeProject() {

  return (dispatch) => {

    dispatch({
      type: CLOSE_PROJECT,
      payload: false
    })

  }
}

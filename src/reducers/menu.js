import {
  OPEN_MENU,
  CLOSE_MENU
} from '../constants/menu'

const initialState = {
  menuIsOpen: false
}

export default function toggleMenu(state = initialState, action) {

  switch (action.type) {
    case OPEN_MENU:
      return { ...state, menuIsOpen: true }

    case CLOSE_MENU:
      return { ...state, menuIsOpen: false }


    default:
      return state;
  }

}

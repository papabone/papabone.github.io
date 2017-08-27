import {
  CHANGE_LANGUAGE
} from '../constants/lang'

const initialState = {
  language: 'en'
}

export default function changeLang(state = initialState, action) {

  switch (action.type) {

    case CHANGE_LANGUAGE:
      return { ...state, language: action.payload }

    default:
      return state;
  }

}

import {
  SHOW_ERROR_404
} from '../constants/e404'

const initialState = {
  isE404: false,
  UI: {
    en: 'Page not found',
    ru: 'Страница не найдена'
  }
}

export default function showError404(state = initialState, action) {

  switch (action.type) {

    case SHOW_ERROR_404:
      return { ...state, isE404: action.payload }

    default:
      return state;
  }

}

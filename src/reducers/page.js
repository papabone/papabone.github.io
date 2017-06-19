import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAIL,
  GET_PHOTOS_AUTH_ERR
} from '../constants/page'

const initialState = {
  year: 2016,
  photos: [],
  fetching: false,
  error: ''
}

export default function page(state = initialState, action) {

  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return { ...state, year: action.payload, fetching: true, error: '' }

    case GET_PHOTOS_AUTH_ERR:
        return { ...state, error: action.payload.message, fetching: false }

    case GET_PHOTOS_SUCCESS:
      return { ...state, photos: action.payload, fetching: false, error: '' }

    case GET_PHOTOS_FAIL:
      return { ...state, error: action.payload.message, fetching: false }

    default:
      return state;
  }

}

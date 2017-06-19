import {
  ADD_LI_FROM_INPUT
} from '../constants/inputAddLi'

const initialState = [
    'empty',
    'test'
  ]

export default function inputAddLi(state = initialState, action) {

  switch (action.type) {
    case ADD_LI_FROM_INPUT:
      return [
        ...state, action.payload
      ]

    default:
      return state;
  }

}

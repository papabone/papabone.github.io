import {
  FIND_LI
} from '../constants/findLi'

const initialState = []

export default function filtredLi(state = initialState, action) {

  switch (action.type) {
    case FIND_LI:
      return  action.payload

    default:
      return state;
  }

}

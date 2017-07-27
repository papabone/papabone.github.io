import {
  LOCATION_CHANGE
} from 'react-router-redux'

const initialState = {
  who: 'main'
}

export default function setWho(state = initialState, action) {

  switch (action.type) {
    case LOCATION_CHANGE:
      var who = ''
      var path = action.payload.pathname
      if(path.indexOf('dev') > 0 ){
        who = 'dev'
      } else if(path.indexOf('des') > 0 ){
        who = 'des'
      } else{
        who = 'main'
      }
      return { ...state, who: who }

    default:
      return state;
  }

}

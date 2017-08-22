import { LOCATION_CHANGE } from 'react-router-redux'

export const routingAnimation = store => next => action => { //eslint-disable-line no-unused-vars

  const shell = document.body.querySelector('.shell')
  if(!shell)return;

  if ( (action.type === LOCATION_CHANGE) && (action.payload.action == 'PUSH') ) {
    leaveAnimation()
  } else if ( (action.type === LOCATION_CHANGE) && (action.payload.action == 'POP') ) {
    const f = next.bind(this, action)
    setTimeout( enterAnimation, 700 )
    return setTimeout( f, 700 )
  } else {
    return next(action)
  }

  function leaveAnimation(){
    //console.log('leave')

    shell.classList.add('leave')
  }

  function enterAnimation(){
    //console.log('enter')
    shell.classList.remove('leave')

  }


}

import { LOCATION_CHANGE } from 'react-router-redux'

export const routingDelay = store => next => action => { //eslint-disable-line no-unused-vars

  const shell = document.body.querySelector('.shell')
  if(!shell)return;

  if (action.type === LOCATION_CHANGE) {
    const f = next.bind(this, action)
    leaveAnimation()
    setTimeout( enterAnimation, 700 )
    return setTimeout( f, 700 )
  } else {
    return next(action)
  }

  function leaveAnimation(){
    shell.classList.remove('enter')
    shell.classList.add('leave')
  }

  function enterAnimation(){
    shell.classList.remove('leave')
    shell.classList.add('enter')
  }


}

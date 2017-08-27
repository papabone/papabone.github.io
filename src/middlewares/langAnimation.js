import { CHANGE_LANGUAGE } from '../constants/lang'

export const langAnimation = store => next => action => { //eslint-disable-line no-unused-vars

  const shell = document.body.querySelector('.shell')
  if(!shell)return;

  if  (action.type === CHANGE_LANGUAGE)  {
    leaveAnimation()
    const f = next.bind(this, action)
    setTimeout( enterAnimation, 700 )
    return setTimeout( f, 700 )
  } else {
    return next(action)
  }

  function leaveAnimation(){
    shell.classList.add('leave')
  }

  function enterAnimation(){
    shell.classList.remove('leave')
  }

}

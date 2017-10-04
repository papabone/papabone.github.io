import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
/*import { createLogger } from 'redux-logger'*/
import thunk from 'redux-thunk'
import { redirect } from '../middlewares/redirect'
import { routingAnimation } from '../middlewares/routingAnimation'
import { langAnimation } from '../middlewares/langAnimation'
import { menu } from '../middlewares/menu'


export default function configureStore(initialState) {
  //const logger = createLogger()
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk/*,logger*/,menu,redirect,routingAnimation,langAnimation )
    )
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

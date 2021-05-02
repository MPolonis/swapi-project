import React from 'react'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer, { rootSaga } from 'ducks/rootReducer'
import { identity, compose } from 'ramda'

const ReduxProvider = ({ children }) => {
  const middleware = createSagaMiddleware()

  const middlewares = [middleware]

  const reduxDevtools =
      typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
          ? window.__REDUX_DEVTOOLS_EXTENSION__()
          : identity()

  const enhancer = compose(applyMiddleware(...middlewares), reduxDevtools)
  const store = createStore(rootReducer, enhancer)
  middleware.run(rootSaga)

  return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider

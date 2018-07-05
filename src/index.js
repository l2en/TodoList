import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import './commonStyle/index.scss'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/reducers'
import {loadState, saveState} from './utils/dataFlow'
import {throttle} from 'lodash'
import Main from './main'
let preState = loadState()
const store = createStore(rootReducer, preState)

store.subscribe(throttle(() => {
    saveState(
      {
        todos:store.getState().todos
      }
    )
  }, 1000))
  ReactDOM.render(
    <Provider store={store} >
        <Main />
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker();

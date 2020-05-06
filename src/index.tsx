import 'antd/dist/antd.css'
import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { App } from './app/app'
import { configureStore } from './store/store'
import './styles/index.css'
import { UserClient } from './services/UserClient'

export const userControl = new UserClient()

const store = configureStore()
const rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement,
)

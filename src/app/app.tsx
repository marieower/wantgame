import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LoginRegister } from './loginRegister'
import { Main } from './main'
import Tmp from './tmp/'
import { useDispatch, useSelector } from 'react-redux'
import { userControlActions } from './userControl/actions'
import { useEffect } from 'react'
import { IRootState } from '../store/state'
import { Spin } from 'antd'

export const App = () => {
  const { isChecked } = useSelector((state: IRootState) => state.userControl)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isChecked) {
      dispatch(userControlActions.continueSession())
    }
  }, [isChecked, dispatch])

  if (!isChecked) {
    return (
      <Spin
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        tip='Загрузка...'
      />
    )
  }

  return (
    <Router>
      <Switch>
        <Route path='/tmp'>
          <Tmp />
        </Route>
        <Route path='/login-register'>
          <LoginRegister />
        </Route>
        <Route path='/'>
          <Main />
        </Route>
      </Switch>
    </Router>
  )
}

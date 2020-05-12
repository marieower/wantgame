import { Spin } from 'antd'
import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { IRootState } from '../store/state'
import { LoginRegister } from './loginRegister'
import { Main } from './main'
import { PageWrapper } from './pageWrapper'
import { userControlActions } from './userControl/actions'

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
        <Route path='/login-register'>
          <LoginRegister />
        </Route>
      </Switch>
      <PageWrapper>
        <Switch>
          <Route exact={true} path='/'>
            <Main />
          </Route>
        </Switch>
      </PageWrapper>
    </Router>
  )
}

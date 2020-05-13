import { Spin } from 'antd'
import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PrivateRoute } from '../shared/components/PrivateRoute'
import { IRootState } from '../store/state'
import { CreatedByMe } from './createdByMe'
import { Joined } from './joined'
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
          <PrivateRoute exact={true} path='/joined'>
            <Joined />
          </PrivateRoute>
          <PrivateRoute exact={true} path='/created-by-me'>
            <CreatedByMe />
          </PrivateRoute>
        </Switch>
      </PageWrapper>
    </Router>
  )
}

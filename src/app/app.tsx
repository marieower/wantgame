import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LoginRegister } from './loginRegister'
import { Main } from './main'
import Tmp from './tmp/'
import { PrivateRoute } from '../shared/components/PrivateRoute'

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/tmp'>
          <Tmp />
        </Route>
        <Route path='/login-register'>
          <LoginRegister />
        </Route>
        <PrivateRoute path='/'>
          <Main />
        </PrivateRoute>
      </Switch>
    </Router>
  )
}

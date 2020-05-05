import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LoginRegister } from './loginRegister'
import { Main } from './main'
import Tmp from './tmp/'

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
				<Route path='/'>
					<Main />
				</Route>
			</Switch>
		</Router>
	)
}

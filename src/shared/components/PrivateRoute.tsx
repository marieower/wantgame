import React, { ReactNode } from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { IRootState } from '../../store/state'

export const PrivateRoute = ({ children, ...rest }: RouteProps) => {
  const { user } = useSelector((state: IRootState) => state.userControl)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user !== null ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login-register',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

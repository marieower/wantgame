import { Spin } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, RouteProps, Redirect } from 'react-router-dom'
import { userControlActions } from '../../app/userControl/actions'
import { IRootState } from '../../store/state'

interface IRouteProps extends RouteProps {
  isPrivate?: boolean
}

export const PrivateRoute = ({ children, isPrivate, ...rest }: IRouteProps) => {
  const { user, isChecked } = useSelector(
    (state: IRootState) => state.userControl,
  )

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user !== null && isChecked ? (
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

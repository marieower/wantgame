import { UserDto } from '../../shared/dto/UserDto'
import { NewUserDto } from '../../shared/dto/NewUserDto'

export const USER_CONTROL_LOGIN = 'USER_CONTROL_LOGIN'
export const USER_CONTROL_LOGGED_IN = 'USER_CONTROL_LOGGED_IN'
export const USER_CONTROL_REGISTER = 'USER_CONTROL_REGISTER'
export const USER_CONTROL_LOGOUT = 'USER_CONTROL_LOGOUT'
export const USER_CONTROL_LOGGED_OUT = 'USER_CONTROL_LOGGED_OUT'

export const USER_CONTROL_SET_FETCHING = 'USER_CONTROL_SET_FETCHING'
export const USER_CONTROL_SET_ERROR = 'USER_CONTROL_SET_ERROR'

export const userControlActions = {
  login: (payload: { phone: string; password: string }) => ({
    type: USER_CONTROL_LOGIN,
    payload,
  }),

  loggedIn: (dto: UserDto) => ({
    type: USER_CONTROL_LOGGED_IN,
    payload: dto,
  }),

  register: (dto: NewUserDto) => ({
    type: USER_CONTROL_REGISTER,
    payload: dto,
  }),

  logout: () => ({
    type: USER_CONTROL_LOGOUT,
  }),

  loggedOut: () => ({
    type: USER_CONTROL_LOGGED_OUT,
  }),

  setFetching: (payload: boolean) => ({
    type: USER_CONTROL_SET_FETCHING,
    payload,
  }),

  setError: (payload: string) => ({
    type: USER_CONTROL_SET_ERROR,
    payload,
  }),
}

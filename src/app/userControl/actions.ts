import { UserDto } from '../../shared/dto/UserDto'
import { NewUserDto } from '../../shared/dto/NewUserDto'

export const USER_CONTROL_LOGIN = 'USER_CONTROL_LOGIN'
export const USER_CONTROL_LOGGED_IN = 'USER_CONTROL_LOGGED_IN'
export const USER_CONTROL_REGISTER = 'USER_CONTROL_REGISTER'
export const USER_CONTROL_LOGOUT = 'USER_CONTROL_LOGOUT'

export const USER_CONTROL_SET_FETCHING = 'USER_CONTROL_SET_FETCHING'

export const userControlActions = {
  login: (dto: Partial<UserDto>) => ({
    type: USER_CONTROL_LOGIN,
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

  setFetching: (payload: boolean) => ({
    type: USER_CONTROL_SET_FETCHING,
    payload,
  }),
}

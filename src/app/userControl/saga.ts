import { AxiosResponse } from 'axios'
import { put, takeEvery } from 'redux-saga/effects'
import { userControl } from '../..'
import { safeSagaExecute } from '../../middleware/saga'
import { NewUserDto } from '../../shared/dto/NewUserDto'
import { UserDto } from '../../shared/dto/UserDto'
import { IActionPayloaded } from '../../store/IAction'
import {
  userControlActions,
  USER_CONTROL_LOGIN,
  USER_CONTROL_REGISTER,
} from './actions'

export class UserControlApiSaga {
  public constructor() {
    this.login = this.login.bind(this)
    this.register = this.register.bind(this)
  }

  public static Initialize() {
    const saga = new UserControlApiSaga()
    return saga.watch()
  }

  public *watch() {
    yield takeEvery(USER_CONTROL_LOGIN, (a) => safeSagaExecute(a, this.login))
    yield takeEvery(USER_CONTROL_REGISTER, (a) =>
      safeSagaExecute(a, this.register),
    )
  }

  private *login(action: IActionPayloaded<Partial<UserDto>>) {
    yield put(userControlActions.setFetching(true))

    const response: AxiosResponse<UserDto> = yield userControl.login()

    if (response.status === 200) {
      yield put(userControlActions.loggedIn(response.data))
    } else {
    }

    yield put(userControlActions.setFetching(false))
  }

  private *register(action: IActionPayloaded<NewUserDto>) {
    yield put(userControlActions.setFetching(true))

    const response: AxiosResponse<UserDto> = yield userControl.register(
      action.payload,
    )

    if (response.status === 200) {
    } else {
    }

    yield put(userControlActions.setFetching(false))
  }
}

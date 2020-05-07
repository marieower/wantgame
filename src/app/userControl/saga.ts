import { AxiosResponse } from 'axios'
import { put, select, takeEvery } from 'redux-saga/effects'
import { safeSagaExecute } from '../../middleware/saga'
import { servicesActions } from '../../services/actions'
import { NewUserDto } from '../../shared/dto/NewUserDto'
import { IActionPayloaded } from '../../store/IAction'
import { IRootState } from '../../store/state'
import {
  userControlActions,
  USER_CONTROL_LOGIN,
  USER_CONTROL_LOGOUT,
  USER_CONTROL_REGISTER,
} from './actions'
import { useHistory } from 'react-router-dom'

export class UserControlApiSaga {
  public constructor() {
    this.login = this.login.bind(this)
    this.register = this.register.bind(this)
    this.logout = this.logout.bind(this)
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
    yield takeEvery(USER_CONTROL_LOGOUT, (a) => safeSagaExecute(a, this.logout))
  }

  private *login(
    action: IActionPayloaded<{ phone: string; password: string }>,
  ) {
    console.log(action.payload)
    const { userClient } = yield select((state: IRootState) => state.services)

    yield put(userControlActions.setFetching(true))
    yield put(userControlActions.setError(''))

    const response: AxiosResponse = yield userClient.login()

    if (response.status === 200) {
      yield put(userControlActions.loggedIn(response.data))

      yield put(servicesActions.updateUser(action.payload))

      localStorage.setItem('userId', String(response.data.id))
    } else {
      yield put(userControlActions.setError(response.data.error))
    }

    yield put(userControlActions.setFetching(false))
  }

  private *logout() {
    window.location.href = '/login-register'

    yield put(servicesActions.updateUser(null))
    yield put(userControlActions.loggedOut())
  }

  private *register(action: IActionPayloaded<NewUserDto>) {
    const { userClient } = yield select((state: IRootState) => state.services)

    yield put(userControlActions.setFetching(true))
    yield put(userControlActions.setError(''))

    const response: AxiosResponse = yield userClient.register(action.payload)

    if (response.status === 200) {
      console.log(response)
    } else {
      yield put(userControlActions.setError(response.data.error))
    }

    yield put(userControlActions.setFetching(false))
  }
}

import { AxiosResponse } from 'axios'
import { put, select, takeEvery } from 'redux-saga/effects'
import { safeSagaExecute } from '../../middleware/saga'
import { servicesActions } from '../../services/actions'
import { LoginDto } from '../../shared/dto/LoginDto'
import { NewUserDto } from '../../shared/dto/NewUserDto'
import { IActionPayloaded } from '../../store/IAction'
import { IRootState } from '../../store/state'
import {
  userControlActions,
  USER_CONTROL_CONTINUE_SESSION,
  USER_CONTROL_LOGIN,
  USER_CONTROL_LOGOUT,
  USER_CONTROL_REGISTER,
} from './actions'

export class UserControlApiSaga {
  public constructor() {
    this.login = this.login.bind(this)
    this.register = this.register.bind(this)
    this.logout = this.logout.bind(this)
    this.continueSession = this.continueSession.bind(this)
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
    yield takeEvery(USER_CONTROL_CONTINUE_SESSION, (a) =>
      safeSagaExecute(a, this.continueSession),
    )
  }

  private *login(action: IActionPayloaded<LoginDto>) {
    const { userClient } = yield select((state: IRootState) => state.services)

    yield put(userControlActions.setFetching(true))
    yield put(userControlActions.setError(''))

    const response: AxiosResponse = yield userClient.login()

    if (response.status === 200) {
      yield put(userControlActions.loggedIn(response.data))

      yield put(servicesActions.setUser(action.payload))

      localStorage.setItem('userId', String(response.data.id))
    } else {
      yield put(userControlActions.setError(response.data.error))
    }

    yield put(userControlActions.setFetching(false))
  }

  private *logout() {
    yield put(userControlActions.setFetching(true))

    yield put(servicesActions.execUser())
    yield put(userControlActions.loggedOut())

    window.location.href = '/login-register'

    yield put(userControlActions.setFetching(false))
  }

  private *register(action: IActionPayloaded<NewUserDto>) {
    const { userClient } = yield select((state: IRootState) => state.services)

    yield put(userControlActions.setFetching(true))
    yield put(userControlActions.setError(''))

    const response: AxiosResponse = yield userClient.register(action.payload)

    if (response.status === 201) {
      const { phone, password } = action.payload
      yield put(userControlActions.login({ phone, password }))
    } else {
      yield put(userControlActions.setError(response.data.error))

      yield put(userControlActions.setFetching(false))
    }
  }

  private *continueSession() {
    let token = localStorage.getItem('token')

    if (token) {
      token = Buffer.from(
        localStorage.getItem('token') as string,
        'base64',
      ).toString('utf8')

      const [phone, password] = token.split(':')

      yield this.login(userControlActions.login({ phone, password }))
    }

    yield put(userControlActions.setChecked(true))
  }
}

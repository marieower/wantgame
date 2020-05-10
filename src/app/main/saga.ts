import { AxiosResponse } from 'axios'
import { put, takeEvery, select } from 'redux-saga/effects'
import { safeSagaExecute } from '../../middleware/saga'
import { mainActions, MAIN_LOAD_DATA } from './actions'
import { IRootState } from '../../store/state'

export class MainApiSaga {
  public constructor() {
    this.loadData = this.loadData.bind(this)
  }

  public static Initialize() {
    const saga = new MainApiSaga()
    return saga.watch()
  }

  public *watch() {
    yield takeEvery(MAIN_LOAD_DATA, (a) => safeSagaExecute(a, this.loadData))
  }

  private *loadData() {
    const { gameClient } = yield select((state: IRootState) => state.services)

    yield put(mainActions.setFetching(true))

    const response: AxiosResponse = yield gameClient.getAll()

    yield put(mainActions.dataLoaded(response.data))

    yield put(mainActions.setFetching(false))
  }
}

import { AxiosResponse } from 'axios'
import { put, select, takeEvery } from 'redux-saga/effects'
import { safeSagaExecute } from '../../middleware/saga'
import { NewGameDto } from '../../shared/dto/NewGameDto'
import { IActionPayloaded } from '../../store/IAction'
import { IRootState } from '../../store/state'
import { gameFormActions, GAME_FORM_ADD } from './actions'
import { gameControlActions } from '../gameControl/actions'

export class GameFormApiSaga {
  public constructor() {
    this.add = this.add.bind(this)
  }

  public static Initialize() {
    const saga = new GameFormApiSaga()
    return saga.watch()
  }

  public *watch() {
    yield takeEvery(GAME_FORM_ADD, (a) => safeSagaExecute(a, this.add))
  }

  private *add(action: IActionPayloaded<NewGameDto>) {
    yield put(gameFormActions.setFetching(true))

    const { gameClient } = yield select((state: IRootState) => state.services)

    const response: AxiosResponse = yield gameClient.add(action.payload)

    if (response.status === 201) {
      yield put(gameFormActions.closeForm())
      yield put(gameControlActions.loadData())
    } else {
      yield put(gameFormActions.setFetching(false))
      yield put(gameFormActions.setError('Неверный формат данных'))
    }

    yield put(gameFormActions.setFetching(false))
  }
}

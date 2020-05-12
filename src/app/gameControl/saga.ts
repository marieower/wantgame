import { AxiosResponse } from 'axios'
import { put, takeEvery, select } from 'redux-saga/effects'
import { safeSagaExecute } from '../../middleware/saga'
import {
  gameControlActions,
  GAME_CONTROL_LOAD_DATA,
  GAME_CONTROL_LEFT,
  GAME_CONTROL_JOIN,
} from './actions'
import { IRootState } from '../../store/state'
import { IActionPayloaded } from '../../store/IAction'
import { GameDto } from '../../shared/dto/GameDto'

export class GameControlApiSaga {
  public constructor() {
    this.loadData = this.loadData.bind(this)
    this.join = this.join.bind(this)
    this.left = this.left.bind(this)
  }

  public static Initialize() {
    const saga = new GameControlApiSaga()
    return saga.watch()
  }

  public *watch() {
    yield takeEvery(GAME_CONTROL_LOAD_DATA, (a) =>
      safeSagaExecute(a, this.loadData),
    )
    yield takeEvery(GAME_CONTROL_JOIN, (a) => safeSagaExecute(a, this.join))
    yield takeEvery(GAME_CONTROL_LEFT, (a) => safeSagaExecute(a, this.left))
  }

  private *loadData() {
    const { gameClient } = yield select((state: IRootState) => state.services)

    yield put(gameControlActions.setFetching(true))

    const response: AxiosResponse = yield gameClient.getAll()

    yield put(gameControlActions.dataLoaded(response.data))

    yield put(gameControlActions.setFetching(false))
  }

  private *join(action: IActionPayloaded<number>) {
    yield put(gameControlActions.setFetching(true))

    const { gameClient } = yield select((state: IRootState) => state.services)
    const { games } = yield select((state: IRootState) => state.gameControl)
    const { id: userId } = yield select(
      (state: IRootState) => state.userControl.user,
    )

    const response: AxiosResponse = yield gameClient.join(action.payload)

    if (response.status === 201) {
      const game: GameDto = games.filter(
        (item: { id: number }) => action.payload === item.id,
      )[0]

      game.membersIds = game.membersIds.concat([userId])

      yield put(gameControlActions.dataLoaded(games))
    }

    yield put(gameControlActions.setFetching(false))
  }

  private *left(action: IActionPayloaded<number>) {
    yield put(gameControlActions.setFetching(true))

    const { gameClient } = yield select((state: IRootState) => state.services)
    const { games } = yield select((state: IRootState) => state.gameControl)
    const { id: userId } = yield select(
      (state: IRootState) => state.userControl.user,
    )

    const response: AxiosResponse = yield gameClient.left(action.payload)

    if (response.status === 200) {
      const game: GameDto = games.filter(
        (item: { id: number }) => action.payload === item.id,
      )[0]

      game.membersIds = game.membersIds.filter((item) => userId !== item)

      yield put(gameControlActions.dataLoaded(games))
    }

    yield put(gameControlActions.setFetching(false))
  }
}

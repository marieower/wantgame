import { all } from 'redux-saga/effects'
import { GameControlApiSaga } from '../app/gameControl/saga'
import { TmpApiSaga } from '../app/tmp/saga'
import { UserControlApiSaga } from '../app/userControl/saga'

export const rootSaga = function* root() {
  yield all([
    TmpApiSaga.Initialize(),
    GameControlApiSaga.Initialize(),
    UserControlApiSaga.Initialize(),
  ])
}

export function* safeSagaExecute(action: any, func: (a: any) => any) {
  try {
    yield func(action)
  } catch (error) {
    console.error(error)
  }
}

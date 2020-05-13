import { all } from 'redux-saga/effects'
import { GameControlApiSaga } from '../app/gameControl/saga'
import { GameFormApiSaga } from '../app/gameForm/saga'
import { UserControlApiSaga } from '../app/userControl/saga'

export const rootSaga = function* root() {
  yield all([
    GameControlApiSaga.Initialize(),
    UserControlApiSaga.Initialize(),
    GameFormApiSaga.Initialize(),
  ])
}

export function* safeSagaExecute(action: any, func: (a: any) => any) {
  try {
    yield func(action)
  } catch (error) {
    console.error(error)
  }
}

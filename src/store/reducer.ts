import { combineReducers } from 'redux'
import { GameControlReducer } from '../app/gameControl/reducer'
import { TmpReducer } from '../app/tmp/reducer'
import { IRootState } from './state'
import { UserControlReducer } from '../app/userControl/reducer'
import { ServicesReducer } from '../services/reducer'

export const rootReducer = combineReducers<IRootState>({
  tmp: TmpReducer.Create(),
  gameControl: GameControlReducer.Create(),
  userControl: UserControlReducer.Create(),
  services: ServicesReducer.Create(),
})

import { combineReducers } from 'redux'
import { GameControlReducer } from '../app/gameControl/reducer'
import { GameFormReducer } from '../app/gameForm/reducer'
import { UserControlReducer } from '../app/userControl/reducer'
import { ServicesReducer } from '../services/reducer'
import { IRootState } from './state'

export const rootReducer = combineReducers<IRootState>({
  gameControl: GameControlReducer.Create(),
  gameForm: GameFormReducer.Create(),
  userControl: UserControlReducer.Create(),
  services: ServicesReducer.Create(),
})

import { combineReducers } from 'redux'
import { MainReducer } from '../app/main/reducer'
import { TmpReducer } from '../app/tmp/reducer'
import { IRootState } from './state'
import { UserControlReducer } from '../app/userControl/reducer'

export const rootReducer = combineReducers<IRootState>({
  tmp: TmpReducer.Create(),
  main: MainReducer.Create(),
  userControl: UserControlReducer.Create(),
})

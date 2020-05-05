import { combineReducers } from 'redux'
import { MainReducer } from '../app/main/reducer'
import { TmpReducer } from '../app/tmp/reducer'
import { IRootState } from './state'

export const rootReducer = combineReducers<IRootState>({
	tmp: TmpReducer.Create(),
	main: MainReducer.Create(),
})

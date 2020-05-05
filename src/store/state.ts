import { IMainState } from '../app/main/state'
import { ITmpState } from '../app/tmp/state'

export interface IRootState {
	tmp: ITmpState
	main: IMainState
}

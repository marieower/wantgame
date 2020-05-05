import { IMainState } from '../app/main/state'
import { ITmpState } from '../app/tmp/state'
import { IUserControlState } from '../app/userControl/state'

export interface IRootState {
  tmp: ITmpState
  main: IMainState
  userControl: IUserControlState
}

import { IMainState } from '../app/main/state'
import { ITmpState } from '../app/tmp/state'
import { IUserControlState } from '../app/userControl/state'
import { IServicesState } from '../services/state'

export interface IRootState {
  tmp: ITmpState
  main: IMainState
  userControl: IUserControlState
  services: IServicesState
}

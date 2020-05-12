import { IGameControlState } from '../app/gameControl/state'
import { ITmpState } from '../app/tmp/state'
import { IUserControlState } from '../app/userControl/state'
import { IServicesState } from '../services/state'

export interface IRootState {
  tmp: ITmpState
  gameControl: IGameControlState
  userControl: IUserControlState
  services: IServicesState
}

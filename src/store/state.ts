import { IGameControlState } from '../app/gameControl/state'
import { IUserControlState } from '../app/userControl/state'
import { IServicesState } from '../services/state'

export interface IRootState {
  gameControl: IGameControlState
  userControl: IUserControlState
  services: IServicesState
}

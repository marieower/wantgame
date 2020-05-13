import { IGameControlState } from '../app/gameControl/state'
import { IGameFormState } from '../app/gameForm/state'
import { IUserControlState } from '../app/userControl/state'
import { IServicesState } from '../services/state'

export interface IRootState {
  gameControl: IGameControlState
  gameForm: IGameFormState
  userControl: IUserControlState
  services: IServicesState
}

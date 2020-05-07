import { GameClient } from './GameClient'
import { UserClient } from './UserClient'

export interface IServicesState {
  userClient: UserClient
  gameClient: GameClient
}

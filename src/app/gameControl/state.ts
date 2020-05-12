import { GameDto } from '../../shared/dto/GameDto'

export interface IGameControlState {
  games: GameDto[]
  isFetching: boolean
  currentGame?: number
}

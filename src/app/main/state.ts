import { GameDto } from '../../shared/dto/GameDto'

export interface IMainState {
  games: GameDto[]
  isFetching: boolean
}

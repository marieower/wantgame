import { NewGameDto } from '../../shared/dto/NewGameDto'

export interface IGameFormState {
  game: NewGameDto | null
  opened: boolean
  isFetching: boolean
  error: string
}

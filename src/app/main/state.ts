import { GameDto } from '../../shared/dto/GameDto'

export interface IMainState {
	games: Partial<GameDto>[]
	isFetching: boolean
}

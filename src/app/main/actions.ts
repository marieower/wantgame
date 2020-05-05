import { GameDto } from '../../shared/dto/GameDto'

export const MAIN_LOAD_DATA = 'MAIN_LOAD_DATA'
export const MAIN_DATA_LOADED = 'MAIN_DATA_LOADED'
export const MAIN_SET_FETCHING = 'MAIN_SET_FETCHING'

export const mainActions = {
	loadData: () => ({ type: MAIN_LOAD_DATA }),
	dataLoaded: (games: GameDto[]) => ({
		type: MAIN_DATA_LOADED,
		payload: games,
	}),
	setFetching: (isFetching: boolean) => ({
		type: MAIN_SET_FETCHING,
		payload: isFetching,
	}),
}

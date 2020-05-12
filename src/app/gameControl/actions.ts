import { GameDto } from '../../shared/dto/GameDto'
import { NewGameDto } from '../../shared/dto/NewGameDto'

export const GAME_CONTROL_LOAD_DATA = 'GAME_CONTROL_LOAD_DATA'
export const GAME_CONTROL_DATA_LOADED = 'GAME_CONTROL_DATA_LOADED'
export const GAME_CONTROL_SET_FETCHING = 'GAME_CONTROL_SET_FETCHING'
export const GAME_CONTROL_JOIN = 'GAME_CONTROL_JOIN'
export const GAME_CONTROL_LEFT = 'GAME_CONTROL_LEFT'
export const GAME_CONTROL_OPEN_MODAL = 'GAME_CONTROL_OPEN_MODAL'
export const GAME_CONTROL_CLOSE_MODAL = 'GAME_CONTROL_CLOSE_MODAL'
export const GAME_CONTROL_OPEN_FORM = 'GAME_CONTROL_OPEN_FORM'
export const GAME_CONTROL_CLOSE_FORM = 'GAME_CONTROL_CLOSE_FORM'
export const GAME_CONTROL_ADD = 'GAME_CONTROL_ADD'

export const gameControlActions = {
  loadData: () => ({ type: GAME_CONTROL_LOAD_DATA }),
  dataLoaded: (games: GameDto[]) => ({
    type: GAME_CONTROL_DATA_LOADED,
    payload: games,
  }),
  setFetching: (payload: boolean) => ({
    type: GAME_CONTROL_SET_FETCHING,
    payload,
  }),
  join: (payload: number) => ({
    type: GAME_CONTROL_JOIN,
    payload,
  }),
  left: (payload: number) => ({
    type: GAME_CONTROL_LEFT,
    payload,
  }),
  openModal: (payload: number) => ({
    type: GAME_CONTROL_OPEN_MODAL,
    payload,
  }),
  closeModal: () => ({
    type: GAME_CONTROL_CLOSE_MODAL,
  }),
  openForm: (payload: number | null) => ({
    type: GAME_CONTROL_OPEN_FORM,
    payload,
  }),
  closeForm: () => ({
    type: GAME_CONTROL_CLOSE_FORM,
  }),
  add: (payload: NewGameDto) => ({
    type: GAME_CONTROL_ADD,
    payload,
  }),
}

import { NewGameDto } from '../../shared/dto/NewGameDto'

export const GAME_FORM_OPEN_FORM = 'GAME_FORM_OPEN_FORM'
export const GAME_FORM_CLOSE_FORM = 'GAME_FORM_CLOSE_FORM'
export const GAME_FORM_ADD = 'GAME_FORM_ADD'
export const GAME_FORM_SET_FETCHING = 'GAME_FORM_SET_FETCHING'
export const GAME_FORM_SET_ERROR = 'GAME_FORM_SET_ERROR'

export const gameFormActions = {
  openForm: (payload: number | null) => ({
    type: GAME_FORM_OPEN_FORM,
    payload,
  }),
  closeForm: () => ({
    type: GAME_FORM_CLOSE_FORM,
  }),
  add: (payload: NewGameDto) => ({
    type: GAME_FORM_ADD,
    payload,
  }),
  setFetching: (payload: boolean) => ({
    type: GAME_FORM_SET_FETCHING,
    payload,
  }),
  setError: (payload: string) => ({
    type: GAME_FORM_SET_ERROR,
    payload,
  }),
}

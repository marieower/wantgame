import { IActionPayloaded } from '../../store/IAction'
import { IReducerPayloaded } from '../../store/IReducer'
import { IGameFormState } from './state'
import {
  GAME_FORM_OPEN_FORM,
  GAME_FORM_CLOSE_FORM,
  GAME_FORM_SET_FETCHING,
  GAME_FORM_SET_ERROR,
} from './actions'

const initialState: IGameFormState = {
  game: null,
  opened: false,
  isFetching: false,
  error: '',
}

export class GameFormReducer implements IReducerPayloaded<IGameFormState> {
  constructor() {
    this.reduce = this.reduce.bind(this)
  }

  public static Create() {
    const reducer = new GameFormReducer()
    return reducer.reduce
  }

  public reduce(
    state: IGameFormState = initialState,
    action: IActionPayloaded<any>,
  ): IGameFormState {
    let newState = { ...state }

    switch (action.type) {
      case GAME_FORM_OPEN_FORM:
        newState.error = ''
        newState.game = null
        newState.opened = true
        break
      case GAME_FORM_CLOSE_FORM:
        newState.error = ''
        newState.game = null
        newState.opened = false
        break
      case GAME_FORM_SET_FETCHING:
        newState.isFetching = action.payload
        break
      case GAME_FORM_SET_ERROR:
        newState.error = action.payload
        break
    }

    return newState
  }
}

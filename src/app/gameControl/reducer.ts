import { IActionPayloaded } from '../../store/IAction'
import { IReducerPayloaded } from '../../store/IReducer'
import { GAME_CONTROL_DATA_LOADED, GAME_CONTROL_SET_FETCHING } from './actions'
import { IGameControlState } from './state'

const initialState: IGameControlState = {
  games: [],
  isFetching: false,
}

export class GameControlReducer
  implements IReducerPayloaded<IGameControlState> {
  constructor() {
    this.reduce = this.reduce.bind(this)
  }

  public static Create() {
    const reducer = new GameControlReducer()
    return reducer.reduce
  }

  public reduce(
    state: IGameControlState = initialState,
    action: IActionPayloaded<any>,
  ): IGameControlState {
    let newState = { ...state }

    switch (action.type) {
      case GAME_CONTROL_DATA_LOADED:
        newState.games = [...action.payload]
        break
      case GAME_CONTROL_SET_FETCHING:
        newState.isFetching = action.payload
        break
    }

    return newState
  }
}

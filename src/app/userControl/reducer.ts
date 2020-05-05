import { IActionPayloaded } from '../../store/IAction'
import { IReducerPayloaded } from '../../store/IReducer'
import { IUserControlState } from './state'
import {
  USER_CONTROL_LOGOUT,
  USER_CONTROL_LOGGED_IN,
  USER_CONTROL_SET_FETCHING,
} from './actions'

const initialState: IUserControlState = {
  user: null,
  isFetching: false,
}

export class UserControlReducer
  implements IReducerPayloaded<IUserControlState> {
  constructor() {
    this.reduce = this.reduce.bind(this)
  }

  public static Create() {
    const reducer = new UserControlReducer()
    return reducer.reduce
  }

  public reduce(
    state: IUserControlState = initialState,
    action: IActionPayloaded<any>,
  ): IUserControlState {
    let newState = { ...state }

    switch (action.type) {
      case USER_CONTROL_LOGGED_IN:
        newState.user = { ...action.payload }
        break
      case USER_CONTROL_LOGOUT:
        newState.user = null
        localStorage.clear()
        break
      case USER_CONTROL_SET_FETCHING:
        newState.isFetching = action.payload
        break
    }

    return newState
  }
}

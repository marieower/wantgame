import { IActionPayloaded } from '../../store/IAction'
import { IReducerPayloaded } from '../../store/IReducer'
import {
  USER_CONTROL_LOGGED_IN,
  USER_CONTROL_LOGGED_OUT,
  USER_CONTROL_SET_ERROR,
  USER_CONTROL_SET_FETCHING,
  USER_CONTROL_SET_CHECKED,
} from './actions'
import { IUserControlState } from './state'

const initialState: IUserControlState = {
  user: null,
  isFetching: false,
  error: '',
  isChecked: false,
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
      case USER_CONTROL_LOGGED_OUT:
        newState.user = null
        localStorage.setItem('userId', '')
        break
      case USER_CONTROL_SET_FETCHING:
        newState.isFetching = action.payload
        break
      case USER_CONTROL_SET_ERROR:
        newState.error = action.payload
        break
      case USER_CONTROL_SET_CHECKED:
        newState.isChecked = action.payload
        break
    }

    return newState
  }
}

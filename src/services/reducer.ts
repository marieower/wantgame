import { IActionPayloaded } from '../store/IAction'
import { IReducerPayloaded } from '../store/IReducer'
import { IServicesState } from './state'
import { UserClient } from './UserClient'
import { GameClient } from './GameClient'
import { SERVICES_SET_USER, SERVICES_EXEC_USER } from './actions'

const token = localStorage.getItem('token') || undefined

const initialState: IServicesState = {
  userClient: new UserClient(token),
  gameClient: new GameClient(token),
}

export class ServicesReducer implements IReducerPayloaded<IServicesState> {
  constructor() {
    this.reduce = this.reduce.bind(this)
  }

  public static Create() {
    const reducer = new ServicesReducer()
    return reducer.reduce
  }

  public reduce(
    state: IServicesState = initialState,
    action: IActionPayloaded<any>,
  ): IServicesState {
    let newState = { ...state }

    switch (action.type) {
      case SERVICES_SET_USER:
        localStorage.setItem('token', '')
        newState.userClient = new UserClient(
          action.payload.phone,
          action.payload.password,
        )
        newState.gameClient = new GameClient(
          action.payload.phone,
          action.payload.password,
        )

        break
      case SERVICES_EXEC_USER:
        newState.userClient = new UserClient()
        newState.gameClient = new GameClient()
        localStorage.setItem('token', '')
        break
    }

    return newState
  }
}

import { IActionPayloaded } from '../store/IAction'
import { IReducerPayloaded } from '../store/IReducer'
import { IServicesState } from './state'
import { UserClient } from './UserClient'
import { GameClient } from './GameClient'
import { SERVICES_UPDATE_USER } from './actions'

const initialState: IServicesState = {
  userClient: new UserClient(),
  gameClient: new GameClient(),
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
      case SERVICES_UPDATE_USER:
        if (action.payload === null) {
          newState.userClient = new UserClient()
          newState.gameClient = new GameClient()
        } else {
          newState.userClient = new UserClient(
            action.payload.phone,
            action.payload.password,
          )
          newState.gameClient = new GameClient(
            action.payload.phone,
            action.payload.password,
          )
        }
        break
    }

    return newState
  }
}

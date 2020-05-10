import { IActionPayloaded } from '../store/IAction'
import { IReducerPayloaded } from '../store/IReducer'
import { IServicesState } from './state'
import { UserClient } from './UserClient'
import { GameClient } from './GameClient'
import { SERVICES_SET_USER, SERVICES_EXEC_USER } from './actions'

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
      case SERVICES_SET_USER:
        // Todo
        // const token = Buffer.from(
        //   `${action.payload.phone}:${action.payload.password}`,
        //   'utf8',
        // ).toString('base64')
        const token = Buffer.from('1:password', 'utf8').toString('base64')

        localStorage.setItem('token', token)

        newState.userClient = new UserClient(token)
        newState.gameClient = new GameClient(token)

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

import { IActionPayloaded } from '../../store/IAction'
import { IReducerPayloaded } from '../../store/IReducer'
import { MAIN_DATA_LOADED, MAIN_SET_FETCHING } from './actions'
import { IMainState } from './state'

const initialState: IMainState = {
	games: [],
	isFetching: false,
}

export class MainReducer implements IReducerPayloaded<IMainState> {
	constructor() {
		this.reduce = this.reduce.bind(this)
	}

	public static Create() {
		const reducer = new MainReducer()
		return reducer.reduce
	}

	public reduce(
		state: IMainState = initialState,
		action: IActionPayloaded<any>,
	): IMainState {
		let newState = { ...state }

		switch (action.type) {
			case MAIN_DATA_LOADED:
				newState.games = [...action.payload]
				break
			case MAIN_SET_FETCHING:
				newState.isFetching = action.payload
				break
		}

		return newState
	}
}

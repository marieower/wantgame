import { all } from 'redux-saga/effects'
import { MainApiSaga } from '../app/main/saga'
import { TmpApiSaga } from '../app/tmp/saga'

export const rootSaga = function* root() {
	yield all([TmpApiSaga.Initialize(), MainApiSaga.Initialize()])
}

export function* safeSagaExecute(action: any, func: (a: any) => any) {
	try {
		yield func(action)
	} catch (error) {
		console.error(error)
	}
}

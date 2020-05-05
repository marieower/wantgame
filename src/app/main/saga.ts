import { delay, put, takeEvery } from 'redux-saga/effects'
import { safeSagaExecute } from '../../middleware/saga'
import { IAction } from '../../store/IAction'
import { mainActions, MAIN_LOAD_DATA } from './actions'

export class MainApiSaga {
	public constructor() {
		this.loadData = this.loadData.bind(this)
	}

	public static Initialize() {
		const saga = new MainApiSaga()
		return saga.watch()
	}

	public *watch() {
		yield takeEvery(MAIN_LOAD_DATA, (a) => safeSagaExecute(a, this.loadData))
	}

	private *loadData(action: IAction) {
		yield put(mainActions.setFetching(true))
		yield delay(1000)

		yield put(
			mainActions.dataLoaded([
				{
					id: 0,
					name: 'Sample',
					currentPlayersCount: 0,
					minimumPlayers: 2,
					place: "Your mom's house",
					time: new Date().toDateString(),
					owner: {
						firstName: 'Vasya',
						lastName: 'Pupkin',
						id: 0,
					},
				},
				{
					id: 1,
					name: 'Sample',
					currentPlayersCount: 0,
					minimumPlayers: 2,
					place: "Your mom's house",
					time: new Date().toDateString(),
					owner: {
						firstName: 'Vasya',
						lastName: 'Pupkin',
						id: 1,
					},
				},
				{
					id: 2,
					name: 'Sample',
					currentPlayersCount: 0,
					minimumPlayers: 2,
					place: "Your mom's house",
					time: new Date().toDateString(),
					owner: {
						firstName: 'Vasya',
						lastName: 'Pupkin',
						id: 1,
					},
				},
				{
					id: 0,
					name: 'Sample',
					currentPlayersCount: 0,
					minimumPlayers: 2,
					place: "Your mom's house",
					time: new Date().toDateString(),
					owner: {
						firstName: 'Vasya',
						lastName: 'Pupkin',
						id: 0,
					},
				},
				{
					id: 1,
					name: 'Sample',
					currentPlayersCount: 0,
					minimumPlayers: 2,
					place: "Your mom's house",
					time: new Date().toDateString(),
					owner: {
						firstName: 'Vasya',
						lastName: 'Pupkin',
						id: 1,
					},
				},
				{
					id: 2,
					name: 'Sample',
					currentPlayersCount: 0,
					minimumPlayers: 2,
					place: "Your mom's house",
					time: new Date().toDateString(),
					owner: {
						firstName: 'Vasya',
						lastName: 'Pupkin',
						id: 1,
					},
				},
				{
					id: 0,
					name: 'Sample',
					currentPlayersCount: 0,
					minimumPlayers: 2,
					place: "Your mom's house",
					time: new Date().toDateString(),
					owner: {
						firstName: 'Vasya',
						lastName: 'Pupkin',
						id: 0,
					},
				},
				{
					id: 1,
					name: 'Sample',
					currentPlayersCount: 0,
					minimumPlayers: 2,
					place: "Your mom's house",
					time: new Date().toDateString(),
					owner: {
						firstName: 'Vasya',
						lastName: 'Pupkin',
						id: 1,
					},
				},
				{
					id: 2,
					name: 'Sample',
					currentPlayersCount: 0,
					minimumPlayers: 2,
					place: "Your mom's house",
					time: new Date().toDateString(),
					owner: {
						firstName: 'Vasya',
						lastName: 'Pupkin',
						id: 1,
					},
				},
				{
					id: 0,
					name: 'Sample',
					currentPlayersCount: 0,
					minimumPlayers: 2,
					place: "Your mom's house",
					time: new Date().toDateString(),
					owner: {
						firstName: 'Vasya',
						lastName: 'Pupkin',
						id: 0,
					},
				},
				{
					id: 1,
					name: 'Sample',
					currentPlayersCount: 0,
					minimumPlayers: 2,
					place: "Your mom's house",
					time: new Date().toDateString(),
					owner: {
						firstName: 'Vasya',
						lastName: 'Pupkin',
						id: 1,
					},
				},
				{
					id: 2,
					name: 'Sample',
					currentPlayersCount: 0,
					minimumPlayers: 2,
					place: "Your mom's house",
					time: new Date().toDateString(),
					owner: {
						firstName: 'Vasya',
						lastName: 'Pupkin',
						id: 1,
					},
				},
				{
					id: 0,
					name: 'Sample',
					currentPlayersCount: 0,
					minimumPlayers: 2,
					place: "Your mom's house",
					time: new Date().toDateString(),
					owner: {
						firstName: 'Vasya',
						lastName: 'Pupkin',
						id: 0,
					},
				},
				{
					id: 1,
					name: 'Sample',
					currentPlayersCount: 0,
					minimumPlayers: 2,
					place: "Your mom's house",
					time: new Date().toDateString(),
					owner: {
						firstName: 'Vasya',
						lastName: 'Pupkin',
						id: 1,
					},
				},
				{
					id: 2,
					name: 'Sample',
					currentPlayersCount: 0,
					minimumPlayers: 2,
					place: "Your mom's house",
					time: new Date().toDateString(),
					owner: {
						firstName: 'Vasya',
						lastName: 'Pupkin',
						id: 1,
					},
				},
			] as any),
		)
		yield put(mainActions.setFetching(false))
	}
}

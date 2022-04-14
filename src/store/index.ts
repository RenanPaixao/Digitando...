import { createStore } from 'vuex'
import { State } from '../interfaces'
import Http from '../services/Api'

export default createStore({
	state: ():State => {
		return {
			screenState:{
				isInitialScreen: true,
				isTimerOpen: false,
				isStopped: true
			}
		}
	},
	getters: {},
	actions: {},
	mutations: {
		toggleIsTimerOpen({screenState}){
			screenState.isTimerOpen = !screenState.isTimerOpen
		},
		toggleIsInitialScreen({screenState}){
			screenState.isInitialScreen = !screenState.isInitialScreen
		},
		toggleIsStopped({screenState}){
			screenState.isStopped = !screenState.isStopped
		}
	}
})
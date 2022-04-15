import { createStore } from 'vuex'
import { State } from '../interfaces'

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
	getters: {
		showMetric({screenState}){
			return !screenState.isInitialScreen && screenState.isStopped
		},
		isTypingStopped({screenState}){
			return !screenState.isInitialScreen && !screenState.isStopped
		},
		canStartTyping({screenState}){
			return screenState.isInitialScreen && !screenState.isTimerOpen
		}
	},
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
import { createStore } from 'vuex'
import { State } from '../interfaces'
import Http from '../services/Api'

export default createStore({
	state: ():State => {
		return {
			screenState:{
				isInitialScreen: true,
				isTimerOpen: false,
				isStopped: true,
				words: []
			}
		}
	},
	getters: {
		showMetric({screenState}){
			return !screenState.isInitialScreen && screenState.isStopped
		},
		isTypingRunning({screenState}){
			return !screenState.isInitialScreen && !screenState.isStopped
		},
		canStartTyping({screenState}){
			return screenState.isInitialScreen && !screenState.isTimerOpen
		}
	},
	actions: {
		async getWords({commit}){
			const words = await Http.getWords()
			commit('placeWords', words)
		}
	},
	mutations: {
		toggleIsTimerOpen({screenState}){
			screenState.isTimerOpen = !screenState.isTimerOpen
		},
		toggleIsInitialScreen({screenState}){
			screenState.isInitialScreen = !screenState.isInitialScreen
		},
		toggleIsStopped({screenState}){
			screenState.isStopped = !screenState.isStopped
		},
		placeWords({screenState}, words: string[]){
			screenState.words = words
		},
		resetAll({screenState}){
			screenState.isInitialScreen = true
			screenState.isStopped = true
			screenState.words = []
		}
	}
})
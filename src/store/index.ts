import { createStore } from 'vuex'
import { State } from '../interfaces'
import Http from '../services/Api'

export default createStore({
	state: ():State => {
		return {
				isInitialScreen: true,
				isTimerOpen: false,
				isStopped: true,
				words: []
		}
	},
	getters: {
		showMetric(state){
			return !state.isInitialScreen && state.isStopped
		},
		isTypingRunning(state){
			return !state.isInitialScreen && !state.isStopped
		},
		canStartTyping(state){
			return state.isInitialScreen && !state.isTimerOpen
		}
	},
	actions: {
		async getWords({commit}){
			const words = await Http.getWords()
			commit('placeWords', words)
		}
	},
	mutations: {
		toggleIsTimerOpen(state){
			state.isTimerOpen = !state.isTimerOpen
		},
		toggleIsInitialScreen(state){
			state.isInitialScreen = !state.isInitialScreen
		},
		toggleIsStopped(state){
			state.isStopped = !state.isStopped
		},
		placeWords(state, words: string[]){
			state.words = words
		},
		resetAll(state){
			state.isInitialScreen = true
			state.isStopped = true
			state.words = []
		}
	}
})
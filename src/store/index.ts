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
		showMetric(state: State): boolean{
			return !state.isInitialScreen && state.isStopped
		},
		isTypingRunning(state: State): boolean{
			return !state.isInitialScreen && !state.isStopped
		},
		canStartTyping(state: State): boolean{
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
		toggleIsTimerOpen(state: State){
			state.isTimerOpen = !state.isTimerOpen
		},
		toggleIsInitialScreen(state: State){
			state.isInitialScreen = !state.isInitialScreen
		},
		toggleIsStopped(state:State){
			state.isStopped = !state.isStopped
		},
		placeWords(state:State, words: string[]){
			state.words = words
		},
		resetAll(state:State){
			state.isInitialScreen = true
			state.isStopped = true
			state.words = []
		}
	}
})
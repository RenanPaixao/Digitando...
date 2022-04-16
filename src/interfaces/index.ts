export interface State{
	screenState: ScreenState
}

export interface ScreenState {
	isInitialScreen: boolean
	isTimerOpen: boolean
	isStopped: boolean
	words: string[]
}
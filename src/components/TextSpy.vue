<template>
	<div class="container">
		<div v-for="letter in text" :key="ids.next().value ?? 0" class="letters">
				{{letter}}
		</div>
	</div>
</template>

<script lang="ts" setup>
import { idGenerator } from '../Common/idGenerator'
import { State } from '../interfaces'
import { watch } from 'vue'
import { useStore } from 'vuex'

const ids = idGenerator()
const store = useStore()
const props = defineProps<{words: string[]}>()

const text = props.words.join(' ').split('')

const allLetters = document.getElementsByClassName('letters')
let indicatorPosition = 0

function handlePositionError(position: number): void{
	if(allLetters.length  < position || position < 0){
		throw new RangeError(`The position indicated doesn't exists`)
	}
}

function removeIndicator(position: number): void{
	handlePositionError(position)
	allLetters[position].classList.remove('indicator')
}

function addIndicator(position: number): void{
	handlePositionError(position)
	allLetters[position].classList.add('indicator')
}

function passIndicatorToNextLetter(): void{
	removeIndicator(indicatorPosition)
	indicatorPosition++
}

function addClassToLetter(letter: string): void{
	const isCorrect = text[indicatorPosition] === letter
	if(isCorrect){
		allLetters[indicatorPosition].classList.add('letters--correct')
	}else{
		allLetters[indicatorPosition].classList.add('letters--wrong')
	}
}

watch(store.state, (state: State)=>{
	//Start indicator blinking
	const blinkInterval = setInterval(()=>{
		if(!state.isStopped){
			addIndicator(indicatorPosition)
			const timeout = setTimeout(()=>{
				removeIndicator(indicatorPosition)
				clearTimeout(timeout)
			}, 500)
		}else{
			clearInterval(blinkInterval)
		}
	}, 1000)
})

function removeKeyboardListener(): void{
	document.removeEventListener('keypress', handleCaretAndTyping)
}

function handleCaretAndTyping(eventValue: KeyboardEvent): void{
	const canContinueTyping = text.length -1 !== indicatorPosition
	if(canContinueTyping){
		addClassToLetter(eventValue.key)
		passIndicatorToNextLetter()
	}else{
		store.commit('toggleIsStopped')
		removeKeyboardListener()
	}
}

watch(store.state, ()=>{
	if(store.getters.isTypingRunning){
		document.addEventListener('keypress', handleCaretAndTyping )
	}else{
		indicatorPosition = 0
		removeKeyboardListener()
	}
})

</script>

<style lang="scss" scoped>
.container{
	display: flex;
	flex-wrap: wrap;
	width: 80%;
	
	color: $color-border;
}
.letters{
	font-size: 1.6rem;
	min-width: 0.4ch;
	
	border-left: transparent solid 2px;
	color: $color-text-darker;
	&--correct{
		color: $color-white;
	}
	&--wrong{
		color: $color-text-wrong;
	}
}
.indicator{
	border-left: $color-text-yellow solid 2px;
}
</style>
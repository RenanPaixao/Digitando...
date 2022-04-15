<template>
	<div class="container">
		<div v-for="letter in text" :key="id()" class="letters">
				{{letter}}
		</div>
	</div>
</template>

<script lang="ts" setup>
import { watch } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const id = ()=> Date.now()

//words limit - 80
const words = Array(80).fill('one')
const text = words.join(' ').split('')

const allLetters = document.getElementsByClassName('letters')
let indicatorPosition = 0

function removeIndicator(position: number){
	allLetters[position].classList.remove('indicator')
}

function addIndicator(position: number){
	allLetters[position].classList.add('indicator')
}

function passIndicatorToNextLetter(){
	removeIndicator(indicatorPosition)
	indicatorPosition++
}

function addClassToLetter(letter: string){
	const isCorrect = text[indicatorPosition] === letter
	if(isCorrect){
		allLetters[indicatorPosition].classList.add('letters--correct')
	}else{
		allLetters[indicatorPosition].classList.add('letters--wrong')
	}
}

watch(store.state.screenState, (state)=>{
	//Start indicator blinking
	if(!state.isStopped){
		setInterval(()=>{
			addIndicator(indicatorPosition)
			const timeout = setTimeout(()=>{
				removeIndicator(indicatorPosition)
				clearTimeout(timeout)
			}, 500)
		}, 1000)
	}
})

watch(store.state.screenState, (state)=>{
	if(!state.isInitialScreen){
		document.addEventListener('keypress', (eventValue)=>{
			addClassToLetter(eventValue.key)
			passIndicatorToNextLetter()
		})
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
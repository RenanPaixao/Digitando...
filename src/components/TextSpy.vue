<template>
	<div class="container">
		<div v-for="letter in text" :key="id()" class="letters">
				{{letter}}
		</div>
	</div>
</template>

<script lang="ts" setup>
import { onMounted, watch } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const { screenState } = store.state

const id = ()=> Date.now()

const words = ['one', 'two', 'three']
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

onMounted(()=>{
	//Start indicator blinking
	setInterval(()=>{
		addIndicator(indicatorPosition)
		const timeout = setTimeout(()=>{
			removeIndicator(indicatorPosition)
			clearTimeout(timeout)
		}, 400)
	}, 1000)
})

watch(() => screenState.isInitialScreen, (isInitialScreen)=>{
	if(!isInitialScreen){
		document.addEventListener('keypress', ()=>{
			passIndicatorToNextLetter()
		})
	}
})

</script>

<style lang="scss" scoped>
.container{
	display: flex;
	width: min-content;
	
	color: $color-border;
}
.letters{
	font-size: 1.6rem;
	min-width: 0.4ch;
	
	border-left: transparent solid 2px;
	
	&--correct{
	
	}
}
.indicator{
	border-left: $color-text-yellow solid 2px;
}
</style>
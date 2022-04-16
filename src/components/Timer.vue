<template>
		<div class="container">
			<h6 @click="openChooseTimeBox">{{timeToShow.minutes}}:{{timeToShow.seconds}}</h6>
			<div class="overlay" v-if="isChoosing" @click.self="isChoosing = false">
				<div class="modal-container">
					<div class="container__indicator"/>
						<div class="c-inputs">
							<input type="number" v-model="time.minutes" min="0" max="59">
							<p>:</p>
							<input type="number" v-model="time.seconds" min="0" max="59">
							<div class="c-inputs__images">
								<img src="@/assets/images/sucess-button.png" alt="choose values button" @click="isChoosing = false">
								<img src="@/assets/images/close-button.png" alt="close button" @click="reset">
							</div>
					</div>
				</div>
			</div>
	</div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref, watch } from 'vue'
import { useStore } from 'vuex'

const emit = defineEmits(['stop'])

const store = useStore()
const state  = store.state
const time:any = reactive({
	minutes: 1,
	seconds: 0
})

const timeToShow = computed(()=>{
	const minutes = time.minutes < 10 ? '0' + time.minutes : time.minutes
	const seconds = time.seconds < 10 ? '0' + time.seconds : time.seconds
	return {minutes, seconds}
})

const isChoosing = ref(false)

function openChooseTimeBox(){
	if(state.isInitialScreen){
		isChoosing.value = true
	}
}

watch(isChoosing, () =>{
	store.commit('toggleIsTimerOpen')
})

// About current time and modal buttons actions
const currentTime = {
	minutes: time.minutes,
	seconds: time.seconds
}

watch(isChoosing, ()=>{
	currentTime.minutes = time.minutes
	currentTime.seconds = time.seconds
})

function reset(){
	time.minutes = currentTime.minutes
	time.seconds = currentTime.seconds
	isChoosing.value = false
}
let timeIn: NodeJS.Timer

watch(()=> state.isStopped, (stop)=>{
	if(stop){
		clearInterval(timeIn)
	}else {
		timeIn = setInterval(()=>{
			time.seconds--
		}, 1000)
	}
})

watch(()=> time.seconds, (_, prevTime)=>{
	if(prevTime === 0 && time.minutes !== 0){
		time.minutes--
		time.seconds = 59
	}
	if(time.minutes === 0 && time.seconds === 0){
		emit('stop')
		clearInterval(timeIn)
	}
})
</script>

<style scoped lang="scss">
h6{
	font-size: 1.6rem;
	width: 10rem;
	margin-right: 1rem;
	
	text-align: center;
	color: $color-text-yellow;
	font-family: "Fira Code", sans-serif;
}
.overlay{
	display: block;
	position: fixed;
	
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	
	background: rgba(0, 0, 0, 0.8);
}
.container{
	display: flex;
	justify-content: center;
	flex-direction: column;
	
	.modal-container{
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 10rem;
	}
	.container__indicator{
		width: 0;
		height: 0;
		border-left: 7px solid transparent;
		border-right: 7px solid transparent;
		
		border-bottom: 7px solid $color-background;
		margin-left: 3.5rem;
		transform: translateY(1px);
	}
}
.c-inputs{
	font-size: 2.3rem;
	width: min-content;
	
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.5rem 0.9rem;
	border-radius: 7px;
	
	color: $color-white;
	background-color: #191622;
	input{
		font-size: 1.3rem;
		width: 2.5ch;
		
		border: 2px solid;
		text-align: center;
		background: $color-background;
		color: $color-white;
	}
	
	p{
		transform: translateY(-3px);
	}
	.c-inputs__images{
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: min-content;
		img{
			width: 1rem;
			height: 1rem;
			
			margin: 3px 0 3px 10px;
			
			cursor: pointer;
		}
	}
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	
	input[type=number] {
		-moz-appearance: textfield;
	}
}

</style>
<template>
	<div class="initial-overlay">
		<h3 class="initial-overlay__message" @click="start">
			<img src="@/assets/images/play-arrow.png" alt="a green play arrow">
			Click or press any key to start!
		</h3>
	</div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import { watch } from 'vue'

const store = useStore()

function start(){
	store.commit('toggleIsStopped')
	store.commit('toggleIsInitialScreen')
}

watch(store.state.screenState, ()=>{
	document.addEventListener('keydown', ()=>{
		if(store.getters.canStartTyping){
			start()
		}
})
}, {immediate:true})

</script>

<style lang="scss" scoped>
	.initial-overlay{
	@include overlay;
	z-index: 10;
	backdrop-filter: blur(10%);
	
	.initial-overlay__message{
		font-weight: 600;
		
		display: flex;
		align-items: center;
		
		font-family: Fira Code, serif;
		color: $color-white;
		cursor: pointer;
		
		img{
			margin-right: 0.6rem;
		}
	}
}
</style>
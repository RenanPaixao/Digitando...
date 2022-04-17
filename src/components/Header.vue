<template>
	<header>
		<timer :stop="false" @stop="onStop" class="timer" v-if="canShowTimer"/>
		<h2 v-else>Time's Up!</h2>
	</header>
</template>

<script lang="ts" setup>
import Timer from '@/components/Timer.vue'
import { useStore } from 'vuex'
import { ref, watch } from 'vue'

const store = useStore()
const canShowTimer = ref(true)

function onStop(){
	store.commit('toggleIsStopped')
	canShowTimer.value = false
}

watch(store.state, ()=>{
	canShowTimer.value = !store.getters.showMetric
})

</script>

<style scoped lang="scss">
header{
	width: 100%;
	padding-top: 8rem;
	display: flex;
	justify-content: center;
	position: absolute;
	z-index: 9999;
	
	h2{
		font-size: 3rem;
		
		font-family: "Fira Code", sans-serif;
		color: $color-text-yellow;
	}
}
timer{
	right: 50%;
}
</style>
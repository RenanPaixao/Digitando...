<template>
	<header v-if="canShow">
		<timer :stop="false" @stop="onStop" class="timer"/>
	</header>
</template>

<script lang="ts" setup>
import Timer from '@/components/Timer.vue'
import { useStore } from 'vuex'
import { ref, watch } from 'vue'

const store = useStore()
const canShow = ref(true)

function onStop(){
	store.commit('toggleIsStopped')
	canShow.value = false
}

watch(store.state.screenState, ()=>{
	canShow.value = !store.getters.showMetric
})

</script>

<style scoped>
header{
	width: 100%;
	padding-top: 8rem;
	display: flex;
	justify-content: center;
	position: absolute;
	z-index: 9999;
}
timer{
	right: 50%;
}
</style>
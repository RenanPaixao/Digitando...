<template>
	<header>
		<timer :stop="false" @stop="onStop" class="timer"/>
	</header>
</template>

<script lang="ts" setup>
import Timer from '@/components/Timer.vue'
import { useStore } from 'vuex'

const store = useStore()

function onStop(){
	store.commit('toggleIsStopped')
}

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
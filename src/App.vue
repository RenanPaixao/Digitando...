<template>
	<div>
		<press-start v-if="isPaused" @start="startTyping"/>
	</div>
</template>

<script lang="ts" setup>
import PressStart from './components/PressStart.vue'
import { ref } from 'vue'

const isPaused = ref(true)
function startTyping(){
	isPaused.value = !isPaused.value
}
</script>

<style lang="scss">
</style>

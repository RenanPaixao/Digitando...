<template>
	<section class="c-typing">
		<press-start v-if="isPaused" @start="isPaused=false"/>
	</section>
</template>

<script lang="ts" setup>
import PressStart from '@/components/PressStart.vue'
import { onBeforeMount, ref } from 'vue'

const isPaused = ref(true)
onBeforeMount(()=>{
	document.addEventListener('keydown', ()=>{
		isPaused.value = false
	})
})
</script>

<style lang="scss" scoped>
.c-typing{
	background-color: $color-white;
	height: 100vh;
}

</style>
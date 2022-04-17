<template>
	<section class="c-typing">
		<press-start v-if="showInitialScreen"/>
		<text-spy :words="words" class="container-words" v-if="words.length > 0"/>
	</section>
</template>

<script lang="ts" setup>
import PressStart from '@/components/PressStart.vue'
import TextSpy from '@/components/TextSpy.vue'
import { State } from '../interfaces'
import { useStore } from 'vuex'
import { ref, watch } from 'vue'

const store = useStore()
const showInitialScreen = ref(true)
const words = ref<string[]>([])

watch(store.state, (state:State) => {
	showInitialScreen.value = state.isInitialScreen
	
	if(state.words.length > 0){
		words.value = state.words
	}else{
		words.value = []
		store.dispatch('getWords')
	}
}, {immediate: true})
</script>

<style lang="scss" scoped>
.c-typing{
	background-color: $color-background;
	height: 100vh;
}
.container-words{
	position: relative;
	top: 35%;
	left: 50%;
	transform: translateX(-50%);
}

</style>
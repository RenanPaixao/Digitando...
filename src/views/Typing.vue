<template>
	<section class="c-typing">
		<press-start v-if="showInitialScreen"/>
		<text-spy class="container-words"/>
	</section>
</template>

<script lang="ts" setup>
import PressStart from '@/components/PressStart.vue'
import TextSpy from '@/components/TextSpy.vue'
import { useStore } from 'vuex'
import { ref, watch } from 'vue'

const store = useStore()

const showInitialScreen = ref(true)

watch(store.state.screenState, state => {
	showInitialScreen.value = state.isInitialScreen
})
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
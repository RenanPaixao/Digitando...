<template>
	<div class="container">
		<img class="container__arrow" src="@/assets/images/reload.png" alt="An yellow arrow representing a return or reload" @click="reset">
	</div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'

const store = useStore()

function reset(){
	store.commit('resetAll')
}
</script>

<style scoped lang="scss">
.container{
	position: absolute;
	z-index: 10;
	bottom: 25%;
	right: 50%;
	transform: translateX(50%);
	&__arrow{
		cursor: pointer;
	}
}


</style>
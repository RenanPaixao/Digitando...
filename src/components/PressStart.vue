<template>
	<div class="initial-overlay">
	<h3 class="initial-overlay__message" @click="start"> <img src="@/assets/images/play-arrow.png" alt="a green play arrow"> Click or press any key to start!</h3>
	</div>
</template>

<script lang="ts" setup>
const emits = defineEmits(['start'])
function start(){
	emits('start')
}

</script>

<style lang="scss" scoped>
	.initial-overlay{
		@include overlay;
		
		.initial-overlay__message{
			font-weight: 600;
			
			display: flex;
			align-items: center;
			
			font-family: Fira Code, serif;
			color: #FFF;
			cursor: pointer;
			
			img{
				margin-right: 0.6rem;
			}
		}
	}
</style>
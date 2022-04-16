<template>
	<div class="container">
		<div class="container__metric-box">
			<h3>CON <span>80%</span></h3>
			<h3>ACC <span>90%</span></h3>
			<h3>WPM <span>30%</span></h3>
		</div>
		<div class="container__metric-box">
			<h3>WORDS <span>250/300</span></h3>
			<h3>TIME <span>01:00:00</span></h3>
		</div>
	</div>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
.container{
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
	
	justify-content: center;
	align-items: center;
	background-color: $color-background;
	
	.container__metric-box{
		display: flex;
		justify-content: space-between;
		width: 30%;
		text-align: center;
		h3{
			display: flex;
			width: min-content;
			font-size: 2rem;
			
			flex-direction: column;
			padding: 0.5rem;
			font-family: "DM Mono", monospace;
			color: $color-white;
			
			span{
				font-size: 1.6rem;
				
				font-family: "Fira Code", sans-serif;
				color: $color-text-yellow;
			}
		}
	}
}
</style>
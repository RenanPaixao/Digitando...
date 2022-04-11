<template>
	<header>
		<timer :stop="false" class="timer"/>
	</header>
</template>

<script lang="ts" setup>
import Timer from '@/components/Timer.vue'

</script>

<style scoped>
header{
	width: 100%;
	padding: 2rem 0;
	display: flex;
	justify-content: center;
	position: absolute;
	z-index: 9999;
}
timer{
	right: 50%;
}
</style>
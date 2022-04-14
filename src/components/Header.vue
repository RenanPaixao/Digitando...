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
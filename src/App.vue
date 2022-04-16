<template>
	<Header/>
	<metric v-if="showMetric"/>
	<typing v-else/>
	<Footer/>
</template>

<script lang="ts" setup>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import Typing from '@/views/Typing.vue'
import { useStore } from 'vuex'
import Metric from './views/Metric.vue'
import { ref, watch } from 'vue'

const store = useStore()
const showMetric = ref(false)

watch(store.state.screenState, () => {
	showMetric.value = store.getters.showMetric
})
</script>

<style lang="scss">
@import './assets/styles/reset.scss';
</style>

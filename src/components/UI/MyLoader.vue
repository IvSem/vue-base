<template>
	<div class="container">
		<RingLoader :color="color1" :size="size"></RingLoader>
	</div>
</template>

<script>
import RingLoader from 'vue-spinner/src/RingLoader.vue';

export default {
	name: 'MyLoader',
	components: {
		RingLoader,
	},
	data() {
		return {
			color1: '#000000',
			size: '200px',
			margin: '2px',
			radius: '2px',
		};
	},
};
</script>

<style scoped>
.container {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>

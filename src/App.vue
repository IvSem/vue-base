<template>
	<MyNavBar />
	<div class="app">
		<RouterView></RouterView>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
};
</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.app {
	overflow: hidden;
}
</style>

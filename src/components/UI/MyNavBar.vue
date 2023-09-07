<template>
	<div class="navbar">
		<div class="navbar__container">
			<div class="navbar__logo" @click="$router.push('/')">Logo</div>
			<div class="navbar__btns">
				<my-button class="navbar__link" @click="$router.push('/posts')">Пости</my-button>
				<my-button class="navbar__link" @click="$router.push('/about')">Про нас</my-button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'MyNavBar',
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
.navbar {
	padding: 15px;
	background-color: lightblue;
	// .navbar__container
	&__container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	// .navbar__logo
	&__logo {
		font-size: 36px;
		font-weight: 700;
		cursor: pointer;
	}
	// .navbar__btns
	&__btns {
		display: flex;
		align-items: center;
		column-gap: 12px;
	}
}
</style>

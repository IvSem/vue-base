<template>
	<h1>Пост з ID : {{ $route.params.id }}</h1>

	<div v-if="post" class="post">
		<div class="post__title">{{ post.title }}</div>
		<div class="post__body">{{ post.body }}</div>
	</div>

	<my-loader v-else />
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			isLoading: false,
			post: null,
		};
	},
	mounted() {
		this.fetchOnePost(this.$route.params.id);
	},

	methods: {
		async fetchOnePost(id) {
			try {
				this.isLoading = true;
				const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
				console.log('res', response);
				this.post = response.data;
			} catch (error) {
				alert(error);
			} finally {
				this.isLoading = false;
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.post {
	// .post__title
	&__title {
		font-size: 48px;
		color: blueviolet;
		margin-bottom: 24px;
	}
	// .post__body
	&__body {
		padding: 12px;
		font-size: 36px;
		color: black;
	}
}
</style>

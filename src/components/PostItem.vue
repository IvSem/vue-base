<template>
	<li class="post">
		<div>
			<div><strong>Номер</strong> {{ post.id }}</div>
			<div><strong>Назва</strong> {{ post.title }}</div>
			<div><strong>Опис</strong> {{ post.body }}</div>
		</div>
		<div class="post__btns">
			<MyButton type="button" @click="$router.push(`/posts/${post.id}`)">Детальніше</MyButton>
			<MyButton type="button" @click="deletePost">Видалити</MyButton>
		</div>
	</li>
</template>

<script>
export default {
	props: {
		post: { type: Object, required: true },
	},
	emits: ['remove-post', 'remove'],

	methods: {
		deletePost() {
			this.$emit('remove-post', this.post);
		},
	},
};
</script>

<style lang="scss" scoped>
.post {
	padding: 10px;
	border: 2px solid blue;
	display: flex;
	align-items: center;
	justify-content: space-between;
	column-gap: 24px;

	&:not(:last-child) {
		margin-bottom: 10px;
	}

	// .post__btns
	&__btns {
		display: flex;
		align-items: center;
		column-gap: 12px;
	}
}
</style>

<template>
	<div class="post">
		<div>
			<div><strong>Назва</strong> {{ post.title }}</div>
			<div><strong>Опис</strong> {{ post.body }}</div>
		</div>
		<div class="post__btns">
			<MyButton type="button" @click="deletePost">Видалити</MyButton>
		</div>
	</div>
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

<style scoped>
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
}
</style>

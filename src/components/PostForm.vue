<template>
	<form @submit.prevent>
		<h4>Створення поста</h4>
		<MyInput v-model="post.title" type="text" placeholder="Введіть назву" />
		<MyInput v-model="post.body" type="text" placeholder="Введіть опис" />
		<MyButton @click="createPost">Створити</MyButton>
	</form>
</template>

<script>
export default {
	emits: ['create'],
	data() {
		return {
			post: {
				title: '',
				body: '',
			},
		};
	},
	methods: {
		createPost() {
			this.post.id = Date.now();
			this.$emit('create', this.post);
			this.post = { title: '', body: '' };
		},
	},
};
</script>

<style scoped>
form {
	display: grid;
	gap: 10px;
	max-width: 50vw;
	margin: 0 auto;
	margin-bottom: 24px;
}

form button {
	justify-self: end;
}
</style>

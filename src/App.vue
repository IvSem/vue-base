<template>
	<div class="app">
		<div class="header">
			<div>
				<h3>Створити Пост</h3>
				<button class="create" type="button" @click="showModal">+</button>
			</div>
			<ag-select
				v-model="friend"
				:options="options"
				read-text="text"
				read-value="id"
				search="true"
				placeholder="Select Language"
			></ag-select>
		</div>
		<MyDialog v-model:show="dialogVisiable"><PostForm @create="createPost" /></MyDialog>
		<PostList v-if="!isLoading" :posts="posts" @remove-post="removePost" />
		<MyLoader v-else />
	</div>
</template>

<script>
import axios from 'axios';
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
import AgSelect from './components/UI/AgSelect';

export default {
	components: {
		PostForm,
		PostList,
		AgSelect,
	},
	data() {
		return {
			posts: [],
			dialogVisiable: false,
			isLoading: false,
			options: ['Ross', 'Rachel', 'Chandler', 'Monica', 'Joey', 'Phoebe'],
			friend: '',
		};
	},

	mounted() {
		console.log('Mount App.vue');
		this.fetchPosts();
	},

	methods: {
		createPost(post) {
			this.posts.push(post);
			this.dialogVisiable = false;
		},
		removePost(post) {
			console.log('remove');
			this.posts = this.posts.filter((el) => el.id !== post.id);
		},
		showModal() {
			this.dialogVisiable = true;
		},

		async fetchPosts() {
			try {
				this.isLoading = true;
				const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
				this.posts = [...response.data];
			} catch (error) {
				alert(error);
			} finally {
				this.isLoading = false;
			}
		},
	},
};
</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
body {
	padding: 10px;
}

.create {
	width: 50px;
	height: 50px;
	background-color: pink;
	border-radius: 50%;
}
.header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	column-gap: 24px;
	margin-bottom: 24px;
	> div {
		display: flex;
		align-items: center;
		column-gap: 24px;
	}
}
</style>

<template>
	<div class="app">
		<div class="header">
			<div>
				<h3>Створити Пост</h3>
				<button class="create" type="button" @click="showModal">+</button>
			</div>

			<MyInput v-model="searchQuery" placeholder="Пошук.." />
			<div>
				<p><strong>Сортувати по:</strong></p>
				<ag-select
					v-model="selectedSort"
					:options="sortOptions"
					read-text="name"
					read-value="value"
					placeholder="Оберіть категорію"
				></ag-select>
			</div>
		</div>
		<MyDialog v-model:show="dialogVisiable"><PostForm @create="createPost" /></MyDialog>
		<PostList v-if="!isLoading" :posts="sortedSearchPosts" @remove-post="removePost" />
		<MyLoader v-else />
		<MyPagination v-model:page="page" :total-page="totalPage" :is-loading="isLoading" />
	</div>
</template>

<script>
import axios from 'axios';
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
import AgSelect from './components/UI/AgSelect';
import MyInput from './components/UI/MyInput.vue';
import MyPagination from './components/UI/MyPagination.vue';

export default {
	components: {
		PostForm,
		PostList,
		AgSelect,
		MyInput,
		MyPagination,
	},
	data() {
		return {
			posts: [],
			dialogVisiable: false,
			isLoading: false,
			sortOptions: [
				{ value: 'title', name: 'По назві' },
				{ value: 'body', name: 'По опису' },
				{ value: 'id', name: 'По номеру' },
				{ value: 'last', name: 'Найновіші' },
			],
			selectedSort: '',
			searchQuery: '',
			page: 1,
			limit: 10,
			totalPage: 0,
		};
	},

	computed: {
		sortedPosts() {
			if (this.selectedSort == 'last') {
				return [...this.posts].reverse();
			}
			if (this.selectedSort == 'id') {
				return [...this.posts].sort((a, b) => a.id - b.id);
			}
			return [...this.posts].sort((a, b) => a[this.selectedSort]?.localeCompare(b[this.selectedSort]));
		},

		sortedSearchPosts() {
			return this.sortedPosts.filter(
				(post) =>
					post.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
					post.body.toLowerCase().includes(this.searchQuery.toLowerCase())
			);
		},
	},

	watch: {
		page() {
			this.fetchPosts();
		},
	},

	mounted() {
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
				const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
					params: {
						_page: this.page,
						_limit: this.limit,
					},
				});

				this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit);
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

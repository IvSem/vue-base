<template>
	<template v-if="posts.length > 0">
		<h3>Список постів:</h3>
		<transition-group name="list" tag="ul">
			<PostItem v-for="post in posts" :key="post.id" :post="post" @remove-post="$emit('remove-post', post)" />
		</transition-group>
	</template>
	<h2 v-else>Список постів пустий :(</h2>
</template>

<script>
import PostItem from './PostItem.vue';

export default {
	components: { PostItem },
	props: {
		posts: {
			type: Array,
			required: true,
		},
	},
	emits: ['remove-post', 'remove'],
};
</script>

<style scoped>
h3 {
	color: blueviolet;
	font-size: 36px;
	font-weight: 700;
	margin-bottom: 24px;
}

.list-enter-active,
.list-leave-active {
	transition: all 0.4s ease;
}
.list-enter-from,
.list-leave-to {
	opacity: 0;
	transform: translateX(30px);
}
.list-move {
	transition: transform 0.8s ease;
}
</style>

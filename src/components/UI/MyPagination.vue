<template>
	<div v-if="!isLoading" class="pagination">
		<ul class="pagination__list">
			<li
				v-for="pageNumber in totalPage"
				:key="pageNumber"
				class="pagination__item"
				:class="{ current: pageNumber === page }"
				@click="changePage(pageNumber)"
			>
				{{ pageNumber }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'MyPagination',
	props: {
		totalPage: {
			type: Number,
			default: 0,
		},
		page: {
			type: Number,
			default: 0,
		},
		isLoading: {
			type: Boolean,
			default: false,
		},
	},
	emits: ['update:page'],
	data() {
		return {};
	},

	methods: {
		changePage(pageNumber) {
			this.$emit('update:page', pageNumber);
		},
	},
};
</script>

<style lang="scss" scoped>
.pagination {
	margin-top: 24px;
	display: flex;
	justify-content: center;
	// .pagination__list
	&__list {
		display: flex;
		align-items: center;
		column-gap: 12px;
		list-style: none;
	}
	// .pagination__item
	&__item {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 35px;
		height: 35px;
		border: 1px solid blue;
		cursor: pointer;
		transition: all 0.3s;

		&.current {
			background-color: rgb(113, 198, 198);
		}

		@media (any-hover: hover) {
			&:hover {
				background-color: rgb(113, 198, 198);
			}
		}
	}
}
</style>

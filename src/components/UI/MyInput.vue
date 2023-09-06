<template>
	<input class="input" :value="modelValue" @input="updateInput" />
</template>

<script>
export default {
	name: 'MyInput',

	props: {
		modelValue: {
			type: [String, Number],
			required: true,
		},
	},
	emits: ['update:model-value'],

	methods: {
		updateInput(event) {
			this.$emit('update:model-value', event.target.value);
		},
	},
};
</script>

<style scoped></style>

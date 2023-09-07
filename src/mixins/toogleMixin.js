export default {
	props: {
		show: {
			type: Boolean,
			default: false,
		},
	},
	emits: ['update:show'],
	methods: {
		closeDialog() {
			this.$emit('update:show', false);
		},
	},
};

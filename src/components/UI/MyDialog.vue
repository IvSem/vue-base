<template>
	<div v-if="show" class="dialog" @click.stop="closeDialog">
		<div class="dialog__content" @click.stop>
			<button class="dialog__close" type="button" @click="closeDialog">
				<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
					<path
						d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"
					></path>
				</svg>
			</button>
			<slot></slot>
		</div>
	</div>
</template>

<script>
import toogleMixin from '@/mixins/toogleMixin';
export default {
	name: 'MyDialog',

	mixins: [toogleMixin],
};
</script>

<style scoped>
.dialog {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
}
.dialog__content {
	padding: 20px;
	position: relative;
	background-color: #ffffff;
	border-radius: 12px;
	min-width: 300px;
	min-height: 50px;
}
.dialog__close {
	position: absolute;
	width: 30px;
	height: 30px;
	color: black;
	top: 15px;
	right: 15px;
	background-color: transparent;
	border: none;
	outline: none;
	cursor: pointer;
}
.dialog__close svg {
	width: 100%;
	height: 100%;
	pointer-events: none;
}
</style>

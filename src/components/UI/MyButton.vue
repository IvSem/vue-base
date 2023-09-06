<template>
	<button type="button" class="btn"><slot></slot></button>
</template>

<script>
export default {
	name: 'MyButton',
};
</script>

<style scoped>
.btn {
	padding: 10px;
	background-color: rgb(55, 210, 210);
	color: rgb(52, 46, 46);
	border-radius: 5px;
	font-size: 16px;
	font-weight: 700;
	transition: all 0.3s;
	border: none;
	cursor: pointer;
}

.btn:hover {
	box-shadow: 1px 2px 20px rgba(189, 73, 73, 0);
	background-color: rgb(23, 61, 61);
	color: wheat;
}
</style>

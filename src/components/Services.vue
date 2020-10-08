<template>
	<div>
		<div class="service">
			<h1 class="title">Our Services</h1>
			<div class="wrapper">
				<div class="item">1</div>
				<div class="item">2</div>
				<div class="item">3</div>
				<div class="item">4</div>
				<div class="item">5</div>
				<div class="item">6</div>
				<div class="item">7</div>
				<div class="item">8</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Services",
	};
</script>

<style lang="css" scoped>
	.title {
		text-align: center;
	}
	.wrapper {
		max-height: 120px;
		display: flex;
		overflow-x: auto;
	}
	.wrapper::-webkit-scrollbar {
		width: 0;
	}
	.wrapper .item {
		min-width: 110px;
		height: 110px;
		line-height: 110px;
		text-align: center;
		background-color: #ddd;
		margin-right: 2px;
	}
</style>

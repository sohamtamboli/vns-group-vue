<template>
	<div class="bg">
		<h1 class="title p-3">Our Services</h1>
		<carousel
			:autoplay="true"
			:nav="false"
			:dots="false"
			:responsive="{ 0: { items: 2 }, 600: { items: 5 } }"
			:stagePadding="20"
			loop
		>
			<div class="img-container">
				<img class="item" src="https://placeimg.com/200/200/any?1" />
			</div>
			<div class="img-container">
				<img class="item" src="https://placeimg.com/200/200/any?5" />
			</div>
			<div class="img-container">
				<img class="item" src="https://placeimg.com/200/200/any?4" />
			</div>
			<div class="img-container">
				<img class="item" src="https://placeimg.com/200/200/any?2" />
			</div>
			<div class="img-container">
				<img class="item" src="https://placeimg.com/200/200/any?3" />
			</div>
		</carousel>
	</div>
</template>

<script>
	import carousel from "vue-owl-carousel";
	export default {
		name: "Services",
		components: { carousel },
	};
</script>

<style lang="css" scoped>
	.bg {
		/* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			url("https://images.unsplash.com/photo-1602872250608-a17f7ba8933d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"); */
		background-color: black;
		background-repeat: no-repeat;
		background-position: center bottom;
		background-size: cover;
		padding: 48px 32px;
	}
	.title {
		text-align: center;
		color: #fff;
	}

	.img-container .item {
		padding: 6px 4px;
		max-height: 120px;
	}
</style>

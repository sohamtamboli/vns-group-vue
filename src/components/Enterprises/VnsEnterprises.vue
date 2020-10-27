<template>
	<div>
		<carousel
			:autoplay="true"
			:nav="false"
			:dots="false"
			:responsive="{ 0: { items: 1 }, 600: { items: 2 } }"
			:stagePadding="100"
			loop
		>
			<div class="image-container">
				<img class="item" src="https://placeimg.com/200/200/any?1" />
			</div>
			<div class="image-container">
				<img class="item" src="https://placeimg.com/200/200/any?2" />
			</div>
			<div class="image-container">
				<img class="item" src="https://placeimg.com/200/200/any?3" />
			</div>
		</carousel>
		<Products />
	</div>
</template>

<script>
	import carousel from "vue-owl-carousel";
	import Products from "@/components/Enterprises/Products";
	export default {
		name: "VnsEnterprises",
		components: { carousel, Products },
	};
</script>

<style lang="css" scoped>
	.image-container .item {
		padding: 8px 6px;
	}
	.item {
		max-height: 400px;
	}

	@media only screen and (max-width: 768px) {
		.image-container .item {
			padding: 8px 3px;
		}
	}
</style>

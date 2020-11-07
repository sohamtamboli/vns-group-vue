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
				<img class="item" src="../../assets/products1.jpg" />
			</div>
			<div class="image-container">
				<img class="item" src="../../assets/sign board.jpg" />
			</div>
			<div class="image-container">
				<img class="item" src="../../assets/products3.jpg" />
			</div>
		</carousel>
		<Products :divs="productData" />
	</div>
</template>

<script>
	import carousel from "vue-owl-carousel";
	import Products from "@/components/Products";
	import { data } from "@/assets/ProductsData/products";
	export default {
		name: "VnsSolutions",
		components: { carousel, Products },
		data() {
			return {
				productData: data.solutionProducts,
			};
		},
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

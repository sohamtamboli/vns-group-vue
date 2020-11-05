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
				<img class="item" src="../../assets/products4.jpg" />
			</div>
			<div class="image-container">
				<img class="item" src="../../assets/products5.jpg" />
			</div>
			<div class="image-container">
				<img class="item" src="../../assets/products6.jpg" />
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
		name: "VnsEnterprises",
		components: { carousel, Products },
		data() {
			return {
				productData: data.enterprisesProducts,
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

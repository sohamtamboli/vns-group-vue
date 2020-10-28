<template>
	<div>
		<div class="intro-div">
			<h1>{{ productLabels[selectedData] }}</h1>
		</div>
		<Products :divs="productData" />
	</div>
</template>

<script>
	import Products from "@/components/Enterprises/Products";
	import { data, labels } from "@/assets/ProductsData/products";

	export default {
		components: { Products },
		data() {
			return {
				productData: [],
				productLabels: labels,
				selectedData: "",
			};
		},
		watch: {
			$route() {
				console.log("routeChanged");
			},
		},
		mounted() {
			console.log(this.$route);
			this.selectedData = this.$route.query.productType;
			this.productData = data[this.selectedData];
		},
	};
</script>

<style lang="css" scoped>
	.intro-div {
		background-color: black;
		height: 300px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
	}
</style>

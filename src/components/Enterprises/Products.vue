<template>
	<div>
		<h1>Our Products</h1>

		<div class="grid-holder container">
			<div v-for="div in divs" :key="div.img">
				<a href="" target="_blank">
					<b-card
						border-variant="none"
						:title="div.name"
						:img-src="div.img"
						img-alt="Image"
						img-top
						tag="article"
						class="m-2"
					>
					</b-card>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	import { products } from "@/assets/ProductsData/products";
	export default {
		name: "Products",
		data() {
			return {
				divs: products,
			};
		},
	};
</script>

<style lang="css" scoped>
	.grid-holder {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(2, 1fr);
	}
	.card {
		border: none;
	}
	a {
		cursor: pointer;
		text-decoration: none;
		color: #000;
	}
</style>

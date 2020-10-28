<template>
	<div>
		<h1>{{ msg }}</h1>

		<div class="grid-holder container">
			<div v-for="div in divs" :key="div.img" class="single-cell">
				<b-card
					@click="navigate(div.url)"
					border-variant="none"
					:title="div.name"
					:img-src="div.img"
					img-alt="Image"
					img-top
					tag="article"
					style="max-width: 15rem;"
					class="m-2"
				>
				</b-card>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Products",
		data() {
			return {
				msg: "Our Products",
			};
		},
		props: {
			divs: {
				type: Array,
				default: () => [],
			},
		},
		mounted() {
			if (this.$route.name == "subproducts") {
				this.msg = "Products";
			}
		},
		methods: {
			navigate(type) {
				if (!type) {
					return null;
				}
				this.$router.push({
					path: "/subproducts",
					query: {
						productType: type,
					},
				});
			},
		},
	};
</script>

<style lang="css" scoped>
	.grid-holder {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(2, 1fr);
	}
	.single-cell {
		justify-self: center;
		align-self: center;
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

<template>
	<div>
		<carousel
			:autoplay="true"
			:nav="false"
			:dots="false"
			:responsive="{ 0: { items: 1 }, 600: { items: 2 } }"
			stagePadding="100"
			loop
		>
			<div class="image-container">
				<img class="item" src="https://placeimg.com/200/200/any?1" />
			</div>
			<div class="image-container">
				<img class="item" src="https://placeimg.com/200/200/any?2" />
			</div>
		</carousel>
		<div class="m-3" id="grid-contain">
			<b-card
				title="VNS ENTERPRISES"
				img-src="https://picsum.photos/600/300/?image=25"
				img-alt="Image"
				img-top
				tag="article"
				style="max-width: 35rem;"
				class="card1"
			>
				<b-card-text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</b-card-text>

				<b-button to="#" variant="primary">Go at VNS ENTERPRISES</b-button>
			</b-card>
			<b-card
				title="VNS FIRE SOLUTION PVT LTD"
				img-src="https://picsum.photos/600/300/?image=25"
				img-alt="Image"
				img-top
				tag="article"
				style="max-width: 35rem;"
				class="card2"
			>
				<b-card-text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</b-card-text>

				<b-button to="#" variant="primary">Go at VNS FIRE SOLUTION</b-button>
			</b-card>
		</div>
	</div>
</template>

<script>
	import carousel from "vue-owl-carousel";
	export default {
		name: "Company",
		components: { carousel },
	};
</script>

<style lang="css" scoped>
	.image-container .item {
		padding: 8px 6px;
	}
	.item {
		max-height: 400px;
	}
	#grid-contain {
		display: grid;
		grid-auto-flow: column;
		gap: 32px;
	}
	.card1 {
		justify-self: center;
		align-self: center;
	}
	.card2 {
		justify-self: center;
		align-self: center;
	}

	@media only screen and (max-width: 768px) {
		.image-container .item {
			padding: 8px 3px;
		}

		#grid-contain {
			display: grid;
			grid-auto-flow: row;
		}
		.card1 {
			justify-self: center;
			align-self: center;
		}
		.card2 {
			justify-self: center;
			align-self: center;
		}
	}
</style>

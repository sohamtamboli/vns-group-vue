<template>
	<div>
		<div class="grid-container">
			<div class="row1 container-fluid"></div>
		</div>
		<About />
		<div class="m-3" id="grid-contain">
			<b-card
				title="Sanket"
				img-src="https://picsum.photos/600/300/?image=25"
				img-alt="Image"
				img-top
				tag="article"
				style="max-width: 28rem;"
				class="card1"
			>
				<b-card-text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</b-card-text>
			</b-card>
			<div id="grid-contain-secondary">
				<b-card
					title="Govind"
					img-src="https://picsum.photos/600/300/?image=25"
					img-alt="Image"
					img-top
					tag="article"
					style="max-width: 28rem;"
					class="card2"
				>
					<b-card-text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</b-card-text>
				</b-card>
				<b-card
					title="john snow"
					img-src="https://picsum.photos/600/300/?image=25"
					img-alt="Image"
					img-top
					tag="article"
					style="max-width: 28rem;"
					class="card3"
				>
					<b-card-text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</b-card-text>
				</b-card>
			</div>
		</div>
	</div>
</template>

<script>
	import About from "@/components/AboutUs";
	export default {
		title: "About",
		components: {
			About,
		},
	};
</script>

<style lang="css" scoped>
	.row1 {
		padding: 2rem;
		height: 25rem;
		background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			url("../assets/aboutus1.jpg");
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 2rem;
	}

	#grid-contain {
		display: grid;
		grid-template-rows: 1fr 1fr;
		gap: 32px;
		margin-bottom: 2rem;
	}
	#grid-contain-secondary {
		display: grid;
		grid-auto-flow: column;
		grid-template-columns: 1fr 1fr;
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
	.card3 {
		justify-self: center;
		align-self: center;
	}

	@media only screen and (max-width: 768px) {
		.row1 {
			padding: 2rem;
			height: 12rem;
			background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
				url("../assets/aboutus3.png");
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
			color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-bottom: 2rem;
		}

		#grid-contain {
			display: grid;
			grid-auto-flow: row;
			grid-template-rows: auto;
		}
		#grid-contain-secondary {
			display: grid;
			grid-auto-flow: row;
			grid-template-columns: auto;
		}
		.card1 {
			justify-self: center;
			align-self: center;
		}
		.card2 {
			justify-self: center;
			align-self: center;
		}
		.card3 {
			justify-self: center;
			align-self: center;
		}
	}
</style>

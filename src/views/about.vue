<template>
	<div>
		<div class="grid-container">
			<div class="row1 container-fluid"></div>
		</div>
		<About2 />
		<div class="m-3" id="grid-contain">
			<b-card
				title="Chandrakant Ganpati  Powar"
				img-src="../assets/about/skp.jpg"
				img-alt="Image"
				img-top
				tag="article"
				style="max-width: 28rem;"
				class="card1"
			>
				<b-card-text>
					( Founder & Managing director )
				</b-card-text>
			</b-card>
			<div id="grid-contain-secondary">
				<b-card
					title="Ganesh Shivaji Adnaik"
					img-src="../assets/about/skb.jpg"
					img-alt="Image"
					img-top
					tag="article"
					style="max-width: 18rem;"
					class="card3"
				>
					<b-card-text>
						( Executive Director )
					</b-card-text>
				</b-card>
				<b-card
					title="Sanket Chandrakant Powar"
					img-src="../assets/about/skk3.jpg"
					img-alt="Image"
					img-top
					tag="article"
					style="max-width: 18rem;"
					class="card2"
				>
					<b-card-text>
						( Executive Director )
					</b-card-text>
				</b-card>
			</div>
		</div>
	</div>
</template>

<script>
	import About2 from "@/components/aboutUs2";
	export default {
		title: "About",
		components: {
			About2,
		},
	};
</script>

<style lang="css" scoped>
	.row1 {
		padding: 2rem;
		height: 25rem;
		background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			url("../assets/about us new.jpg");
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
				url("../assets/about us new.jpg");
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

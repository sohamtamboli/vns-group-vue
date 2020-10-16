<template>
	<div class="main">
		<div class="grid-contain">
			<div class="photo how-img  ">
				<img
					src="https://ultraworld-ecommerce.s3.amazonaws.com/media/product/outer_back-0158_800x.jpg"
					class="img-fluid"
					alt=""
				/>
			</div>
			<div class="info ">
				<h4>About Us</h4>
				<h4 class="subheading">
					VNS - Vital in Safety
				</h4>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
					cumque quibusdam facere cum ipsum iusto eius aliquam hic quam
					cupiditate magni eos laborum, ullam sed necessitatibus nihil
					perspiciatis deserunt recusandae.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "About",
	};
</script>

<style scoped>
	.grid-contain {
		display: grid;
		grid-auto-flow: column;
		background-color: #ddd;
		padding: 40px;
	}
	.photo {
		place-self: center;
		padding: 16px 32px;
	}
	.info {
		place-self: center;
		padding: 16px 32px;
	}
	h4 {
		font-weight: bold;
		font-size: 30px;
	}
	.subheading {
		font-size: 20px;
	}

	.how-img {
		text-align: center;
	}
	.how-img img {
		width: 50%;
	}
	@media only screen and (max-width: 768px) {
		.grid-contain {
			display: grid;
			grid-auto-flow: row;
		}
		.photo {
			place-self: center;
			padding: 16px 32px;
		}
		.info {
			place-self: center;
			padding: 16px 32px;
		}
	}
</style>

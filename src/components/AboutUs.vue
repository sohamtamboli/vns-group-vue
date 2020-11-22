<template>
	<div class="main">
		<div class="grid-contain">
			<div class="photo how-img  ">
				<img src="../assets/vnslogo.jpg" class="img-fluid" alt="" />
			</div>

			<div class="info ">
				<h2>
					<b>VNS Vital In Safety</b>
				</h2>
				<h6>
					VNS GROUP was established in 2015 with the Aim of Becoming in
					MAHARASTRA&rsquo;S Best fire Protection solution provider in order to
					provide a wide range of system in order to protect
				</h6>
				<b-button to="/about" variant="outline-primary">Learn More...</b-button>
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
		background-color: #fff;
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
		width: 75%;
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

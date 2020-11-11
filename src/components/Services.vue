<template>
	<div class="bg">
		<h1 class="title p-3">Our Services</h1>
		<carousel
			:autoplay="true"
			:nav="false"
			:dots="false"
			:responsive="{ 0: { items: 1 }, 600: { items: 5 } }"
			:stagePadding="20"
			loop
		>
			<div class="img-container">
				<img
					class="item"
					src="../assets/servicesicons/AMC for fire extinguisher & fire  hydrant system icon.png"
				/>
				<h6>AMC for fire extinguisher & fire hydrant system</h6>
			</div>
			<div class="img-container">
				<img
					class="item"
					src="../assets/servicesicons/commission fire hydrant system  icon.png"
				/>
				<h6>Commission fire hydrant system</h6>
			</div>
			<div class="img-container">
				<img
					class="item"
					src="../assets/servicesicons/consulting for to obtain fire  Noc.png"
				/>
				<h6>Consulting for to obtain fire Noc</h6>
			</div>
			<div class="img-container">
				<img
					class="item"
					src="../assets/servicesicons/distribution of sprinklers, smock  detector, control panel icon.png"
				/>
				<h6>Distribution of Sprinklers, Smock detector, Control panel</h6>
			</div>
			<div class="img-container">
				<img
					class="item"
					src="../assets/servicesicons/HTP test for fire extinguisher  icon.png"
				/>
				<h6>HTP test for Fire extinguisher</h6>
			</div>
			<div class="img-container">
				<img
					class="item"
					src="../assets/servicesicons/supple new Fire extinguish &  refilling yearly icon.png"
				/>
				<h6>Supple new Fire extinguish & Refilling yearly icon</h6>
			</div>
		</carousel>
	</div>
</template>

<script>
	import carousel from "vue-owl-carousel";
	export default {
		name: "Services",
		components: { carousel },
	};
</script>

<style lang="css" scoped>
	.bg {
		/* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			url("https://images.unsplash.com/photo-1602872250608-a17f7ba8933d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"); */
		background-color: black;
		background-repeat: no-repeat;
		background-position: center bottom;
		background-size: cover;
		padding: 80px 32px;
	}
	.title {
		text-align: center;
		color: #fff;
	}

	.img-container .item {
		padding: 30px 115px;
		max-height: 100px;
	}
	h6 {
		color: #ffffff;
		text-align: center;
	}
	@media (max-width: 600px) {
		.img-container .item {
			padding: 30px 125px;
			max-height: 150px;
		}
	}
</style>

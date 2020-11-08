<template>
	<div>
		<Carousel />

		<About />

		<Services id="services" />
		<ContactUs />
	</div>
</template>

<script>
	// @ is an alias to /src
	import Carousel from "@/components/Carousel";
	import Services from "@/components/Services";
	import About from "@/components/AboutUs";
	import ContactUs from "@/components/Contactus";

	export default {
		title: "VNS Home",
		name: "Home",
		components: {
			Carousel,
			Services,
			About,
			ContactUs,
		},
	};
</script>
<style lang="css" scoped>
	#services::before {
		display: block;
		content: " ";
		margin-top: -320px;
		height: 304px;
		visibility: hidden;
		pointer-events: none;
	}
</style>

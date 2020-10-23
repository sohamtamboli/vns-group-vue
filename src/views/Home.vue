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
		name: "Home",
		components: {
			Carousel,
			Services,
			About,
			ContactUs,
		},
	};
</script>
<style lang="css" scoped></style>

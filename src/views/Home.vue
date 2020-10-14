<template>
	<div>
		<Carousel />
		<Services class="custom" />
		<About />
	</div>
</template>

<script>
	// @ is an alias to /src
	import Carousel from "@/components/Carousel";
	import Services from "@/components/Services";
	import About from "@/components/AboutUs";

	export default {
		name: "Home",
		components: {
			Carousel,
			Services,
			About,
		},
	};
</script>
<style lang="css" scoped>
	.custom {
		max-height: 120px;
	}
</style>

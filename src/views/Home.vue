<template>
	<div>
		<Carousel />
		<About />
	</div>
</template>

<script>
	// @ is an alias to /src
	import Carousel from "@/components/Carousel";
	import About from "@/components/AboutUs";

	export default {
		name: "Home",
		components: {
			Carousel,
			About
		},
	};
</script>

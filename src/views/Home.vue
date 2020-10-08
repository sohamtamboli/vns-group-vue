<template>
	<div class="contain">
		<Carousel class="sec1" />
		<Services class="sec2" />
	</div>
</template>

<script>
	// @ is an alias to /src
	import Carousel from "@/components/Carousel";
	import Services from "@/components/Services";
	export default {
		name: "Home",
		components: {
			Carousel,
			Services,
		},
	};
</script>
<style lang="css" scoped>
	@media only screen and (min-width: 768px) {
		.contain {
			display: grid;
			grid-template-rows: 1fr 1fr;
			grid-template-areas:
				"section1"
				"section2";
		}
		.sec1 {
			grid-area: section1;
		}
		.sec2 {
			grid-area: section2;
			justify-self: center;
			gap: 2;
		}
	}
</style>

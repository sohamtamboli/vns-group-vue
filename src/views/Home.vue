<template>
	<div>
		<Carousel />
		<Services class="custom" />
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
	.custom {
		max-height: 120px;
	}
</style>

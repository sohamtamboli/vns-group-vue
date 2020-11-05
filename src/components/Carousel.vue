<template>
	<div>
		<b-carousel
			id="carousel-1"
			:interval="4000"
			controls
			indicators
			class="slides"
			background="#ababab"
			style="text-shadow: 1px 1px 2px #333;"
		>
			<!-- Text slides with image -->
			<b-carousel-slide
				
				class="slides"
				caption="First slide"
				text="Nulla vitae elit libero, a pharetra augue mollis interdum."
				><template v-slot:img>
					<img
						class="d-block img-fluid w-100 custom"
						src="../assets/homescreen resize.png"
						alt="image slot"/></template
			></b-carousel-slide>
			<b-carousel-slide
				class="slides"
				caption="Second slide"
				text="Nulla vitae elit libero, a pharetra augue mollis interdum."
				><template v-slot:img>
					<img
						class="d-block img-fluid w-100"
						src="https://source.unsplash.com/800x600/?dark,moody"
						alt="image slot"/></template
			></b-carousel-slide>
			<b-carousel-slide
				class="slides"
				caption="Third slide"
				text="Nulla vitae elit libero, a pharetra augue mollis interdum."
				><template v-slot:img>
					<img
						class="d-block img-fluid w-100"
						src="https://source.unsplash.com/800x600/?dark,moody"
						alt="image slot"/></template
			></b-carousel-slide>
			<b-carousel-slide
				class="slides"
				caption="Fourth slide"
				text="Nulla vitae elit libero, a pharetra augue mollis interdum."
				><template v-slot:img>
					<img
						class="d-block img-fluid w-100"
						src="https://source.unsplash.com/800x600/?dark,moody"
						alt="image slot"/></template
			></b-carousel-slide>
			<b-carousel-slide
				class="slides"
				caption="Fifth slide"
				text="Nulla vitae elit libero, a pharetra augue mollis interdum."
				><template v-slot:img>
					<img
						class="d-block img-fluid w-100"
						src="https://source.unsplash.com/800x600/?dark,moody"
						alt="image slot"/></template
			></b-carousel-slide>
		</b-carousel>
	</div>
</template>

<script>
	export default {
		name: "Carousel",
	};
</script>

<style lang="css" scoped>
	.slides {
		height: 30em;
	}
	.slides img {
		min-height: 30em;
		object-fit: cover;
		object-position: center center;

	}

	@media (min-width: 960px) {
		.slides {
			height: 30em;
		}
		.slides img {
			min-height: 30em;
			object-fit: cover;
			object-position: center center;
		}
	}
</style>

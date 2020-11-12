<template>
	<div>
		<b-carousel
			id="carousel-1"
			:interval="2000"
			controls
			indicators
			class="slides"
			background="#ababab"
			style="text-shadow: 1px 1px 2px #333;"
		>
			<!-- Text slides with image -->
			<b-carousel-slide class="slides blacktxt" caption="MFS-LA/2020/RF-13" text=""
				><template v-slot:img>
					<img
						class="d-block img-fluid w-100 custom"
						:src="firstimg"
						alt="image slot"/></template
			></b-carousel-slide>
			<b-carousel-slide class="slides" caption="Vital in Safety" text=""
				><template v-slot:img>
					<img
						class="d-block img-fluid w-100"
						src="../assets/homepage2.png"
						alt="image slot"/></template
			></b-carousel-slide>
			<b-carousel-slide class="slides" caption="Safety Products" text=""
				><template v-slot:img>
					<img
						class="d-block img-fluid w-100"
						src="../assets/homepage3.png"
						alt="image slot"/></template
			></b-carousel-slide>
		</b-carousel>
	</div>
</template>

<script>
	export default {
		name: "Carousel",
		mounted() {
			if (screen.width < 600) {
				this.firstimg = require("../assets/homepage1mobile.png");
			} else {
				this.firstimg = require("../assets/homepage1.png");
			}
		},
	};
</script>

<style lang="css" scoped>
	.slides {
		height: 30em;
	}
	.slides img {
		min-height: 30em;
		object-fit: cover;
		object-position: top;
	}
	.blacktxt{
		color: black;
	}

	@media (min-width: 960px) {
		.slides {
			height: 30em;
		}
		.slides img {
			min-height: 30em;
			object-fit: cover;
			object-position: center;
		}
	}
</style>

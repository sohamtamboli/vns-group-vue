<template>
	<div>
		<h1 class="title">Our Services</h1>
		<carousel :autoplay="true" :nav="false" :dots="false" loop>
			<img class="item" src="https://placeimg.com/200/200/any?1" />
			<img class="item" src="https://placeimg.com/200/200/any?2" />
			<img class="item" src="https://placeimg.com/200/200/any?3" />
			<img class="item" src="https://placeimg.com/200/200/any?4" />
			<img class="item" src="https://placeimg.com/200/200/any?5" />
			<img class="item" src="https://placeimg.com/200/200/any?6" />
			<img class="item" src="https://placeimg.com/200/200/any?7" />
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
	.title {
		text-align: center;
	}
	.item {
		height: 120px;
		width: 120px;
	}
</style>

<template>
	<div id="app">
		<Nav />
		<div class="blank"></div>
		<router-view />
		<Footer />
	</div>
</template>
<script>
	import Nav from "@/components/Nav";
	import Footer from "@/components/footer";

	export default {
		components: {
			Nav,
			Footer,
		},
		mounted() {
			window.scrollTo(0, 0);
		},
		watch: {
			$route() {
				window.scrollTo(0, 0);
			},
		},
	};
</script>
<style>
	* {
		scroll-behavior: smooth;
	}
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	.blank {
		height: 122.8px;
	}
</style>

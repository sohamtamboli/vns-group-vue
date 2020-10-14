<template>
	<div id="app">
		<Nav />
		<router-view />
		<footer_ />

	</div>
</template>
<script>

	import Nav from "@/components/Nav";
	import footer_ from "@/components/footer";

	export default {
		components: {
			Nav,
			footer_
		},
	};
</script>
<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>

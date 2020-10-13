<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="dark">
			<div class="container">
				<b-navbar-brand to="/">VNS Group</b-navbar-brand>

				<b-navbar-toggle class="ham-menu" target="nav-collapse">
					<template v-slot:default="{ expanded }">
						<span v-if="expanded">≙</span>
						<span v-else>≚</span>
					</template>
				</b-navbar-toggle>

				<b-collapse id="nav-collapse" is-nav>
					<b-navbar-nav class="ml-auto">
						<b-nav-item to="">Home</b-nav-item>
						<b-nav-item to="">Services</b-nav-item>
						<b-nav-item to="">Company</b-nav-item>
						<b-nav-item to="/contact">Contact Us</b-nav-item>
						<b-nav-item to="/about">About</b-nav-item>
					</b-navbar-nav>
				</b-collapse>
			</div>
		</b-navbar>
	</div>
</template>

<script>
	export default {
		name: "Nav",
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.ham-menu {
		border: none;
	}
</style>

<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
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
						<b-nav-item to="/">Home</b-nav-item>
						<b-nav-item href="/#services">Services</b-nav-item>
						<b-nav-item to="/projects">Projects</b-nav-item>

						<b-nav-item-dropdown text="Company">
							<b-dropdown-item to="#" class="text-center"
								>VNS Enterprises</b-dropdown-item
							>
							<b-dropdown-item to="#" class="text-center"
								>VNS Solutions</b-dropdown-item
							>
						</b-nav-item-dropdown>

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

<template>
	<div>
		<b-navbar
			toggleable="lg"
			type="light"
			variant="light"
			fixed="top"
			class="elemental"
		>
			<div class="contact">
				<b-nav-text class="mx-2 nav-contact"><b-icon icon="telephone" animation="fade" font-scale="1"></b-icon>7701881430</b-nav-text>
				<b-nav-text class="mx-2 nav-contact">vnsesafety@gmail.com</b-nav-text>
			</div>
			<div class="container">
				<b-navbar-brand to="/">
					<div class="nav-img">
						<img src="../assets/vnslogo_nav.jpg" />
						VNS Group
					</div></b-navbar-brand
				>

				<b-navbar-toggle class="ham-menu" target="nav-collapse">
					<template v-slot:default="{ expanded }">
						<span v-if="expanded">≙</span>
						<span v-else>≚</span>
					</template>
				</b-navbar-toggle>

				<b-collapse id="nav-collapse" is-nav>
					<b-navbar-nav class="ml-auto">
						<b-nav-item to="/">Home</b-nav-item>
						<b-nav-item to="/about">About</b-nav-item>

						<b-nav-item to="/projects">Projects</b-nav-item>

						<b-nav-item-dropdown text="Company">
							<b-dropdown-item to="/vnsenterprises" class="text-center"
								>VNS Enterprises</b-dropdown-item
							>
							<b-dropdown-item to="/vnssolutions" class="text-center"
								>VNS Solutions</b-dropdown-item
							>
						</b-nav-item-dropdown>
						<b-nav-item href="">Privacy Policy</b-nav-item>
						<b-nav-item to="/contact">Contact Us</b-nav-item>
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
	.elemental {
		flex-direction: column;
		box-shadow: 0px 5px 18px #888888;
		background: #fff !important ;
	}
	.contact {
		margin: 0 0 0 auto;
	}
	.nav-contact {
		font-weight: bold;
		text-decoration: underline;
		font-size: 14px;
	}
	.nav-img {
		display: flex;
		align-items: center;
	}
	.nav-img img {
		margin-right: 5px;
	}
</style>

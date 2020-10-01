<template>
	<div>
		<div class="grid-container">
			<div class="row1">
				<h1>Our Projects</h1>
			</div>
			<div class="row2">
				<div class="project-gallery">
					<div class="card">1</div>
					<div class="card">2</div>
					<div class="card">3</div>
					<div class="card">4</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Project",
	};
</script>

<style lang="css" scoped>
	.grid-container {
		display: grid;
		grid-template-columns: auto;
		grid-template-rows: 2fr auto;
		grid-template-areas:
			"title"
			"images";
	}
	.row1 {
		grid-area: title;
		justify-self: center;
	}
	.row2 {
		grid-area: images;
		justify-self: center;
	}
</style>

<template>
	<div>
		<div class="grid-container">
			<div class="row1 container-fluid">
				<h1>Our Projects</h1>
			</div>
			<div class="row2 container">
				<div class="project-gallery">
					<div
						class="card"
						style="background-image:url('https://source.unsplash.com/random');background-size: cover;"
					>
						1
					</div>
					<div
						class="card"
						style="background-image:url('https://source.unsplash.com/random');background-size: cover;"
					>
						2
					</div>
					<div
						class="card"
						style="background-image:url('https://source.unsplash.com/random');background-size: cover;"
					>
						3
					</div>
					<div
						class="card"
						style="background-image:url('https://source.unsplash.com/random');background-size: cover;"
					>
						4
					</div>
					<div
						class="card"
						style="background-image:url('https://source.unsplash.com/random');background-size: cover;"
					>
						5
					</div>
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
	.row1 {
		padding: 2rem;
		height: 25rem;
		background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			url("https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 2rem;
	}

	.project-gallery {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		grid-auto-rows: 240px;
	}
	.card {
		color: #fff;
		display: flex;
		justify-content: center;
		align-content: center;
		font-size: 2rem;
	}
	.card:hover {
		background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
	}
</style>

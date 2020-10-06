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
						<div class="overlay">
							<b-button v-b-modal="'modal1'">See Project 1</b-button>

							<b-modal id="modal1" scrollable title="Scrollable Content">
								<p class="my-4" v-for="i in 20" :key="i">
									Cras mattis consectetur purus sit amet fermentum. Cras justo
									odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
									risus, porta ac consectetur ac, vestibulum at eros.
								</p>
							</b-modal>
						</div>
					</div>
					<div
						class="card"
						style="background-image:url('https://source.unsplash.com/random');background-size: cover;"
					>
						<div class="overlay">
							<b-button v-b-modal="'modal2'">See Project 2</b-button>

							<b-modal id="modal2" scrollable title="Scrollable Content">
								<p class="my-4" v-for="i in 20" :key="i">
									Cras mattis consectetur purus sit amet fermentum. Cras justo
									odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
									risus, porta ac consectetur ac, vestibulum at eros.
								</p>
							</b-modal>
						</div>
					</div>
					<div
						class="card"
						style="background-image:url('https://source.unsplash.com/random');background-size: cover;"
					></div>
					<div
						class="card"
						style="background-image:url('https://source.unsplash.com/random');background-size: cover;"
					></div>
					<div
						class="card"
						style="background-image:url('https://source.unsplash.com/random');background-size: cover;"
					></div>
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
	.overlay {
		opacity: 0;

		transition: 0.5s;
	}
	.card {
		color: #fff;
		display: flex;
		justify-content: center;
		align-content: center;
		font-size: 2rem;
		transition: 0.5s;
	}
	.card:hover {
		/* background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)); */

		cursor: pointer;
	}

	.card:hover .overlay {
		opacity: 1;
	}
</style>

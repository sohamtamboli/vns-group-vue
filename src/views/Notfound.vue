<template>
	<div class="not-found">
		<div class="jumbotron mt-3">
			<div class="fx">
				<h1 id="notfound">{{ message }}</h1>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "NotFound",
		data() {
			return {
				message: "404-Page Not Found :(",
			};
		},
	};
</script>
<style scoped>
	#notfound {
		color: red;
		text-align: center;
	}
	.fx {
		display: grid;
		grid-template-rows: 300px;
	}
	.fx h1 {
		justify-content: center;
		align-items: center;
	}
</style>

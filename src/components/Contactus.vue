<template>
	<div class="container my-3 form-contact">
		<h2>Contact Us</h2>
		<hr />
		<b-form @submit="onSubmit" @reset="onReset">
			<b-form-group id="input-group-1" label="" label-for="input-1">
				<b-form-input
					id="input-1"
					v-model="form.name"
					required
					placeholder="Enter name"
				></b-form-input>
			</b-form-group>

			<b-form-group id="input-group-2" label="" label-for="input-2">
				<b-form-input
					id="input-2"
					v-model="form.email"
					type="email"
					required
					placeholder="Enter email"
				></b-form-input>
			</b-form-group>

			<b-form-group id="input-group-3" label="" label-for="input-2">
				<b-form-input
					id="input-3"
					v-model="form.subject"
					required
					placeholder="Enter subject"
				></b-form-input>
			</b-form-group>
			<b-form-group id="input-group-4" label="">
				<textarea
					v-model="form.message"
					class="form-control"
					placeholder="Enter message"
					rows="4"
				></textarea>
			</b-form-group>

			<div class="form-group row">
				<b-button pill variant="success" type="submit" class="btn btn-cust mx-auto"
					>Submit</b-button
				>
			</div>
		</b-form>
	</div>
</template>

<script>
	import { apiService } from "../common/api.service.js";

	export default {
		name: "ContactUs",

		data() {
			return {
				form: {
					name: null,
					email: null,
					subject: null,
					message: null,
				},
			};
		},
		methods: {
			onSubmit(evt) {
				evt.preventDefault();
				console.log("this.form", this.form);
				console.log("JSON.stringify(this.form)", JSON.stringify(this.form));
				let endpoint = "/api/contact/";
				let method = "POST";
				apiService(endpoint, method, this.form).then(
					(this.form.name = ""),
					(this.form.email = ""),
					(this.form.subject = ""),
					(this.form.message = "")
				);
				alert("you have succesfully submited form");
			},
			onReset(evt) {
				evt.preventDefault();
				this.form.name = "";
				this.form.email = "";
				this.form.subject = "";
				this.form.message = "";
				this.show = false;
				this.$nextTick(() => {
					this.show = true;
				});
			},
		},
		created() {
			document.title = "Contact Us";
		},
	};
</script>

<style scoped>
	.form-contact {
		background: #fff;
		width: 40%;
		border-color: black;
	}
	.btn-cust {
		display: inline-block;
		text-align: center;
	}
	@media only screen and (max-width: 600px) {
		.form-contact {
			width: 90%;
		}
	}
	@media only screen and (max-width: 1000px) {
		.form-contact {
			width: 70%;
		}
	}
</style>

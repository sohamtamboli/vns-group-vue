<template>
	<div>
		<footer>
			<section id="footer">
				<div class="container">
					<div class="row text-center text-xs-center text-sm-left text-md-left">
						<div class="col-xs-12 col-sm-4 col-md-4">
							<h5>Address</h5>
							<p class="address">
								Address: 798 South Park Avenue, Jaipur,India
							</p>
						</div>
						<div class="col-xs-12 col-sm-4 col-md-4">
							<h5>Menu</h5>
							<ul class="list-unstyled quick-links">
								<b-nav-item to="/">Home</b-nav-item>
								<b-nav-item href="/#services">Services</b-nav-item>
								<b-nav-item to="/projects">Projects</b-nav-item>
								<b-nav-item to="/company">Company</b-nav-item>
								<b-nav-item to="/contact">Contact Us</b-nav-item>
								<b-nav-item to="/about">About</b-nav-item>
							</ul>
						</div>
						<div class="col-xs-12 col-sm-4 col-md-4">
							<h5>Contact</h5>

							<p class="contact">phone:9881954758</p>
							<p class="contact">email:Abc@gmail.com</p>
						</div>
					</div>
					<!-- <div class="row">
                        </div>	 -->
					<div class="row">
						<div
							class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white"
						>
							<p class="h6">© All right Fire safety.</p>
						</div>
						<hr />
					</div>
				</div>
			</section>
		</footer>
	</div>
</template>
<script>
	export default {
		name: "footer_",
	};
</script>

<style scoped>
	/* Footer */
	@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
	section {
		padding: 10px 0;
	}

	#footer {
		background: #1a1a1a;
		margin-top: 5px;
		padding: 25px 50px;
	}
	#footer h5 {
		padding-left: 10px;
		border-left: 3px solid #eeeeee;
		padding-bottom: 6px;
		margin-bottom: 20px;
		color: #ffffff;
	}
	#footer a {
		color: #ffffff;
		text-decoration: none !important;
		background-color: transparent;
		-webkit-text-decoration-skip: objects;
	}
	#footer ul.social li {
		padding: 3px 0;
	}
	#footer ul.social li a i {
		margin-right: 5px;
		font-size: 25px;
		-webkit-transition: 0.5s all ease;
		-moz-transition: 0.5s all ease;
		transition: 0.5s all ease;
	}
	#footer ul.social li:hover a i {
		font-size: 30px;
		margin-top: -10px;
	}
	#footer ul.social li a,
	#footer ul.quick-links li a {
		color: #ddd;
		font-size: 18px;
		padding: 0 16px;
	}
	#footer ul.social li a:hover {
		color: #eeeeee;
	}
	#footer ul.quick-links li {
		padding: 3px 0;
		-webkit-transition: 0.5s all ease;
		-moz-transition: 0.5s all ease;
		transition: 0.5s all ease;
	}
	#footer ul.quick-links li:hover {
		padding: 3px 0;
		margin-left: 5px;
		font-weight: 700;
	}
	#footer ul.quick-links li a i {
		margin-right: 5px;
	}
	#footer ul.quick-links li:hover a i {
		font-weight: 700;
	}

	.address {
		color: #ddd;
		font-size: 16px;
	}
	.contact {
		color: #ddd;
		font-size: 16px;
		padding: 3px;
		margin: 0;
	}

	@media (max-width: 767px) {
		#footer h5 {
			padding-left: 0;
			border-bottom: 3px solid #eeeeee;
			border-left: transparent;
			width: 20%;
			margin: 0 auto;
			padding-bottom: 0px;
			margin-bottom: 10px;
		}
	}
	p {
		color: #ffffff;
	}
</style>

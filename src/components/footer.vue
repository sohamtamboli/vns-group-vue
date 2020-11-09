<template>
	<div>
		<footer>
			<section id="footer">
				<div class="container">
					<div class="row text-center text-xs-center text-sm-left text-md-left">
						<div class="col-xs-12 col-sm-4 col-md-4">
							<h5>Address</h5>
							<p class="address">
								<span><b>Registration Office: </b></span>Plot no 102,B/3,shivaji
								nagar 3,near sai mandir,A/P:peth
								vadgaon,Hatkanangle,Kolhapur,Maharashtra.
								<span><b></b></span>
							</p>
							<b-button
								v-b-toggle="'collapse-1'"
								class="m-1"
								size="sm"
								variant="outline-secondary"
								>More Adresses</b-button
							>
							<b-collapse id="collapse-1">
								<div class="mt-2">
									<p class="address">
										<span><b>Branch1: </b></span>R.S no 586/4,In front of
										vishwakarma founders,HMT phata ,MIDC,shiroli,kolhapur.
										<span><b></b></span>
									</p>
									<p class="address">
										<span><b>Branch2: </b></span> R.S no 1247/67,near udyoga
										nadari patasanstha,shivaji vdyamanager,Kolhapur.
										<span><b></b></span>
									</p>
									<p class="address">
										<span><b>Branch3: </b></span>Flat No 5, S.No
										50,siddhivinayak socity,Ambegao,Pune. <span><b></b></span>
									</p>
								</div>
							</b-collapse>
						</div>
						<div class="col-xs-12 col-sm-4 col-md-4">
							<h5>Quick Links</h5>
							<ul class="list-unstyled quick-links">
								<b-nav-item class="link" to="/">Home</b-nav-item>
								<b-nav-item class="link" to="/about">About</b-nav-item>
								<b-nav-item class="link" to="/projects">Projects</b-nav-item>
								<b-nav-item class="link" href="">Privacy Policy</b-nav-item>
								<b-nav-item class="link" to="/contact">Contact Us</b-nav-item>
							</ul>
						</div>
						<div class="col-xs-12 col-sm-4 col-md-4">
							<h5>Contact</h5>
							<p class="contact">
								<span><b>Phone No: </b></span
								><br />8806574586,<br />7701881430,<br />7709844141
							</p>
							<p class="contact">
								<span><b>Email: </b></span> vnsesafety@gmail.com
							</p>
						</div>
					</div>
					<!-- <div class="row">
                        </div>	 -->
					<div class="row">
						<div
							class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white"
						>
							<p class="h6">Copyright 2020 © VNS Group</p>
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
	.link {
		text-align: left;
		font-size: 14px;
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

		.address {
			display: inline-block;
			text-align: left;
			font-size: 14px;
		}
		.link {
			text-align: center;
			font-size: 8px;
		}

		.contact {
			display: inline-block;
			text-align: center;
			font-size: 14px;
		}
	}
	p {
		color: #ffffff;
	}
</style>

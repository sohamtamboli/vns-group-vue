<template>
	<div class="main">
		<div class="grid-contain">
			<div class="photo how-img  ">
				<img src="../assets/vnslogo.jpg" class="img-fluid" alt="" />
			</div>

			<div class="container">
				<h4 class="subheading">
					VNS - Vital in Safety
				</h4>
                    <p>VNS GROUP was established in 2015 with the Aim of Becoming in MAHARASTRA&rsquo;S Best fire Protection solution provider in order to provide a wide range of system in order to protect
                    And prevent any sort of fire Disaster .</p>
                    <p>Also <strong>&ldquo;An Approved Licensed Agency For Directorate of Maharastra Fire Services &rdquo;</strong>. we Have undertaken and Successfully completed many project in and around the maharastra.</p>
                    <p><strong>VNS ENTREPRISES</strong> is comprehensive solution Provider For Any type of fire Disaster with a wide range of Product from basic level fire Extinguisher to sophisticated full-fledged fire protection system.</p>
                    <p><strong>VNS FIRE SOLUTION PVT.LTD &nbsp;</strong>is A well-designed water based Automatic fire protection System in High rise building / Commercial &amp; industrial complexes <strong>&nbsp;&amp; </strong>installed &nbsp;Fire Hydrant Systems ,Fire Sprinkler Systems ,Fire Alarm Systems ,fire detection Systems, fire Securities Systems &amp; fire Control Pannel As Minimum Possible Time by Team of Exports &amp; Professional.</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <p>&nbsp;</p>			
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "About2",
	};
</script>

<style scoped>
	.grid-contain {
		display: grid;
		grid-auto-flow: column;
		background-color: #fff;
		padding: 40px;
	}
	.photo {
		place-self: center;
		padding: 16px 32px;
	}
	.info {
		place-self: center;
		padding: 16px 32px;
	}
	h4 {
		font-weight: bold;
		font-size: 30px;
	}
	.subheading {
		font-size: 20px;
	}

	.how-img {
		text-align: center;
	}
	.how-img img {
		width: 75%;
	}
    .p{
        text-align: left;
    }
	@media only screen and (max-width: 768px) {
		.grid-contain {
			display: grid;
			grid-auto-flow: row;
		}
		.photo {
			place-self: center;
			padding: 16px 32px;
		}
		.info {
			place-self: center;
			padding: 16px 32px;
		}
	}
</style>

<template>
	<div>
		<div class="grid-container">
			<div class="row1 container-fluid">
			</div>
            
		</div> 
        <div class="m-3" id="grid-contain">
            
			<b-card
				title="VNS ENTERPRISES"
				img-src="https://picsum.photos/600/300/?image=25"
				img-alt="Image"
				img-top
				tag="article"
				style="max-width: 35rem;"
				class="card1"
			>
				<b-card-text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</b-card-text>
            </b-card>
			<b-card
				title="VNS FIRE SOLUTION PVT LTD"
				img-src="https://picsum.photos/600/300/?image=25"
				img-alt="Image"
				img-top
				tag="article"
				style="max-width: 35rem;"
				class="card2"
			>
				<b-card-text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</b-card-text>
            </b-card>
            <b-card
				title="VNS ENTERPRISES"
				img-src="https://picsum.photos/600/300/?image=25"
				img-alt="Image"
				img-top
				tag="article"
				style="max-width: 35rem;"
				class="card3"
			>
				<b-card-text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</b-card-text>
            </b-card>
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
			url("../assets/aboutus1.jpg");
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 2rem;
	}
    
	.image-container .item {
		padding: 8px 6px;
	}
	.item {
		max-height: 400px;
	}
	#grid-contain {
		display: grid;
		grid-auto-flow: column;
		gap: 32px;
	}
	.card1 {
		justify-self: center;
		align-self: center;
	}
	.card2 {
		justify-self: center;
		align-self: center;
	}
    .card3 {
		justify-self: center;
		align-self: center;
	}
     
        

        

    @media only screen and (max-width: 768px) {
                .row1 {
                    padding: 2rem;
                    height: 12rem;
                    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                        url("../assets/aboutus3.png");
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 2rem;
                }
                .image-container .item {
			padding: 8px 3px;
		}

		#grid-contain {
			display: grid;
			grid-auto-flow: row;
		}
		.card1 {
			justify-self: center;
			align-self: center;
		}
		.card2 {
			justify-self: center;
			align-self: center;
		}
        .card3 {
		justify-self: center;
		align-self: center;
	}
		}
        
</style>

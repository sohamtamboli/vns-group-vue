<template>
    <div>
        <footer>
                <section id="footer">
                    <div class="container">
                        <div class="row text-center text-xs-center text-sm-left text-md-left">
                            <div class="col-xs-12 col-sm-4 col-md-4">
                                <h5>Address</h5>
                                    <b><p>Address: 798 South Park Avenue, Jaipur,India</p> </b>  
                            </div>
                            <div class="col-xs-12 col-sm-4 col-md-4">
                                <h5>Menu</h5>
                                <ul class="list-unstyled quick-links">
                                    <li><a href=""><i class="fa fa-angle-double-right"></i>Home</a></li>
                                    <li><a href=""><i class="fa fa-angle-double-right"></i>About</a></li>
                                    <li><a href=""><i class="fa fa-angle-double-right"></i>Company</a></li>
                                    <li><a href=""><i class="fa fa-angle-double-right"></i>Project</a></li>
                                    <li><a href=""><i class="fa fa-angle-double-right"></i>Contact Us</a></li>
                                </ul>
                            </div>
                            <div class="col-xs-12 col-sm-4 col-md-4">
                                <h5>Contact on</h5>
                                
                                     <p>phone:9881954758</p>
                                     <p>email:Abc@gmail.com</p>
                                  
                                
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                                <ul class="list-unstyled list-inline social text-center">
                                    <li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-facebook"></i></a></li>
                                    <li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-twitter"></i></a></li>
                                    <li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-instagram"></i></a></li>
                                    <li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-google-plus"></i></a></li>
                                    <li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02" target="_blank"><i class="fa fa-envelope"></i></a></li>
                                </ul>
                            </div>
                            <hr>
                        </div>	
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                                <p class="h6">© All right Fire safety.</p>
                            </div>
                            <hr>
                        </div>	
                    </div>
                </section>
        </footer>

    </div>
</template>
<script>
export default {
    name:"footer_"
    
}
</script>

<style scoped>
/* Footer */
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
section {
    padding: 60px 0;
}
/* 
section .section-title {
    text-align: center;
    color:black;
    margin-bottom: 50px;
    text-transform: uppercase;
} */
#footer {
    background: #007b5e ;
}
#footer h5{
	padding-left: 10px;
    border-left: 3px solid #eeeeee;
    padding-bottom: 6px;
    margin-bottom: 20px;
    color:#ffffff;
}
#footer a {
    color: #ffffff;
    text-decoration: none !important;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}
#footer ul.social li{
	padding: 3px 0;
}
#footer ul.social li a i {
    margin-right: 5px;
	font-size:25px;
	-webkit-transition: .5s all ease;
	-moz-transition: .5s all ease;
	transition: .5s all ease;
}
#footer ul.social li:hover a i {
	font-size:30px;
	margin-top:-10px;
}
#footer ul.social li a,
#footer ul.quick-links li a{
	color:#ffffff;
}
#footer ul.social li a:hover{
	color:#eeeeee;
}
#footer ul.quick-links li{
	padding: 3px 0;
	-webkit-transition: .5s all ease;
	-moz-transition: .5s all ease;
	transition: .5s all ease;
}
#footer ul.quick-links li:hover{
	padding: 3px 0;
	margin-left:5px;
	font-weight:700;
}
#footer ul.quick-links li a i{
	margin-right: 5px;
}
#footer ul.quick-links li:hover a i {
    font-weight: 700;
}

@media (max-width:767px){
	#footer h5 {
    padding-left: 0;
    border-left: transparent;
    padding-bottom: 0px;
    margin-bottom: 10px;
}
}

</style>
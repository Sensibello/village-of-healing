<template>
<footer>
	<div class="wrap">
		<div class="content">
			<div class="grid justify-content-center border-bottom pb5 mb5 text-center text-md-left">
				<div class="grid-l2 grid-m6 grid-s12">
					  <img 
                        src="~assets/voh-logo.png" 
                        class="" 
                        alt=""                    
                        />
				</div>
                
                <div class="grid-l2 grid-m6 grid-s12">
					<p class="h4-style" role="heading">Services</p>
					<ul>
					    <li><a href="/"  class=""> Gynecology Services</a></li>
                        <li><a href="/"  class="">Obstetric Services </a></li>
                        <li><a href="/"  class="">Mental Health Services </a></li>
                        <li><a href="/"  class=""> Vaccines</a></li>
                        <li><a href="/"  class="">Accepted Insurance </a></li>
					</ul>
				</div>

				<div class="grid-l2 grid-m6 grid-s12">
					<p class="h4-style" role="heading">Community</p>
					<ul>
						<li><a href="/"  class=""> Events</a></li>
                        <li><a href="/"  class=""> In the News</a></li>
                        <li><a href="/"  class=""> Our Village</a></li>
                        <li><a href="/"  class=""> Programs</a></li>
					</ul>
				</div>

            <div class="grid-l2 grid-m6 grid-s12">
                <p class="h4-style" role="heading">Connect</p>
                <ul>
                    <li><a href="/"  class=""> About Us</a></li>
                    <li><a href="/"  class=""> Careers</a></li>
                    <li><a href="/"  class=""> Blog</a></li>
                    <li><a href="/"  class=""> Contact Us</a></li>
                    <li><a href="/"  class=""> Donate</a></li>
                 
                </ul>
			</div>

				<!-- <div class="grid-l3 grid-m6 grid-s12">
					<ul class="social">
						<li>
							<a href="https://www.facebook.com/progressive" class="facebook link-hover mr-2" data-ga-label="facebook">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 47" focusable="false" aria-hidden="true"><title>facebook</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M17.6955,8.6781A1.5062,1.5062,0,0,1,18.8,8H26V0H18.6667a9.8973,9.8973,0,0,0-4.2052.9,10.28,10.28,0,0,0-3.3846,2.5A12.0154,12.0154,0,0,0,8.8205,7.1,11.7058,11.7058,0,0,0,8,11.4V16H0v8H8V47h9V24h9V16H17V10.707A3.2085,3.2085,0,0,1,17.6955,8.6781Z"></path></g></g></svg>
								<span class="sr-only">Follow Progressive on Facebook</span>
							</a>
						</li>
						<li>
							<a href="https://www.twitter.com/progressive" class="twitter link-hover mr-2" data-ga-label="twitter">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.6915 37.2381" focusable="false" aria-hidden="true"><title>twitter</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M8.6915,32.0606a14.6054,14.6054,0,0,1-3.0319.8961,17.7491,17.7491,0,0,1-3.4728.297A8.0391,8.0391,0,0,1,1.1125,33.14,7.52,7.52,0,0,0,0,33.0563a31.2258,31.2258,0,0,0,3.3351,1.7922,32.2187,32.2187,0,0,0,3.5373,1.3939q1.8191.4014,3.84.697a27.5916,27.5916,0,0,0,4.0426.2987,27.3178,27.3178,0,0,0,11.6223-2.39,25.1085,25.1085,0,0,0,8.59-6.3723,25.41,25.41,0,0,0,5.1543-8.5628,27.6033,27.6033,0,0,0,1.7181-9.3593V9.16a5.4107,5.4107,0,0,0,1.4149-.9957L44.4681,6.97q.6065-.5975,1.1117-1.1948c.3348-.3983.7075-.8621,1.1117-1.3939a27.6329,27.6329,0,0,1-2.7287.9956,9.3052,9.3052,0,0,1-2.7287.3983c.4043-.2647.84-.5634,1.3138-.8961A3.4843,3.4843,0,0,0,43.66,3.5844,5.3481,5.3481,0,0,0,44.67,2.1905,7.7428,7.7428,0,0,0,45.2766.5974a23.5431,23.5431,0,0,1-2.9308,1.3939,24.4554,24.4554,0,0,1-3.133.9957,5.2751,5.2751,0,0,0-1.4149-1.2943q-.81-.4949-1.617-.8962A7.3871,7.3871,0,0,0,34.3617.1991,10.6262,10.6262,0,0,0,32.3405,0a9.86,9.86,0,0,0-3.7394.697,9.6092,9.6092,0,0,0-3.133,2.0909,8.7253,8.7253,0,0,0-1.92,2.8874,9.4307,9.4307,0,0,0-.7074,3.684v1.0952a3.4151,3.4151,0,0,0,.2021,1.0953,33.3005,33.3005,0,0,1-5.8617-.8961,20.0775,20.0775,0,0,1-5.2553-2.0909,24.9969,24.9969,0,0,1-4.649-2.987A28.2233,28.2233,0,0,1,3.2341,1.5931a11.5621,11.5621,0,0,0-.91,2.39,9.5681,9.5681,0,0,0,0,4.7792,7.9241,7.9241,0,0,0,.91,2.1905,5.2365,5.2365,0,0,0,1.2127,1.7922A20.8028,20.8028,0,0,0,6.266,14.3377,23.1115,23.1115,0,0,1,3.9415,13.84a19.2185,19.2185,0,0,1-2.1224-.6969,8.6566,8.6566,0,0,0,.6064,3.2857,9.8447,9.8447,0,0,0,1.6171,2.6883,7.5144,7.5144,0,0,0,2.4255,2.1905A11.8781,11.8781,0,0,0,9.5,22.5022a7.5557,7.5557,0,0,0-1.1657.092,7.2992,7.2992,0,0,1-1.1265.1071H6.1649a2.0162,2.0162,0,0,1-.91-.1991,7.8361,7.8361,0,0,0,1.3139,2.5887,13.0655,13.0655,0,0,0,2.1223,2.1905,8.2836,8.2836,0,0,0,2.4255,1.2944,9.0323,9.0323,0,0,0,3.032.4978,21.34,21.34,0,0,1-2.5266,1.7922A10.4066,10.4066,0,0,1,8.6915,32.0606Z"></path></g></g></svg>
								<span class="sr-only">Follow Progressive on Twitter</span>
							</a>
						</li>
						<li>
							<a href="https://www.youtube.com/user/progressive" class="youtube link-hover mr-2" data-ga-label="youtube">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.412065 50" focusable="false" aria-hidden="true"><title>youtube</title><path d="M 35.705078 0 C 35.705078 0 13.35386 0.0001149 7.765625 1.4707031 C 4.765625 2.2942325 2.2942325 4.7653952 1.4707031 7.8242188 C 0.0001149 13.412454 -2.9605947e-016 25 0 25 C 0 25 0.0001149 36.64637 1.4707031 42.175781 C 2.2942325 45.234605 4.7068015 47.647174 7.765625 48.470703 C 13.412684 50.000115 35.705078 50 35.705078 50 C 35.705078 50 58.058249 49.999885 63.646484 48.529297 C 66.705308 47.705767 69.117877 45.293199 69.941406 42.234375 C 71.411994 36.64614 71.412109 25.058594 71.412109 25.058594 C 71.412109 25.058594 71.470818 13.412454 69.941406 7.8242188 C 69.117877 4.7653952 66.705308 2.3528263 63.646484 1.5292969 C 58.058249 -0.000114879 35.705078 2.9605947e-016 35.705078 0 z M 28.587891 14.294922 L 47.175781 25 L 28.587891 35.705078 L 28.587891 14.294922 z "></path></svg>
								<span class="sr-only">Follow Progressive on YouTube</span>
							</a>
						</li>
						<li>
							<a href="https://www.pinterest.com/progressiveins" class="pinterest link-hover" data-ga-label="pinterest">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.6009 49.8614"><title>pinterest</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M20.47,0C6.8623,0,0,9.7561,0,17.8921,0,22.8177,1.8646,27.2,5.8649,28.8326a.9865.9865,0,0,0,1.4339-.7179c.132-.5009.446-1.77.5851-2.2985A1.3859,1.3859,0,0,0,7.47,24.221a8.2645,8.2645,0,0,1-1.8895-5.6161c0-7.2382,5.4164-13.717,14.1011-13.717C27.3739,4.8879,31.6,9.587,31.6,15.8635c0,8.2579-3.6545,15.2274-9.0811,15.2274a4.4313,4.4313,0,0,1-4.5191-5.5165c.86-3.629,2.5276-7.5451,2.5276-10.1626,0-2.3451-1.259-4.3-3.8638-4.3-3.061,0-5.521,3.1683-5.521,7.413a11.0323,11.0323,0,0,0,.9125,4.5319S8.9189,36.3375,8.3727,38.6634c-1.0969,4.6315-.1646,10.3094-.0874,10.8831a.381.381,0,0,0,.6808.164c.284-.3689,3.9309-4.8727,5.1694-9.372.3516-1.2737,2.0145-7.8718,2.0145-7.8718.9942,1.8971,3.9034,3.57,6.9964,3.57,9.2054,0,15.4545-8.3931,15.4545-19.63C38.6009,7.912,31.4049,0,20.47,0Z"></path></g></g></svg>									<span class="sr-only">Follow Progressive on Pinterest</span>
							</a>
						</li>
					</ul>
									
					
				</div> -->
			</div>

			<div class="row">
				<div class="grid-l12">
					<div class="terms">
						<a href="" class="border-right" data-ga-label="privacy-and-security">Privacy &amp; Security</a>
						<a href="" class="border-right" data-ga-label="terms-and-conditions">Terms of Use</a>
					
					</div>
				</div>
			</div>
		</div>
			<img src="https://siteserver.progressivecommercial.com/session/checkid/" width="1" height="1" alt="" style="visibility:hidden">
	</div>
	</footer>
</template>


<script>
/* import {COMPONENT NAME} from "~/components/..."; */

export default {
 

  components: {

  }
  
}
</script>


<style lang="scss">

footer {

    background-color: $gray-700;
    color:  #fff;

    a {
        color: #fff;
    }

    p {
        color: $white;
    }

    .h4-style {
        color: $white;
    }

    .wrap {
        padding-top: 4rem;
        padding-bottom: 4rem;
    }


 

    .social  {

        margin-bottom: 2rem; 

        li {
            display: inline-block;
        }

        a {
            background-color: $gray!important;
            border-radius: 50%;
            box-sizing: content-box;
            display: inline-block;
            height: 15px;
            width: 15px;
            padding: 7px;
        }

        svg {
            fill: $white;
            height: 15px;
            width: 15px;
        }

        
    }

    

 
    .terms  {
        a {
            padding-right: 15px;
            margin-right: 15px;
        }
    }

    .border-bottom {
        border-bottom: 1px solid #dee2e6 !important;
    }
}




</style>

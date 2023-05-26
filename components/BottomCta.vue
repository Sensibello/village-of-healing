<template>
<div class="container bottom-cta">
	<div class="pro-tip filled wrap" data-module="pro-tip">
    		<div class="">
				<div class="bottom-cta-container">
					<div class="inner text-links">
						<h3 class="h2-style mb-5" id="explore-our-products-catalog">Get a quote with Progressive and see how you can save.</h3>    
                        <div class="flex-select">
                             <ExplorePanel />
                        </div>           
				        <p class="find-agent"><a href="https://www.progressiveagent.com">Find an agent near you.</a></p>
					</div>
				</div>
    		</div>
		</div>
	</div>
</template>




<script>
import ExplorePanel from '~/components/global/ExplorePanel.vue'

export default {
  name: "BottomCta",
    data() {
      return {

      };
    },
    methods: {

    },

    components: {
        ExplorePanel
    }
};
</script>

<style lang="scss" scoped>
.bottom-cta {
    display: block;
    text-align: center;
    margin-bottom: 6rem;
    margin-top: 3rem;

    .h2-style {
        margin: 30px 0px;
        font-weight: 600;
        font-size: 3rem;
      
    }

    .filled {
        text-align: center;
        background-color: #fff;
        padding: 4rem 2rem;
    }

    .find-agent {
        margin-top: 2rem;

        a {
            font-size: 1.8rem;
            line-height: 2em;
            font-weight: $font-light;
            
        }
    }
    
}



</style>


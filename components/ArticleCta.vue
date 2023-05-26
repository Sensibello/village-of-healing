<template>
    <div class="section-cta">
      
            <div class="grid">
                          
                <div class="campaign-details grid-l6 grid-m6 grid-s12 mt-3 px-5">
                    <span class="h1-subhead">{{ subhead }}</span>
                    <h2 class="h1-style">{{ title }}</h2>
                    <p>{{ description }}</p>
                    <p class="read-more">
                        <a class="primary-gold-btn" :href="`${ctaLink}`">{{ ctaText }}</a>
                    </p>
                </div>		

                 <div class="grid-l6 grid-m6 grid-s12">
                    <div class="fold" 
                        style="background-image: url(https://www.progressive.com/lifelanes/wp-content/uploads/2021/03/190923_19D30015_Home13-7_Edit2-768x384.jpg);">
                    </div>
                </div>


            </div>
    
        </div>

</template>



<script>

/* import {COMPONENT NAME} from "~/components/..."; */
export default {
  name: "ArticleCta",
    props: {
        subhead: {
            type: String,
        },
		header: {
            type: String,
        },
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        ctaLink: {
            type: String,
        },
        ctaText: {
            type: String,
        },

	},
    data() {
      return {

      };
    },
    methods: {

    },
};
</script>

<style lang="scss" scoped>

.section-cta {
    background: $white;
    padding-bottom: 6rem;

    .px-5 {
        padding-left: 50px;
        padding-right: 50px;
    }

    .mt-3 {
        margin-top: 3rem;
    }


     .fold {
        background-position: right;
        background-repeat: no-repeat;
        background-size: cover;
        float: right;
        height: 250px;
        margin-bottom: 1rem;
        max-width: 400px;
        position: relative;
        width: 90%;
    }

  
}


</style>


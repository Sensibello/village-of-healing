<template>
    <div class="section-campaign">
        <div class="wrap">
            <div class="campaign-header">
                <h2 class="h3 text-uppercase">{{ header }}</h2>
                <span class="sr-only" tabindex="0">{{ header }}</span>
	        </div>
            <div class="grid">
                <div class="grid-l6 grid-m6 grid-s12">
                    <div class="fold" 
                        style="background-image: url(https://www.progressive.com/lifelanes/wp-content/uploads/2021/03/190923_19D30015_Home13-7_Edit2-768x384.jpg);">
                    </div>
                </div>
                
                <div class="campaign-details grid-l6 grid-m6 grid-s12 mt-3 px-5">
                    <h3 class="h2">{{ title }}</h3>
                    <p>{{ description }}</p>
                    <p class="read-more">
                        <a :href="`${ctaLink}`">{{ ctaText }}</a>
                    </p>
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

.section-campaign {
    background: $white;
    padding-bottom: 6rem;

    .px-5 {
        padding-left: 50px;
        padding-right: 50px;
    }

    .mt-3 {
        margin-top: 3rem;
    }

    .campaign-header {
        text-align: center;
        margin: 6rem auto;

        h2 {
            font-size: 1.6rem;
            padding: 6rem 0rem;
            text-transform: uppercase;
            font-weight: $font-medium;
        }
        
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

    .campaign-details {
        .h2 {
            font-size: 3rem;
            margin: 10px 0 10px 0;
            font-weight: $font-medium;
        }

        p {
            font-size: 1.8rem;
            line-height: 2em;
        }

        .read-more {
            font-size: 1.5rem;
            font-weight: 600;

            &:after {
                content: '\0203A';
                display: inline-block;
                margin-left: 5px;
                transition: margin-left .25s;
            }

            a {
                color: $black;
                text-decoration: none;
                text-transform: uppercase;
            }
        }
         
    }
}


</style>


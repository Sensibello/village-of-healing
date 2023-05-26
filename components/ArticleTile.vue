<template>
<div class="wrap">
  <div class="article-container grid">
    <div v-for="article in articles" :key="article.name" :class="article.classOverride" class="grid-l4 grid-m6 grid-s12">
			<div class="article-block row regular">
				
        		<div class="image px-0">
					<a :href="`${article.url}`" focusable="false" aria-hidden="true" tabindex="-1">
						<!-- <img :src="(`/_nuxt/assets/placeholder/${article.image}`)"  alt="">  -->
					</a>
				</div>

				<div class="copy">

					<div class="categories">
						<!-- <img class="cat-icon" :src="(`/_nuxt/assets/svg/${article.categoryUrl}.svg`)"  alt="">  -->
						<a :href="`${article.categoryUrl}`">{{ article.categoryTitle}}</a>
					</div>

					<div class="reading-time"> 	
						<span class="span-reading-time"> {{ article.readingTime }} </span> min
					</div>

					<div class="body">
						<div class="title">
							<p class="h4"><a :href="`${article.url}`">{{ article.title }}</a></p>
						</div>   
					</div>

					<button class="save-me">
						<img src="~assets/svg/bookmark.svg"  alt="Save Article" />
							<div class="sr-only">
								<span>Save</span> {{ article.title }}						
						</div>
					</button>

				</div>			
			</div>
		</div>

    </div>
  </div>
</template>




<script>

// <article-tile :items="[     
//   {
//     title: 'What we see', 
//     url: '',
//     image: '',
//     categoryTitle: '',
//     categoryUrl: '',
//     readingTime: '',
//   }
//  ]" />


/* import {COMPONENT NAME} from "~/components/..."; */
export default {
  name: "ArticleTile",
  props: {
		articles: {
			type: Array
		}

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

.article-container {
    font-family: $ninetysixsans;

    display: flex;
    margin-top: 4rem;
    padding-top: 4rem;

    .article-block {
        margin: 0 0 30px 0;
        .image {
            a {
                background-position: center center;
                background-repeat: no-repeat;
                background-size: cover;
                display: block;
                height: 200px;
                width: 100% !important;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            
        }

        .copy {
            background: $white;
            bottom: 0;
            left: 0;
            min-height: 137px;
            padding: 15px 20px;
            position: relative;
            right: 0;
            white-space: normal;
            font-family: $ninetysixsans;
            font-weight: $font-light;
            text-decoration: none;
            color: $gray;

            .categories, .reading-time {
                font-size: 1.4rem;
            }

            .title {
                .h4 {
                    margin-bottom: 7px;
                    margin-top: 7px;
                    font-size: 1.4rem;
                    margin: 10px 0 10px 0;

                    a {
                        font-family: $ninetysixsans;
                        font-weight: $font-regular;
                        line-height: 1.2;
                        font-size: 2rem;
                        color: $black;
                        text-decoration: none;
                        text-transform: none;
                        letter-spacing: 0px;
                    }
                }
            }
        }
        
        .categories, .reading-time {
            display: inline-block;
            white-space: nowrap;
        }

        .categories {
         
        
            img {
                height: 13px;
                margin-right: 7px;
                margin-bottom: 4px;
                vertical-align: middle;
                width: 14px !important;
            }
             a {
                font-family: $ninetysixsans;
                font-weight: $font-light;
                text-decoration: none;
                color: #767676;
                border-right: 1px solid #808080;
                padding: 0 9px 1px 0;
                margin-right: 7px;
                transition: color .2s linear;
            }
        }

        .reading-time {
            &:after {
                content: 'read';
            }
            
            .span-reading-time {
                font-family: $ninetysixsans;
                font-weight: $font-light;
                text-decoration: none;
                color: $gray;
                transition: color .2s linear;
            }
        
        }

    }

    .save-me {
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        position: absolute;
        right: 20px;
        top: 15px;
        overflow: visible;
        width: 16px;
    }


}

</style>


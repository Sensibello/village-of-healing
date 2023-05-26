<template>
<main id="main" tabindex="-1">

  
  
  <article-cta  
    subhead="Lorum Ipsum"
    title="I am a title"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
        culpa qui officia deserunt mollit anim id est laborum."
    ctaLink="/"
    ctaText="About Us"
  />



  <!-- <article-tile :articles="[     
    {
      title: 'I wanna rock and roll all night... and party every day', 
      url: '/',
      image: '300x167.jpeg',
      categoryTitle: 'Turning Points',
      categoryUrl: 'turning-points',
      readingTime: '4',
    },
    {
      title: 'Avoid going to jail - 47 hacks for avoiding jailtime', 
      url: '/',
      image: '300x167.jpeg',
      categoryTitle: 'On the Road',
      categoryUrl: 'on-the-road',
      readingTime: '4',
    },
    {
      title: 'How to know if your cat trained you', 
      url: '/',
      image: '300x167.jpeg',
      categoryTitle: 'Adventure',
      categoryUrl: 'adventure',
      readingTime: '4',
    },
    {
      title: 'The inner machinations of my mind are an enigma', 
      url: '/',
      image: '300x167.jpeg',
      categoryTitle: 'Household',
      categoryUrl: 'household',
      readingTime: '4',
    },
    {
      title: 'From Fear Factor to podcasting: How Joe Rogan lost his mind', 
      url: '/',
      image: '300x167.jpeg',
      categoryTitle: 'Turning Points',
      categoryUrl: 'turning-points',
      readingTime: '4',
    },
    {
      title: 'How to train your dog to sniff out weird dudes', 
      url: '/',
      image: '300x167.jpeg',
      categoryTitle: 'On the Road',
      categoryUrl: 'on-the-road',
      readingTime: '4',
    },
  ]" /> -->


</main>
</template>

<script>
/* import {COMPONENT NAME} from "~/components/..."; */
import ArticleCta from "~/components/ArticleCta.vue"; 
import ArticleTile from "~/components/ArticleTile.vue"; 


export default {

  data() {
      return {
          title: 'Life Lanes',
      }
  },
  head() {
      return {
          title: this.title,
      }
  },

  layout: 'default',

  components: {
    ArticleCta,
    ArticleTile,
    
  }
  
}
</script>


<style lang="scss">


</style>

<template> 

    <div id="site">
        
        <Header/>

     
        <div class="filler">

        </div>
        <NuxtPage />
        <Footer/>

    </div>

</template>


<script>
import Header from '~/components/global/Header.vue'
import Footer from '~/components/global/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
.filler {
  height: 700px;
}

</style>

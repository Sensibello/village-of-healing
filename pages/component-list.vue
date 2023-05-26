<template>
  <h1>Hello world!</h1>
</template>

<script>
/* import {COMPONENT NAME} from "~/components/..."; */

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

  }
  
}
</script>


<style lang="scss">


</style>

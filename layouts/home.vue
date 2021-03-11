<template>
  <div class="">
    <HomeHeader />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import HomeHeader from '~/components/general/HomeHeader.vue'
import Footer from '~/components/general/Footer.vue'

export default {
  components: {
    Footer,
    HomeHeader,
  }
}
</script>

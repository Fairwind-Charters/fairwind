<template>
  <div class="flex flex-col h-screen justify-between">
    <Header />
    <main class="py-6">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/general/Header.vue'
import Footer from '~/components/general/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  }
}
</script>

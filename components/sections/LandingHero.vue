<template>
  <client-only>
    <video-background
      :src="require('~/static/img/hero_video_updated.mp4')"
      :poster="content.image"
      :data-video-hey="content.video"
      preload="none"
      playsWhen="canplaythrough"
      class="h-screen"
    >
      <div class="h-screen flex flex-col justify-center items-center bg-black bg-opacity-20">
        <h1 class="title font-logo md:text-9xl sm:text-7xl text-5xl text-white text-shadow-md">Fairwind Charters</h1>
        <h2 class="text-white sm:text-2xl font-page-title text-shadow-md">Private yacht charters for all occassions</h2>
        <nuxt-link
          to="/contact"
          class="mt-4 whitespace-nowrap inline-flex whitespace-nowrap
            items-center justify-center px-8 py-2 border text-xl
            border-transparent rounded-md shadow-sm
            font-medium text-white bg-fairwind-pink-100 hover:bg-fairwind-pink-200"
        >
          Contact Us
        </nuxt-link>
      </div>
    </video-background>
    <template #placeholder>
      <div class="h-screen flex flex-col justify-center items-center bg-black bg-opacity-20" style="background: linear-gradient(45deg,#2a4ae430,#fb949e6b);">
        <h1 class="title font-logo md:text-9xl sm:text-7xl text-5xl text-white">Fairwind Charters</h1>
        <h2 class="text-white sm:text-2xl font-page-title">Private yacht charters for all occassions</h2>
        <nuxt-link
          to="/contact"
          class="mt-4 whitespace-nowrap inline-flex whitespace-nowrap
            items-center justify-center px-8 py-2 border text-xl
            border-transparent rounded-md shadow-sm
            font-medium text-white bg-fairwind-pink-100 hover:bg-fairwind-pink-200"
        >
          Contact Us
        </nuxt-link>
      </div>
    </template>
  </client-only>
</template>

<script>
export default {
  computed: {
    content() {
      return this.$store.state.siteContent.hero
    },
  }
}
</script>
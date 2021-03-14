<template>
  <main class="main text-center flex flex-col items-center justify-center">
    <client-only placeholder="video">
      <video-background
        :src="require(`~/static/video/hero_video.mp4`)"
        class="h-screen"
      >
        <div class="h-screen flex flex-col justify-center items-center bg-black bg-opacity-20" style="background: linear-gradient(45deg,#2a4ae430,#fb949e6b);">
          <h1 class="title font-logo md:text-9xl sm:text-7xl text-5xl text-white">Fairwind Charters</h1>
          <h2 class="text-white sm:text-2xl">Private yacht charters for all occassions</h2>
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
          <h2 class="text-white sm:text-2xl">Private yacht charters for all occassions</h2>
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
    <section id="tours" class="w-screen">
      <Tours />
    </section>
    <section id="instagram">
    </section>
    <section id="custom-tour">
    </section>
    <section id="about" class="w-screen">
      <AboutUs />
    </section>
    <section id="flagship">
      <OurFlagship />
    </section>
    <section id="testimonials">
    </section>
  </main>
</template>

<script>
import Tours from '~/components/general/Tours'
import AboutUs from '~/components/general/AboutUs'
import OurFlagship from '~/components/general/OurFlagship'
import Divider from '~/components/general/Divider'
export default {
  layout: 'home',
  components: {
    Tours,
    AboutUs,
    OurFlagship,
    Divider
  },
  data() {
    return {
      src: ``
    }
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>

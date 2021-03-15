<template>
  <main class="main text-center flex flex-col items-center justify-center">
    <client-only placeholder="video">
      <video-background
        :src="require(`~/static/video/hero_video.mp4`)"
        class="h-screen"
      >
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
    <DividerTop />
    <div class="w-screen flex justify-center align-center p-16 md:py-12 bg-fairwind-light-blue">
      <p class="container mx-auto text-fairwind-medium-blue font-light text-lg">We provide private yacht charters at an affordable price in the New York/New Jersey area. Our goal is to get you out on the water and having fun while maintaining the highest standards of safety and service. Please contact us and we will be happy to answer any questions. Everything is more fun on a boat!</p>
    </div>
    <DividerBottom />
    <section id="tours" class="w-screen">
      <Tours />
    </section>
    <DividerTop />
    <div class="w-screen flex jusify-center align-center p-12 bg-fairwind-light-blue"></div>
    <DividerBottom />
    <section id="instagram">
    </section>
    <section id="custom-tour" class="w-screen">
      <BuildYourOwn />
    </section>
    <DividerTop />
    <div class="w-screen flex jusify-center align-center p-12 bg-fairwind-light-blue"></div>
    <DividerBottom />
    <section id="about" class="w-screen">
      <AboutUs />
    </section>
    <DividerTop />
    <div class="w-screen flex jusify-center align-center p-12 bg-fairwind-light-blue"></div>
    <DividerBottom />
    <section id="flagship" class="w-screen">
      <OurFlagship />
    </section>
    <section id="testimonials">
    </section>
  </main>
</template>

<script>
import Tours from '~/components/general/Tours'
import AboutUs from '~/components/general/AboutUs'
import OurFlagship from '~/components/sections/OurFlagship'
import BuildYourOwn from '~/components/sections/BuildYourOwn'
import DividerTop from '~/components/general/DividerTop'
import DividerBottom from '~/components/general/DividerBottom'
export default {
  layout: 'home',
  components: {
    Tours,
    AboutUs,
    OurFlagship,
    BuildYourOwn,
    DividerTop,
    DividerBottom
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>
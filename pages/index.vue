<template>
  <main class="main text-center flex flex-col items-center justify-center">
    <LandingHero />
    <DividerTop class="bg-fairwind-light-blue" />
    <div class="w-screen flex justify-center align-center p-16 md:py-12 bg-fairwind-light-blue">
      <p class="container mx-auto text-fairwind-medium-blue font-light text-lg">{{ content.introtext }}</p>
    </div>
    <DividerBottom />
    <section id="tours" class="w-screen">
      <Tours />
    </section>
    <DividerTop class="bg-fairwind-light-blue" />
    <div class="w-screen flex jusify-center align-center p-12 bg-fairwind-light-blue"></div>
    <DividerBottom />
    <section id="instagram"></section>
    <section id="custom-tour" class="w-screen">
      <BuildYourOwn />
    </section>
    <DividerTop class="bg-fairwind-light-blue" />
    <div class="w-screen flex jusify-center align-center p-12 bg-fairwind-light-blue"></div>
    <DividerBottom />
    <section id="about" class="w-screen">
      <AboutUs />
    </section>
    <DividerTop class="bg-fairwind-light-blue" />
    <div class="w-screen flex jusify-center align-center p-12 bg-fairwind-light-blue"></div>
    <DividerBottom />
    <section id="flagship" class="w-screen">
      <OurFlagship />
    </section>
    <DividerTop class="bg-fairwind-light-blue" />
    <section id="testimonials" class="w-screen">
      <Testimonials />
    </section>
    <DividerBottom />
  </main>
</template>

<script>
import Tours from '~/components/general/Tours'
import AboutUs from '~/components/general/AboutUs'
import OurFlagship from '~/components/sections/OurFlagship'
import BuildYourOwn from '~/components/sections/BuildYourOwn'
import Testimonials from '~/components/sections/Testimonials'
import DividerTop from '~/components/general/DividerTop'
import DividerBottom from '~/components/general/DividerBottom'
import LandingHero from '~/components/sections/LandingHero'
export default {
  layout: 'home',
  components: {
    Tours,
    AboutUs,
    OurFlagship,
    BuildYourOwn,
    Testimonials,
    DividerTop,
    DividerBottom,
    LandingHero
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  },
  computed: {
    content() {
      return this.$store.state.siteContent.hero
    },
  }
}
</script>

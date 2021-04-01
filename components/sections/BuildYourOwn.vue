<template>
  <div>
    <div class="hero-image w-full bg-cover text-white flex pr-1 sm:pr-6 justify-end" :style="{ backgroundImage: `url(${content.heroimage})` }">
      <span class="font-page-title text-5xl md:text-8xl text-shadow-md">Build your own</span>
    </div>
    <div class="w-full bg-fairwind-light-blue text-fairwind-medium-blue flex pr-1 sm:pr-6 justify-end">
      <span class="font-page-title text-5xl md:text-8xl">Experience</span>
    </div>
    <DividerBottom />
    <div class="w-full experiences-grid">
      <div class="flex">
        <div v-for="(option, index) in content.optionslist" :key="index" class="experience-el flex-grow bg-cover bg-top flex items-end justify-end" :style="{ backgroundImage: `url(${option.image})` }">
          <p class="experience-el-text text-white text-3xl font-bold transform rotate-270 whitespace-nowrap text-shadow-md mb-6">{{ option.title }}</p>
        </div>
      </div>
      <div class="w-full bg-fairwind-medium-blue flex items-center pt-12 pb-12">
        <div class="container mx-auto px-2 lg:text-2xl">
          <p class="text-fairwind-light-blue font-light">{{ content.sidetext }}</p>
          <p class="text-fairwind-light-blue font-light">Let us know what you have in mind!</p>
          <nuxt-link
            to="/contact"
            class="mt-4 whitespace-nowrap inline-flex whitespace-nowrap
              items-center justify-center px-8 py-2 border text-xl
              border-transparent rounded-md shadow-sm
              font-medium text-white bg-fairwind-pink-100 hover:bg-fairwind-pink-200"
            >
            Contact Us
          </nuxt-link>
          <nuxt-link
            to="/faqs"
            class="text-fairwind-light-blue mt-1 underline block">
            Faqs
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DividerBottom from '~/components/general/DividerBottom'
export default {
  components: {
    DividerBottom
  },
  computed: {
    content() {
      return this.$store.state.siteContent.buildyourown
    }
  }
}
</script>

<style lang="postcss" scoped>
.hero-image {
  padding-top: 35vh;
  background-position: center;
}
.experiences-grid {
  display: grid;
  grid-template-columns: 65% 35%;
  grid-template-rows: 30rem;
  @media (max-width: 800px) {
    grid-template-columns: 100%;
  }
}
.experience-el:last-child {
  overflow-x: hidden;
}
.experience-el-text {
  white-space: nowrap;
  width: 25px;
}
/* .text-shadow {
  text-shadow: 0px 0px 8px rgba(0,0,0,0.10);
} */
</style>

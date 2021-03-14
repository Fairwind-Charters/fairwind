<template>
  <!-- <div class="grid md:grid-flow-col grid-flow-row">
    <div class="container mx-auto px-6 grid md:grid-cols-2">
      <div class="">
        <img alt="Dana owner image" class="block h-auto w-full" :src="`${content.image}`">
      </div>
      <div class="mt-8 sm:mt-0 sm:px-8 flex flex-col about-us-content">
        <span class="font-light text-xl">{{ content.quote }}</span>
        <span class="font-extralight">- Dana Murphy, owner</span>
        <nuxt-link
          to="/crew"
          class="mt-4 whitespace-nowrap inline-flex whitespace-nowrap justify-center px-8 py-2 border text-xl
            border-transparent rounded-md shadow-sm
            font-medium text-white bg-fairwind-pink-100 hover:bg-fairwind-pink-200"
        >
          Meet the crew!
        </nuxt-link>
      </div>
    </div>
    <div class="mx-auto md:flex md:flex-col md:items-end md:h-screen md:w-full md:sticky inset-y-0 row-start-1 md:row-auto">
      <h1 class="section-title font-page-title md:relative m-0 md:transform md:rotate-270 text-fairwind-medium-blue text-6xl whitespace-no-wrap">About Us</h1>
    </div>
  </div> -->
  <div class="grid md:grid-flow-col grid-flow-row">
    <div class="flex flex-col md:flex-row items-center w-full">
      <div class="about-us-image w-full md:h-full lg:w-1/2 lg:py-6 text-center bg-cover" :style="{ backgroundImage: `url(${content.image})` }"></div>
      <div class="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
        <p class="font-light text-xl text-left">{{ content.quote }}</p>
        <p class="font-extralight text-left mt-2">- Dana Murphy, owner</p>
        <nuxt-link
          to="/crew"
          class="mt-6 whitespace-nowrap inline-flex whitespace-nowrap justify-center px-8 py-2 border text-xl
            border-transparent rounded-md shadow-sm
            font-medium text-white bg-fairwind-pink-100 hover:bg-fairwind-pink-200"
        >
          Meet the crew!
        </nuxt-link>
      </div>
    </div>
    <div class="mx-auto md:flex md:flex-col md:items-end md:h-screen md:w-full md:sticky inset-y-0 row-start-1 md:row-auto">
      <h1 class="section-title font-page-title md:relative m-0 md:transform md:rotate-270 text-fairwind-medium-blue text-6xl whitespace-no-wrap">About Us</h1>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    content() {
      return this.$store.state.siteContent.aboutus
    }
  }
}
</script>

<style lang="postcss" scoped>
.owner-img {
  flex: 1 0 50%;
}
.about-us-content {
  padding-top: 15vw;
}
.section-title {
  @media (min-width: 768px) {
    font-size: 10vw;
    width: 10vw;
    top: 3.5em;
  }
}
.about-us-image {
  @media (max-width: 768px) {
    height: 300px;
    background-position: 0% 25%;
  }
}
</style>
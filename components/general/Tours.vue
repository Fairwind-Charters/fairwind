<template>
  <div class="flex flex-col flex-col-reverse md:flex-row">
    <div class="tours-container flex-grow">
      <div class="mobile-title z-20">
        <div class="mx-auto flex h-full justify-center items-center">
          <h1 class="section-title font-page-title m-0 text-fairwind-medium-blue text-6xl whitespace-no-wrap">
            Our Tours
          </h1>
        </div>
      </div>
      <div v-for="(tour, index) in tours" :key="index" class="column" :style="{ backgroundImage: `url(${tour.image})` }">
        <div class="font-page-title h-full flex flex-col justify-center text-white text-xl md:text-3xl column-inner whitespace-no-wrap">
          <h3 class="z-10 text-shadow-md">{{ tour.name }}</h3>
          <span class="z-10 text-shadow-md">{{ tour.length }}</span>
          <span class="z-10 text-shadow-md">{{ tour.cost }}</span>
          <div class="absolute tour-description text-sm md:text-xl font-sans w-6/12">
            <div class="bg-fairwind-medium-blue bg-opacity-75 p-4 rounded">
              <div class="tour-description-text">
                <span class="font-light">{{ tour.description }}</span>
              </div>
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
          </div>
        </div>
      </div>
    </div>
    <div class="desktop-title mx-auto md:flex-col md:items-end row-start-1 md:row-auto">
      <h1 class="section-title font-page-title md:relative m-0 md:transform md:rotate-270 text-fairwind-medium-blue text-6xl whitespace-no-wrap">
        Our Tours
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    tours() {
      return this.$store.state.siteContent.tours.tours
    }
  },
}
</script>

<style lang="postcss" scoped>
.tours-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 98vh;
  max-width: 85vw;
  @media (max-width: 1190px) {
    max-width: 100vw;
    min-height: 120vh;
    grid-template-columns: none;
    grid-template-rows: 20vh;
  }
}
.column {
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  transition: 1s ease;
  position: relative;
  @media (max-width: 1190px) {
    background-position: 0% 25%;
  }
}
.column:before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(to bottom right,#002f4b,#002f4b);
  opacity: .3; 
}
.column:hover:before {
  opacity: 0; 
}
.column:hover {
  padding-right: 30vw;
  @media (max-width: 1190px) {
    padding-right: 0vw;
    padding-bottom: 30vh;
  }
}
.column-inner {
  margin-left: 1vw;
}
.section-title {
  @media (min-width: 768px) {
    font-size: 10vw;
    width: 10vw;
    top: 4em;
  }
}
.tour-description {
  white-space: initial;
  left: 45%;
  opacity: 0;
  transition: opacity 0.1s ease-in;
  @media (max-width: 1190px) {
    top: 45%;
    left: 27%;
    padding-bottom: 30vh;
  }
}
.column:hover .tour-description {
  opacity: 1;
  transition: opacity 0.5s ease-in 1s;
}
.mobile-title {
  display: none;
  @media (max-width: 1190px) {
    display: block;
  }
}
.desktop-title {
  display: none;
  @media (min-width: 1190px) {
    display: flex;
  }
}
</style>
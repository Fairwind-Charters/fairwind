<template>
  <div class="testimonials-wrapper">
    <div class="container mx-auto flex justify-start">
      <h2 class="font-page-title text-6xl px-4 text-fairwind-medium-blue">Happy Customers</h2>
    </div>
    <div class="container mx-auto py-8 px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          <div v-for="(testimonial, index) in content.list" :key="index" class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4">
            <article class="overflow-hidden rounded-lg shadow-lg">
              <div class="bg-cover bg-center w-full h-48" :style="{ backgroundImage: `url(${testimonial.image})` }">
              </div>
              <header class="flex items-left justify-between leading-tight p-2 md:p-4">
                <p class="text-sm font-light text-left">
                  {{ testimonial.quote }}
                </p>
              </header>
              <footer class="flex items-right justify-between leading-none px-2 md:px-4 pb-2 md:pb-4">
                <a class="flex items-center no-underline hover:underline text-black" href="#">
                  <p class="ml-2 text-sm text-fairwind-medium-blue text-right">
                    {{ testimonial.customername }}
                  </p>
                </a>
              </footer>
            </article>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    content() {
      return this.$store.state.siteContent.testimonials
    },
  }
}
</script>

<style lang="postcss" scoped>
.testimonials-wrapper {
  background: rgb(200,240,238);
  background: linear-gradient(180deg, rgba(200,240,238,1) 0%, rgba(255,255,255,1) 50%, rgba(200,240,238,1) 100%);
}
</style>
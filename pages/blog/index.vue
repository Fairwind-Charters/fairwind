<template>
  <div class="page-content grid md:grid-flow-col grid-flow-row">
    <div class="faqs-content-wrapper mx-auto px-6">
      <div class="relative flex w-full items-stretch mb-3">
        <div v-if="blogPosts.length" class="-mx-1 lg:-mx-4">
          <template v-for="(blogPost, index) in blogPosts">
            <nuxt-link :key="index" :to="`blog/${blogPost.slug}`" >
              <article class="flex flex-col shadow my-4" :class="[ index === 0 ? 'featured-article' : 'regular-article' ]">
                <!-- Article Image -->
                <div class="hover:opacity-75 bg-cover bg-center py-48" :style="{ backgroundImage: `url(${blogPost.cover})` }"></div>
                <div class="bg-white flex flex-col justify-start p-6 bg-fairwind-light-blue text-fairwind-medium-blue">
                  <p class="text-3xl hover:text-gray-700 font-section-title font-page-title">{{ blogPost.title}}</p>
                  <p class="text-sm pb-3 text-lg font-light">
                      By {{ blogPost.author }}, {{ formatDate(blogPost.date) }}
                  </p>
                  <p class="pb-2">{{ blogPost.description }}</p>
                  <p class="uppercase text-gray-800 hover:text-black">Continue Reading <svg class="svg-inline--fa fa-arrow-right fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg><!-- <i class="fas fa-arrow-right"></i> --></p>
                </div>
              </article>
            </nuxt-link>
          </template>
        </div>
        <div v-else class="-mx-1 lg:-mx-4">
          <h2>Check back soon for news about Fairwind Charters.</h2>
        </div>
      </div>
    </div>
    <div class="mx-auto md:flex md:flex-col md:items-end md:h-screen md:w-full md:sticky inset-y-0 row-start-1 md:row-auto">
      <h1 class="section-title font-page-title md:relative m-0 md:transform md:rotate-270 text-fairwind-medium-blue text-6xl whitespace-no-wrap">News</h1>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'Fairwind Charters Blog',
    }
  },
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts
    }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString(process.env.lang) || ''
    }
  }
}
</script>

<style lang="postcss" scoped>
.section-title {
  @media (min-width: 768px) {
    font-size: 10vw;
    width: 10vw;
    top: 1.8em;
  }
  @media (min-width: 1600px) {
    font-size: 160px;
  }
}
.featured-article {
  width: 80vw;
}
</style>

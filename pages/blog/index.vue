<template>
  <div class="page-content grid md:grid-flow-col grid-flow-row">
    <div class="faqs-content-wrapper mx-auto px-6">
      <div class="relative flex w-full items-stretch mb-3">
        <div class="-mx-1 lg:-mx-4">
          <div v-for="(blogPost, index) in blogPosts" :key="index" class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4">
            <nuxt-link :to="`blog/${blogPost.slug}`" class="article article--clickable">
            <article class="overflow-hidden rounded-lg shadow-lg">
              <div class="bg-cover bg-center w-full h-48" :style="{ backgroundImage: `url(${blogPost.cover})` }">
              </div>
              <header class="flex items-left justify-between leading-tight p-2 md:p-4">
                <p class="text-sm font-light text-left">
                  {{ blogPost.title }}
                </p>
              </header>
              <footer class="flex items-right justify-between leading-none px-2 md:px-4 pb-2 md:pb-4">
                <a class="flex items-center no-underline hover:underline text-black" href="#">
                  <p class="ml-2 text-sm text-fairwind-medium-blue text-right">
                    By {{ blogPost.author }}
                  </p>
                </a>
              </footer>
            </article>
            </nuxt-link>
          </div>
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
}
.cards {
  height: 30rem;
}
</style>
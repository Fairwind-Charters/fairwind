<template>
  <div class="container mx-auto">
    <article class="flex flex-col my-4" :class="[ index === 0 ? 'featured-article' : 'regular-article' ]">
      <!-- Article Image -->
      <div class="bg-cover bg-center py-48" :style="{ backgroundImage: `url(${blogPost.cover})` }"></div>
      <div class="bg-white flex flex-col justify-start p-6 bg-fairwind-light-blue text-fairwind-medium-blue">
        <p class="text-3xl hover:text-gray-700 font-section-title font-page-title">{{ blogPost.title}}</p>
        <p class="text-sm pb-3 text-lg font-light">
            By {{ blogPost.author }}, {{ formatDate(blogPost.date) }}
        </p>
        <p class="pb-2">{{ blogPost.description }}</p>
      </div>
      <div class="p-4">
        <div v-html="$md.render(blogPost.body)" />
      </div>
    </article>
  </div>
</template>
<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { blogPost: payload }
    else
      return {
        blogPost: await require(`~/assets/content/blog/${params.blog}.json`)
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

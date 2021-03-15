<template>
  <div class="page-content grid md:grid-flow-col grid-flow-row">
    <div class="faqs-content-wrapper mx-auto px-6">
      <div class="relative flex w-full flex-wrap items-stretch mb-3">
        <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
          <font-awesome-icon :icon="['fas', 'search']"/>
        </span>
        <input v-model="text" @input="filterFaqs" type="text" placeholder="Search..." class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full pl-10"/>
        <p v-show="showSearchError" class="mt-4 font-light text-lg md:text-2xl">Your search had no results</p>
      </div>
      <div v-for="(faq, index) in faqs" :key="index" class="text-lg md:text-2xl">
        <p class="font-light mb-1">{{ faq.question }}</p>
        <p class="mb-6 p-2 text-fairwind-medium-blue bg-fairwind-light-blue">{{ faq.answer }}</p>
      </div>
    </div>
    <div class="mx-auto md:flex md:flex-col md:items-end md:h-screen md:w-full md:sticky inset-y-0 row-start-1 md:row-auto">
      <h1 class="section-title font-page-title md:relative m-0 md:transform md:rotate-270 text-fairwind-medium-blue text-6xl whitespace-no-wrap">FAQs</h1>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    content() {
      return this.$store.state.siteContent.faqs
    }
  },
  methods: {
    filterFaqs() {
      const text = this.text;
      this.faqs = this.content.list.filter((faq) => {
        const match = (faq.answer.includes(text) || faq.question.includes(text));
        return match;
      });
      if (this.faqs.length === 0) this.showSearchError = true;
      if (this.faqs.length > 0) this.showSearchError = false;
    }
  },
  data() {
    return {
      text: '',
      faqs: this.$store.state.siteContent.faqs.list,
      showSearchError: false,
    }
  }
}
</script>

<style lang="postcss" scoped>
.section-title {
  @media (min-width: 768px) {
    font-size: 10vw;
    width: 10vw;
    top: 1.25em;
  }
}
.faqs-content-wrapper {
  width: 90vw;
}
</style>
<template>
  <nuxt-link
    class="btn 
      block
      bg-pink-400
      hover:bg-pink-500
      bg-opacity-90"
    :to="{hash: 'contact'}" 
    v-scroll-to="{el: '#contact'}">
    {{ text }}
  </nuxt-link>
</template>

<script>
export default {
  name: 'ContactButton',
  props: {
    text: {
      type: String,
      default: 'Contact Us',
      required: false
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>
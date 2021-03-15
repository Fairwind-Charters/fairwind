<template>
  <div>
    <div class="copy-and-gallery bg-fairwind-medium-blue py-24 px-4">
      <div class="copy container mx-auto">
        <p class="text-left text-white font-light">"{{ content.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import DividerBottom from '@/components/general/DividerBottom'
export default {
  components: {
    DividerBottom
  },
  computed: {
    content() {
      return this.$store.state.siteContent.flagship
    }
  }
}
</script>
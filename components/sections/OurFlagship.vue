<template>
  <div>
    <div class="copy-and-gallery bg-fairwind-medium-blue py-24 px-4">
      <div class="copy container mx-auto">
        <p class="text-left text-white font-light">"{{ content.body }}</p>
        <div class="boat-gallery-wrapper py-4">
          <client-only>
            <vue-picture-swipe :items="images" />
          </client-only>
        </div>
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
    },
    images() {
      const { images } = this.$store.state.siteContent.flagship;
      return images.map((img) => ({
        src: img.src,
        thumbnail: img.src,
        w: 1200,
        h: 900,
        alt: img.alt
      }));
    }
  },
}
</script>

<style lang="postcss">
.boat-gallery-wrapper .my-gallery {
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
}
.boat-gallery-wrapper .my-gallery figure {
  flex-grow: 1;
  min-width: 20%;
  margin-left: 5px;
  margin-right: 5px;
}
.boat-gallery-wrapper .my-gallery figure a img {
  border-radius: 1px;
}
.boat-gallery-wrapper .my-gallery figure a img:hover {
  transform: scale(1.05);
  transition: all 0.15s ease-in-out;
}
</style>
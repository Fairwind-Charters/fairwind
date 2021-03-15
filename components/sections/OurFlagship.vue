<template>
  <div class="copy-and-gallery bg-fairwind-medium-blue pb-24">
    <div class="video-container v-full bg-cover text-white" :style="{ backgroundImage: `url(${videoThumbnail})` }">
      <div class="p-32">
        <a :href="content.videourl" target="_blank" class="text-6xl">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'youtube' } "/>
        </a>
      </div>
      <div class="container mx-auto flex justify-end">
        <h2 class="font-page-title text-6xl px-4">Our Flagship</h2>
      </div>
    </div>
    <div class="copy container mx-auto px-4">
      <p class="text-left text-white font-light py-8">"{{ content.body }}</p>
      <div class="boat-gallery-wrapper py-4">
        <client-only>
          <vue-picture-swipe :items="images" />
        </client-only>
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
    },
    videoThumbnail() {
      const { videourl } = this.$store.state.siteContent.flagship;
      const id = videourl.split('watch?v=').pop();
      return `https://img.youtube.com/vi/${id}/hqdefault.jpg`
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
<template>
  <div class="boat-gallery-wrapper py-4">
    <client-only>
      <vue-picture-swipe :items="images" />
      <template slot="placeholder">
        <div class="my-gallery">
          <figure></figure>
          <a></a>
          <img></img>
        </div>
      </template>
    </client-only>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    }
  }
}
</script>
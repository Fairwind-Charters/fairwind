<template>
  <main class="main text-center flex flex-col items-center justify-center">
    <!-- <logo /> -->
      <video-background
        :src="require(`~/static/video/hero_video.mp4`)"
        class="h-screen"
      >
        <div class="h-screen flex flex-col justify-center items-center">
          <h1 class="title font-logo sm:text-8xl text-white">Fairwind Charters</h1>
          <h2 class="text-white sm:text-2xl">Private yacht charters for all occassions</h2>
        </div>
      </video-background>
    <section id="tours">
    </section>
    <section id="instagram">
    </section>
    <section id="custom-tour">
    </section>
    <section id="about-us">
    </section>
    <section id="our-flagship">
    </section>
    <section id="testimonials">
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      src: ``
    }
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>

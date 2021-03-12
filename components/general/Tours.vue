<template>
  <div class="flex">
    <div class="tours-container flex-grow">
      <div class="column1 column" :style="{ backgroundImage: `url(${backgroundUrl})` }">
        <div class="font-page-title h-full flex flex-col justify-center text-white text-3xl column-inner whitespace-no-wrap">
          <h3>Liberty</h3>
          <span>3 hours</span>
          <span>$899</span>
        </div>
      </div>
      <div class="column2 column" :style="{ backgroundImage: `url(${backgroundUrl2})` }">
        <div class="font-page-title h-full flex flex-col justify-center text-white text-3xl column-inner whitespace-no-wrap">
            <h3>Bridges</h3>
            <span>4hours</span>
            <span>$1199</span>
        </div>
      </div>
      <div class="column3 column" :style="{ backgroundImage: `url(${backgroundUrl3})` }">
        <div class="font-page-title h-full flex flex-col justify-center text-white text-3xl column-inner whitespace-no-wrap">
          <h3>Manhattan</h3>
          <span>5 hours</span>
          <span>$1499</span>
        </div>
      </div>
      <div class="column4 column" :style="{ backgroundImage: `url(${backgroundUrl4})` }">
        <div class="font-page-title h-full flex flex-col justify-center text-white text-3xl column-inner whitespace-no-wrap">
          <h3>Build your own</h3>
          <span>$299/hour</span>
          <span>3 hour min</span>
        </div>
      </div>
    </div>
    <div class="mx-auto md:flex md:flex-col md:items-end row-start-1 md:row-auto">
      <h1 class="section-title font-page-title md:relative m-0 md:transform md:rotate-270 text-fairwind-medium-blue text-6xl whitespace-no-wrap">
        Our Tours
      </h1>
    </div>
  </div>
</template>

<script>
import backgroundUrl from '~/assets/img/20200923_165737.jpg'
import backgroundUrl2 from '~/assets/img/20200801_182650.jpg'
import backgroundUrl3 from '~/assets/img/20200906_190243.jpg'
import backgroundUrl4 from '~/assets/img/20200830_170253.jpg'
export default {
  data() {
    return {
      backgroundUrl,
      backgroundUrl2,
      backgroundUrl3,
      backgroundUrl4
    }
  }
}
</script>

<style lang="postcss" scoped>
.tours-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 98vh;
  /* grid-gap: 1vw; */
  /* margin: 0 auto; */
  max-width: 85vw;
}
.column {
  /* display: grid;
  grid-template-columns: repeat(3, 4vw);
  grid-template-rows: repeat(10, 8vh); */
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  transition: 1s ease;
}
.column:hover {
  padding-right: 30vw;
}
.column-inner {
  margin-left: 1vw;
}
.column1 {
  background-color: #5715e4;
}
.column2 {
  background-color: #ff6a61;
}
.column3 {
  background-color: #8bffe7;
}
.column4 {
  background-color: #ffe887;
}
.section-title {
  @media (min-width: 768px) {
    font-size: 10vw;
    width: 10vw;
    top: 4em;
  }
}
</style>
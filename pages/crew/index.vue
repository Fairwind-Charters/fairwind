<template>
  <div class="page-content grid md:grid-flow-col grid-flow-row">
    <div class="container mx-auto px-6">
      <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta dictum malesuada. Praesent facilisis, ante sed hendrerit blandit, est magna malesuada nunc, nec interdum nulla nulla quis nulla. Phasellus id ultrices quam, nec porttitor mi. Quisque efficitur fringilla sagittis. Quisque a mi eu ipsum commodo commodo sit amet sed libero. Quisque quis magna sit amet enim pellentesque varius. Duis sodales tellus est, in varius ipsum ultrices id. Phasellus accumsan sodales eros et malesuada. Quisque quis magna sit amet enim pellentesque varius. Phasellus id ultrices quam, nec porttitor mi.</span>
      </div>
      <div class="container my-12 mx-auto px-4 md:px-12">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <!-- Column -->
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <!-- Article -->
          <article class="overflow-hidden">
            <a href="#">
              <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random">
            </a>
            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 class="text-lg">
                <a class="no-underline hover:underline text-black" href="#">
                  Article Title
                </a>
              </h1>
            </header>
          </article>
          <!-- END Article -->
        </div>
        <!-- END Column -->
      </div>
    </div>
    </div>
    <div class="mx-auto md:flex md:flex-col md:items-end md:h-screen md:w-full md:sticky inset-y-0 row-start-1 md:row-auto">
      <h1 class="section-title font-page-title md:relative m-0 md:transform md:rotate-270 text-fairwind-medium-blue text-8xl whitespace-no-wrap">Our Crew</h1>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="postcss" scoped>
.section-title {
  @media (min-width: 768px) {
    font-size: 10vw;
    width: 10vw;
    top: 3.5em;
  }
}
</style>
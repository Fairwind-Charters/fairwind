<template>
<div>
  <DividerTop class="bg-fairwind-dark-blue" />
  <footer class="footer bg-fairwind-dark-blue pt-12">
    <div class="container mx-auto px-6">
      <div class="sm:flex sm:mt-8">
        <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
          <div class="flex flex-col">
            <span class="font-bold text-white uppercase">Phone</span>
            <span class="my-2"><a href="#" class="text-white text-md hover:text-blue-500">{{ content.phone }}</a></span>
            <span class="font-bold text-white uppercase">E-mail</span>
            <span class="my-2">
              <a :href="`mailto:${content.email}`" class="text-white text-md hover:text-blue-500" rel="noreferrer">
                {{ content.email }}
              </a>
            </span>
            <span class="font-bold text-white uppercase">Follow Us</span>
            <div class="social-media-links text-white text-4xl">
              <a :href="content.facebook" target="_blank" rel="noreferrer">
                <span class="sr-only">Link to Facebook</span>
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" />
              </a>
              <a :href="content.instagram" target="_blank" rel="noreferrer">
                <span class="sr-only">Link to Instagram</span>
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' } "/>
              </a>
            </div>
          </div>
          <div class="flex flex-col md:flex-row p-4">
            <div class="font-light text-white text-xs p-4 flex flex-col align-center">
              <p class="mt-3 text-center md:text-left">Edgewater Marina</p>
              <p class="mt-2 text-center md:text-left">989 River Rd</p>
              <p class="mt-2 text-center md:text-left">Edgewater NJ, 07020</p>
            </div>
            <div class="w-full md:w-1/2">
              <iframe title="fairwind-charters-map" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Fairwind%20Charters%20Edgewater%20Marina+(Fairwind%20Charters)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-6">
        <div class="mt-16 flex flex-row items-center">
            <div class="sm:w-2/3 text-center py-6">
                <p class="text-sm text-white font-light mb-2">
                    © 2020 Fairwind Charters LLC
                </p>
            </div>
            <div class="sm:w-2/3 text-center py-6">
                <p class="text-sm text-white font-light mb-2">
                    <a href="https://didacbigorda.dev" target="_blank" rel="noreferrer">
                      <span class="sr-only">Link to developer's website</span>
                      Designed and developed by Didac Bigorda
                    </a>
                </p>
            </div>
        </div>
    </div>
  </footer>
</div>
</template>

<script>
import DividerTop from '~/components/general/DividerTop'
export default {
  components: {
    DividerTop
  },
  computed: {
    content() {
      return this.$store.state.siteContent.contactus
    }
  }
}
</script>
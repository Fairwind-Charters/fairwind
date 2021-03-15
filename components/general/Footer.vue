<template>
  <footer class="footer bg-fairwind-dark-blue pt-1">
    <div class="container mx-auto px-6">
      <div class="sm:flex sm:mt-8">
        <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
          <div class="flex flex-col">
            <span class="font-bold text-white uppercase">Phone</span>
            <span class="my-2"><a href="#" class="text-white text-md hover:text-blue-500">{{ content.phone }}</a></span>
            <span class="font-bold text-white uppercase">E-mail</span>
            <span class="my-2">
              <a :href="`mailto:${content.email}`" class="text-white text-md hover:text-blue-500">
                {{ content.email }}
              </a>
            </span>
            <span class="font-bold text-white uppercase">Follow Us</span>
            <div class="social-media-links text-white text-4xl">
              <a href="#" target="_blank">
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" />
              </a>
              <a href="#" target="_blank">
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' } "/>
              </a>
            </div>
          </div>
          <div class="flex flex-col">
            
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
                    <a href="https://didacbigorda.dev" target="_blank">
                      Designed and developed by Didac Bigorda
                    </a>
                </p>
            </div>
        </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    content() {
      return this.$store.state.siteContent.contactus
    }
  }
}
</script>
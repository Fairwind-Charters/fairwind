<template>
  <header class="relative bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <span class="font-logo text-fairwind-medium-blue text-2xl whitespace-nowrap">Fairwind Charters</span>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <button
            type="button"
            class="bg-white rounded-md p-2 inline-flex
              items-center justify-center text-gray-400
              hover:text-gray-500 hover:bg-gray-100 focus:outline-none
              focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded="false"
            @click="menu = true"
          >
            <span class="sr-only">Open menu</span>
            <!-- Heroicon name: outline/menu -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav class="hidden md:flex space-x-10">
          <nuxt-link
            v-for="(item, index) in items"
            :key="index"
            :to="item.href"
            class="text-base font-medium text-menu-blue hover:text-gray-900"
          >
            {{ item.title }}
          </nuxt-link>
        </nav>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <div class="social-media-links text-fairwind-medium-blue text-4xl">
            <a href="#" target="_blank">
              <font-awesome-icon :icon="['fab', 'facebook']"/>
            </a>
            <a href="#" target="_blank" class="ml-1">
              <font-awesome-icon :icon="['fab', 'instagram']"/>
            </a>
          </div>
          <nuxt-link
            to="/contact"
            class="ml-8 whitespace-nowrap inline-flex whitespace-nowrap
            items-center justify-center px-4 py-2 border
            border-transparent rounded-md shadow-sm text-base
            font-medium text-white bg-fairwind-pink-100 hover:bg-fairwind-pink-200">
            Contact Us
          </nuxt-link>
        </div>
      </div>
    </div>

    <!--
      Mobile menu, show/hide based on mobile menu state.

      Entering: "duration-200 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    -->
    <div 
      v-show="menu"
      class="absolute top-0 inset-x-0 p-2 z-10 transition transform origin-top-right md:hidden">
      <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div class="pt-5 pb-6 px-5">
          <div class="flex items-center justify-between">
            <div>
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
            </div>
            <div class="-mr-2">
              <button 
                type="button"
                class="bg-white rounded-md p-2 inline-flex items-center
                  justify-center text-gray-400 hover:text-gray-500
                  hover:bg-gray-100 focus:outline-none focus:ring-2
                  focus:ring-inset focus:ring-indigo-500"
                @click="menu = false"
                >
                <span class="sr-only">Close menu</span>
                <!-- Heroicon name: outline/x -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-6">
            <nav class="grid gap-y-8">
              <nuxt-link
                v-for="(item, index) in items"
                :key="index"
                :to="item.href"
                class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
              >
                <span class="ml-3 text-base font-medium text-menu-blue">
                  {{ item.title }}
                </span>
              </nuxt-link>
            </nav>
          </div>
        </div>
        <div class="py-6 px-5 space-y-6">
          <div>
            <nuxt-link
              to="/contact"
              class="w-full flex items-center justify-center
                px-4 py-2 border border-transparent rounded-md
                shadow-sm text-base font-medium text-white
                bg-fairwind-pink-100 hover:bg-fairwind-pink-200"
            >
              Contact Us
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ContactButton from '~/components/general/ContactButton'
export default {
  name: 'Header',
  components: { ContactButton },
  data() {
    return {
      menu: false,
      items: [
        {
          title: 'Home',
          href: '/'
        },
        {
          title: 'About',
          href: { path: '/', hash:'#about'}
        },
        {
          title: 'Our Tours',
          href: { path: '/', hash:'#tours'}
        },
        {
          title: 'FAQs',
          href: '/faqs'
        },
        {
          title: 'News',
          href: '/news'
        },
        {
          title: 'Crew',
          href: '/crew'
        }
      ]
    }
  },
}
</script>

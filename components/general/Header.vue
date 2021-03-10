<template>
  <div
    class="text-fairwind-dark-blue bg-fairwind-light-blue"
    :class="{ 'absolute w-full h-screen top-0 left-0': menu }"
  >
    <div class="sm:mx-auto flex flex-wrap bg-opacity-0">
      <div class="w-auto p-6">
        <!-- Title -->
        <h1 class="sm:block font-logo text-2xl">Fairwind Charters</h1>
        <!-- Icon -->
        <div class="block sm:hidden">
          <i class="fa fa-rocket"></i>
        </div>
      </div>
      <!-- Desktop nav list -->
      <nav class="hidden sm:block">
        <ul class="flex">
          <li
            v-for="(item, index) in items"
            :key="index"
          >
            <nuxt-link
              :to="item.href"
              class="hover:bg-green-500 p-6 block"
            >
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <!-- Toggle menu mobile icon -->
        <div
          class="ml-auto sm:hidden p-6"
          @click="menu = !menu"
        >
          <i class="fa fa-bars"></i>
        </div>
      </div>
      <!-- Mobile nav list -->
      <nav v-show="menu" class="w-full">
        <ul class="flex flex-col text-center">
        <li
          v-for="(item, index) in items"
          :key="index"
        >
          <a
            :href="item.href"
            class="hover:bg-green-500 p-6 block"
          >
            {{ item.title }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
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
          href: '/about'
        },
        {
          title: 'Contact',
          href: '/contact'
        },
        {
          title: 'App',
          href: 'app'
        }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.nuxt-link-exact-active {
  @apply text-accent-100 bg-accent bg-opacity-20;
  &:hover {
    @apply text-white bg-accent-600;
  }
}
.light-mode {
  & .nuxt-link-exact-active {
    @apply text-accent-600;
    &:hover {
      @apply text-white;
    }
  }
}
</style>

/*
<nav class="flex items-center justify-between flex-wrap p-6">
    <ul class="flex fixed top-0 inset-x-0 p-3">
      <li class="flex-1 mr-2">
        <nuxt-link class="btn block" to="/">Home</nuxt-link>
      </li>
      <li class="flex-1 mr-2">
        <nuxt-link 
          class="btn block" 
          :to="{path: '/', hash: 'about'}"
          v-scroll-to="{el: '#about'}">
          About</nuxt-link>
      </li>
      <li class="flex-1 mr-2">
        <nuxt-link 
          class="btn block" 
          :to="{path: '/', hash: 'tours'}" 
          v-scroll-to="{el: '#tours'}">
          Our Tours</nuxt-link>
      </li>
      <li class="flex-1 mr-2">
        <nuxt-link class="btn block" to="/faqs">FAQs</nuxt-link>
      </li>
      <li class="flex-1 mr-2">
        <nuxt-link class="btn block" to="/blog">Blog</nuxt-link>
      </li>
      <li class="flex-1 mr-2">
        <nuxt-link 
          class="btn block" 
          :to="{hash: 'contact'}" 
          v-scroll-to="{el: '#contact'}">
          Contact</nuxt-link>
      </li>
      <li class="flex-1">
        <nuxt-link class="btn block" to="/crew">Crew</nuxt-link>
      </li>
      <ContactButton />
    </ul>
  </nav>
*/
<template>
  <div class="page-content grid md:grid-flow-col grid-flow-row">
    <div class="crew-content-wrapper mx-auto px-6">
      <div class="container mx-auto mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
        <span>{{ content.body }}</span>
      </div>
      <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <!-- Column -->
          <div v-for="(member, index) in content.members" :key="index" class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
          <!-- Article -->
            <article class="overflow-hidden">
              <a rel="noreferrer" @click.prevent="openModal(index)" class="crew-card">
                <div class="cards experience-el flex-grow bg-cover bg-top flex items-end justify-end" :style="{ backgroundImage: `url(${member.image})` }">
                  <span class="experience-el-text text-white text-3xl font-bold whitespace-nowrap text-shadow-md">{{member.role}}</span>
                </div>
                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 class="text-lg">
                    <a class="no-underline hover:underline text-black" rel="noreferrer" @click.prevent="">
                      <span class="sr-only">Link to crew member info</span>
                      {{member.name}}
                    </a>
                  </h1>
                </header>
              </a>
            </article>
          <!-- END Article -->
          </div>
          <!-- END Column -->
        </div>
      </div>
    </div>
    <div class="mx-auto md:flex md:flex-col md:items-end md:h-screen md:w-full md:sticky inset-y-0 row-start-1 md:row-auto">
      <h1 class="section-title font-page-title md:relative m-0 md:transform md:rotate-270 text-fairwind-medium-blue text-6xl whitespace-no-wrap">Our Crew</h1>
    </div>
    <Modal :crewMember="content.members[clickedCrewIndex]" :show="showModal" @close="closeModal" />
  </div>
</template>

<script>
import Modal from '~/components/general/Modal'
export default {
  components: {
    Modal
  },
  head() {
    return {
      title: 'Fairwind Charters: Meet our crew',
    }
  },
  computed: {
    content() {
      return this.$store.state.siteContent.crew
    }
  },
  data() {
    return {
      clickedCrewIndex: 0,
      showModal: false,
    }
  },
  methods: {
    openModal(index) {
      this.clickedCrewIndex = index;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  }
}
</script>

<style lang="postcss" scoped>
.section-title {
  @media (min-width: 768px) {
    font-size: 10vw;
    width: 10vw;
    top: 3.5em;
  }
  @media (min-width: 1600px) {
    font-size: 160px;
  }
}
.cards {
  height: 30rem;
}
.crew-card:hover {
  cursor: pointer;
}
</style>
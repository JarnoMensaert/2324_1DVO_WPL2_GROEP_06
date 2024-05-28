<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import CookieBanner from './components/CookiesComponent.vue';

export default {
  data() {
    return {
      showScrollButton: false
    }
  },
  components: {
    HeaderComponent,
    CookieBanner
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      this.showScrollButton = scrollPosition > 10; // Adjust the threshold as needed
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    }
};
</script>

<template>
  <header>
    <div class="wrapper">

    </div>
  </header>
  <div id="app">
    <button v-show="showScrollButton" @click="scrollToTop" class="scroll-top-button"/>
    <cookie-banner></cookie-banner>
    <!-- Your other components or content -->
  </div>

  <RouterView/>
</template>

<style scoped>

</style>

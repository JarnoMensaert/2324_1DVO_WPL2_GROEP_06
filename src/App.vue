<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import CookieBanner from './components/CookiesComponent.vue';

export default {

  data() {
    return {
    }
  },
  components: {
    HeaderComponent,
    CookieBanner
  },
}
</script>

<template>
  <header>
    <div class="wrapper">

    </div>
  </header>
  <div id="app">
    <cookie-banner></cookie-banner>
    <!-- Your other components or content -->
  </div>

  <RouterView/>
</template>

<style scoped>

</style>

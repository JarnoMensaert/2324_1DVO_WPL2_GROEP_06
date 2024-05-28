<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '../components/FooterComponent.vue';
import DiscoverMoreComponent from '../components/DiscoverMoreComponent.vue'
import WatchComponent from '../components/WatchComponent.vue'
import LookingForComponent from '../components/LookingForComponent.vue'
import StoriesComponent from '../components/StoriesComponent.vue'

export default {
  data() {
    return {
    }
  },
  components: {
    HeaderComponent,
    FooterComponent,
    DiscoverMoreComponent,
    WatchComponent,
    LookingForComponent,
    StoriesComponent,
  },
}
</script>

<template>
  <HeaderComponent/>
  <DiscoverMoreComponent/>
  <WatchComponent/>
  <LookingForComponent/>
  <StoriesComponent/>
  <FooterComponent/>
</template>

<style>
</style>
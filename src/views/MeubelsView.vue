<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import MeubelsComponent from "@/components/MeubelsComponent.vue";

export default {
  data() {
    return {}
  },
  components: {
    HeaderComponent,
    MeubelsComponent,
    FooterComponent,
  }
}
</script>

<template>
  <HeaderComponent/>
  <MeubelsComponent/>
  <FooterComponent/>
</template>

<style scoped>

</style>
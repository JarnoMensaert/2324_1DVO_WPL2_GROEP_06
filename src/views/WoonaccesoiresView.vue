<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import MeubelsComponent from "@/components/MeubelsComponent.vue";
import WoonaccesoireComponent from "@/components/WoonaccesoireComponent.vue";

export default {
  data() {
    return {}
  },
  components: {
    WoonaccesoireComponent,
    MeubelsComponent,
    HeaderComponent,
    FooterComponent,
  }
}
</script>

<template>
  <HeaderComponent/>
  <WoonaccesoireComponent/>
  <FooterComponent/>
</template>

<style scoped>

</style>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import VoorwaardenComponent from "@/components/VoorwaardenComponent.vue";

export default {
  data() {
    return {}
  }
  ,
  components: {
    VoorwaardenComponent,
    HeaderComponent,
    FooterComponent,
  },
}
</script>

<template>
  <HeaderComponent/>

  <VoorwaardenComponent/>
  <FooterComponent/>
</template>

<style scoped>

</style>
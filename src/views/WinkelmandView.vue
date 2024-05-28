<script>
import VoorwaardenComponent from "@/components/VoorwaardenComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import WinkelmandItemComponent from "@/components/WinkelmandItemComponent.vue";
import WinkelmandComponent from "@/components/WinkelmandComponent.vue";

export default {
  name: 'WinkelmandView',
  components: {WinkelmandComponent, HeaderComponent},
  computed: {},
  methods: {
    data() {
      return {}
    }
    ,
    components: {
      WinkelmandComponent,
      WinkelmandItemComponent,
      VoorwaardenComponent,
      HeaderComponent,
      FooterComponent,
    },
  }
}
</script>

<template>
  <HeaderComponent/>
  <WinkelmandComponent/>
  <FooterComponent/>
</template>

<style>

</style>
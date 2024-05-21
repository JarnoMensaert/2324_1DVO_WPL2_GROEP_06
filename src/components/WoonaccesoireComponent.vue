<script>

import MeubelItemComponent from "@/components/MeubelItemComponent.vue";
import FilterComponent from "@/components/FilterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import AanmeldenComponent from "@/components/AanmeldenComponent.vue";
import AccountAanmaakComponent from "@/components/AccountAanmaakComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import WoonaccesoireItemComponent from "@/components/WoonaccesoireItemComponent.vue";

export default {
  data() {
    return {
      Titel: "Meubels",
    }
  },
  components: {
    HeaderComponent,
    FilterComponent,
    AanmeldenComponent,
    AccountAanmaakComponent,
    FooterComponent,
    MeubelItemComponent,
    WoonaccesoireItemComponent
  },
}

</script>

<template>
  <div class="aboutTitle">{{ Titel }}</div>
  <div class="breadcrumb">
    <p>HOME / WOONACCESOIRES</p>
    <hr>
  </div>
  <FilterComponent/>
  <div class="meubelsRij">
    <WoonaccesoireItemComponent/>
  </div>
</template>

<style scoped>

</style>
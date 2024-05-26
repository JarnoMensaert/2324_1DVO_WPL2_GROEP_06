<script>

import MeubelItemComponent from "@/components/MeubelItemComponent.vue";
import FilterComponent from "@/components/FilterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import AanmeldenComponent from "@/components/AanmeldenComponent.vue";
import AccountAanmaakComponent from "@/components/AccountAanmaakComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

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
    MeubelItemComponent
  },
}

</script>

<template>
  <div class="aboutTitle">{{ Titel }}</div>
  <div class="breadcrumb">
    <p>HOME / MEUBELS</p>
    <hr>
  </div>
  <div class="meubelsRij">
    <MeubelItemComponent/>
  </div>
</template>

<style scoped>

</style>
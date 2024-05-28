<script>

import WinkelmandItemComponent from "@/components/WinkelmandItemComponent.vue";
import {defineComponent} from "vue";

export default {
  data() {
    return {
      Titel: "Meubels",
    }
  },
  components: {WinkelmandItemComponent}
}
</script>

<template>
  <div class="breadcrumb">
    <p>HOME / WINKELMAND</p>
    <hr>
  </div>
  <div class="winkelmandItems">
    <WinkelmandItemComponent/>
  </div>
</template>

<style scoped>

</style>
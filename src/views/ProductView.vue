<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import ProductComponent from "@/components/ProductComponent.vue";
export default {
  name: "product",
  data() {
    return {
    }
  },
  components: {
    ProductComponent,
    HeaderComponent,
    FooterComponent,
  },
}
</script>

<template>
  <HeaderComponent/>
  <ProductComponent/>
  <FooterComponent/>
</template>

<style scoped>

</style>
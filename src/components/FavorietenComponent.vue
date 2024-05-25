<script>
export default {
  props: {
    productId: Number,
  },
  data() {
    return {
      product: null,
    };
  },
  mounted() {
    this.fetchProductData();
  },
  methods: {
    async fetchProductData() {
      try {
        const response = await fetch(`http://localhost:3000/api/product/${this.productId}`);
        const data = await response.json();
        this.product = data;
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    },
  },
};
</script>

<template>
  <div v-if="product" class="favorieten">
    <div class="favorieten-image">
      <img :src="product.productafbeelding">
    </div>
    <div class="favorieten-info">
      <h1>{{ product.producttitel }}</h1>
      <p>{{ product.productomschrijving }}</p>
      <p class="price">€ {{ product.prijs.toFixed(2) }}</p>
    </div>
    <div class="favorieten-icon">
      <button><img src="/public/assets/Icons/favorite.png"></button>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

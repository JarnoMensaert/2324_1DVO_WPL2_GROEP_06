<script>
import { useFavoritesStore } from '@/stores/favoritePinia.js'; // Import the Pinia store

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
    async toggleFavorite() {
      try {
        const favoritesStore = useFavoritesStore(); // Access the Pinia store
        await favoritesStore.toggleFavorite(this.productId); // Toggle favorite status
      } catch (error) {
        console.error('Error toggling favorite:', error);
      }
    },
    isFavorite(productId) {
      const favoritesStore = useFavoritesStore(); // Access the Pinia store
      return favoritesStore.isFavorite(productId); // Check if product is favorite
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
      <!-- Toggle favorite button -->
      <button @click="toggleFavorite">
        <img
            :src="isFavorite(product.productid) ? '/public/assets/Icons/favorited.png' : '/public/assets/Icons/favorite.png'"
            height="22" width="26" :alt="isFavorite(product.productid) ? 'Unfavorite' : 'Favorite'"/>
      </button>
    </div>
  </div>
</template>

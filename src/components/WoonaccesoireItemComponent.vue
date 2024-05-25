<script>
import { useFavoritesStore } from '@/stores/favoritePinia.js'; // Import the Pinia store

export default {
  data() {
    return {
      producten: []
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await fetch('http://localhost:3000/api/producten');
        const data = await response.json();
        // Filter products where isMeubel is true
        this.producten = data.filter(product => product.isMeubel == false);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    async toggleFavorite(productid) {
      try {
        const favoritesStore = useFavoritesStore(); // Access the Pinia store
        await favoritesStore.toggleFavorite(productid); // Toggle the favorite status
      } catch (error) {
        console.error('Error toggling favorite:', error);
      }
    },
    async isFavorite(productid) {
      try {
        const favoritesStore = useFavoritesStore(); // Access the Pinia store
        return await favoritesStore.isFavorite(productid); // Check if product is favorite
      } catch (error) {
        console.error('Error checking favorite:', error);
        return false; // Return false if an error occurs
      }
    }
  }
};
</script>

<template>
  <div>
    <div v-for="product in producten" :key="product.productid" class="Product">
      <div class="backgroundMeubel">{{ product.producttitel }}</div>
      <div class="meubelPrijs">€ {{ product.prijs.toFixed(2) }}</div>
      <div class="Group2648">
        <!-- Toggle favorite button -->
        <div class="AddToFavorites" @click="toggleFavorite(product.productid)">
          <div class="HeartStreamlineCore">
            <img
                :src="isFavorite(product.productid) ? '/assets/Icons/favorited.png' : '/assets/Icons/favorite.png'"
                height="22" width="26" :alt="isFavorite(product.productid) ? 'Unfavorite' : 'Favorite'"/>
          </div>
        </div>
      </div>
      <img :alt="product.producttitel" class="meubelFoto" :src="product.productafbeelding"/>
      <div class="Quickview">
        <div class="Rectangle203"></div>
        <div class="MagnifyingGlassStreamlineCore1">
          <router-link :to="{ name: 'product', params: { id: product.productid } }"
                       class="MagnifyingGlassStreamlineCoreSvg">

            <img src="/assets/Icons/magnifying.png" height="27" width="26" alt="See more"/></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ensure you import your stylesheet here if not already globally imported */
@import '../assets/scss/_layout.scss';

* {
  float: left;
}
</style>

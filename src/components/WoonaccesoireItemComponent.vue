<script setup>
import { ref, onMounted } from 'vue';
import { useFavoritesStore } from '@/stores/favoritePinia.js'; // Import the Pinia store

const producten = ref([]);

const fetchProducts = async () => {
  try {
    const response = await fetch('https://two324-1dvo-wpl2-groep-06-backend-1.onrender.com/api/producten');
    const data = await response.json();
    // Filter products where isMeubel is false
    producten.value = data.filter(product => !product.isMeubel);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

const { toggleFavorite, isFavorite } = useFavoritesStore(); // Access the store methods

onMounted(fetchProducts);
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
                height="22" width="26"
                :alt="isFavorite(product.productid) ? 'Unfavorite' : 'Favorite'"
            />
          </div>
        </div>
      </div>
      <img :alt="product.producttitel" class="meubelFoto" :src="product.productafbeelding"/>
      <div class="Quickview">
        <div class="Rectangle203"></div>
        <div class="MagnifyingGlassStreamlineCore1">
          <router-link
              :to="{ name: 'product', params: { id: product.productid } }"
              class="MagnifyingGlassStreamlineCoreSvg"
          >
            <img src="/assets/Icons/magnifying.png" height="27" width="26" alt="See more"/>
          </router-link>
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

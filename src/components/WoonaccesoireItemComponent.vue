<script>
import {useFavoritesStore} from '../stores/favoritePinia.js';

export default {
  data() {
    return {
      producten: [],
      selectedFilters: {
        isZitmeubel: [],
        isEetkamer: [],
        isSlapen: [],
        isTafels: [],
        isKasten: [],
        prijsGoed: [],
      },
      sortCriteria: 'price',
      sortDirection: 'asc'
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await fetch('https://two324-1dvo-wpl2-groep-06-backend-1.onrender.com/api/producten', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
        const text = await response.text();

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        try {
          const data = JSON.parse(text);
          this.producten = data.filter(product => !product.isMeubel);
        } catch (error) {
          console.error('Error parsing JSON:', error);
          console.error('Response text:', text);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    toggleFavorite(productid) {
      const favoritesStore = useFavoritesStore();
      favoritesStore.toggleFavorite(productid);
    },
    isFavorite(productid) {
      const favoritesStore = useFavoritesStore();
      return favoritesStore.isFavorite(productid);
    },
    sortProducts(products) {
      if (this.sortCriteria === 'price') {
        products.sort((a, b) => {
          if (this.sortDirection === 'asc') {
            return a.prijs - b.prijs;
          } else {
            return b.prijs - a.prijs;
          }
        });
      } else if (this.sortCriteria === 'title') {
        products.sort((a, b) => {
          if (this.sortDirection === 'asc') {
            return a.producttitel.localeCompare(b.producttitel);
          } else {
            return b.producttitel.localeCompare(a.producttitel);
          }
        });
      }
      return products;
    },
    filteredProducts() {
      let filteredProducts = [...this.producten];
      console.log("Original products:", filteredProducts);

      // Apply filters (if any)
      // Example for isZitmeubel filter
      if (this.selectedFilters.isZitmeubel.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
          return this.selectedFilters.isZitmeubel.includes(product.isZitmeubel);
        });
        console.log("After isZitmeubel filter:", filteredProducts);
      }

      // More filters here...
      // ...

      // Apply sorting
      filteredProducts = this.sortProducts(filteredProducts);

      console.log("Filtered and sorted products:", filteredProducts);
      return filteredProducts;
    },
    setSortCriteria(event) {
      const value = event.target.value;
      if (value.includes('price')) {
        this.sortCriteria = 'price';
      } else if (value.includes('title')) {
        this.sortCriteria = 'title';
      }
      this.sortDirection = value.includes('asc') ? 'asc' : 'desc';
    }
  }
};
</script>

<template>
  <div>
    <!-- Sorting controls -->
    <div class="sort-container">
      <label for="sort" class="sortlabel">Sorteren op: </label>
      <select id="sort" @change="setSortCriteria">
        <option value="price-asc">Prijs (Laag - Hoog)</option>
        <option value="price-desc">Prijs (Hoog - Laag)</option>
        <option value="title-asc">Titel (A - Z)</option>
        <option value="title-desc">Titel (Z - A)</option>
      </select>
    </div>

    <div v-for="product in filteredProducts()" :key="product.productid" class="Product">
      <div class="backgroundMeubel">{{ product.producttitel }}</div>
      <div class="meubelPrijs">€ {{ product.prijs.toFixed(2) }}</div>
      <div class="Group2648">
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
            <img src="/assets/Icons/magnifying.png" height="27" width="26" alt="See more"/>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../assets/scss/_layout.scss';

* {
  float: left;
}
</style>

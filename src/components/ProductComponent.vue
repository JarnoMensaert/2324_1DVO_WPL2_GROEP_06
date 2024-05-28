<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useWinkelStore } from '../stores/winkelstore.js';  // Adjust the path according to your project structure
import { useFavoritesStore } from '@/stores/favoritePinia.js';  // Adjust the path according to your project structure

const route = useRoute();
const product = ref(null);
const winkelStore = useWinkelStore();
const favoritesStore = useFavoritesStore(); // Access the Pinia store

const fetchProduct = async (id) => {
  try {
    const response = await fetch(`https://two324-1dvo-wpl2-groep-06-backend-1.onrender.com/api/product/${id}`);
    const data = await response.json();

    if (response.ok) {
      product.value = data;
    } else {
      console.error('Error fetching product:', data.error);
    }
  } catch (error) {
    console.error('Error fetching product:', error);
  }
};

const addToCart = () => {
  if (product.value) {
    winkelStore.add(product.value);
  }
};

const toggleFavorite = async () => {
  try {
    await favoritesStore.toggleFavorite(product.value.id); // Toggle favorite status
  } catch (error) {
    console.error('Error toggling favorite:', error);
  }
};

onMounted(() => {
  const productId = route.params.id;
  if (productId) {
    fetchProduct(productId);
  }
});

const isFavorite = (productId) => {
  return favoritesStore.isFavorite(productId); // Check if product is favorite
};
</script>

<template>
  <main v-if="product">
    <p class="breadcrumb">HOME / MEUBELS / ZITMEUBELS / RELAXZETELS</p>
    <div class="productInfo">
      <div class="productLinks">
        <hr>
        <div id="carouselFotos">
          <img :src="product.productafbeelding" :alt="product.producttitel" />
        </div>
      </div>
      <div class="productRechts">
        <div class="productHeader">
          <h2 class="productTitel">{{ product.producttitel }}</h2>
          <button @click="toggleFavorite">
            <img :src="isFavorite(product.id) ? '/assets/Icons/favorited.png' : '/assets/Icons/favorite.png'"
                 height="22" width="26"
                 :alt="isFavorite(product.id) ? 'Unfavorite' : 'Favorite'"/>
          </button>
        </div>
        <span class="stocked">IN STOCK</span>
        <p class="productOmschr">{{ product.productomschrijving }}</p>
        <p class="dimensies">Dimensies:<br>{{ product.dimensies || 'N/A' }}</p>
        <h2 id="productPrijs">€{{ product.prijs.toFixed(2) }}</h2>
        <button @click="addToCart" class="addToCartButton">ADD TO CART</button>
        <hr>
        <p class="shipping1">Shipping cost and return</p>
        <p class="shipping2">For shipping info and cost, <a href="#">click here</a></p>
        <p class="shippingExtraInfo">{{ product.shippingExtraInfo || 'No additional information available.' }}</p>
      </div>
    </div>
    <div class="itemsYouMayLike">
      <h2 class="itemsYMLTitel">Items you may like</h2>
      <!-- Add items you may like section here -->
    </div>
  </main>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<style scoped>
.addToCartButton {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.addToCartButton:hover {
  background-color: #0056b3;
}

/* Add other styles here */
</style>

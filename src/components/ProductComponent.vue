<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useWinkelStore } from '../stores/winkelstore.js';  // Adjust the path according to your project structure

const route = useRoute();
const product = ref(null);
const winkelStore = useWinkelStore();

const fetchProduct = async (id) => {
  try {
    const response = await fetch(`http://localhost:3001/api/product/${id}`);
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

onMounted(() => {
  const productId = route.params.id;
  if (productId) {
    fetchProduct(productId);
  }
});
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
        <h2 class="productTitel">{{ product.producttitel }}</h2>
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

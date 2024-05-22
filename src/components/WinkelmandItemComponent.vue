<script>
import { defineComponent } from 'vue';
import { useWinkelStore } from '../stores/winkelstore.js'; // Make sure the import path is correct
import { mapActions, mapState } from 'pinia';

export default defineComponent({
  name: 'WinkelmandItemComponent',
  computed: {
    ...mapState(useWinkelStore, ['winkelMandje']),
  },
  methods: {
    ...mapActions(useWinkelStore, ['updateQuantity', 'deleteProduct']),
    removeFromWinkelmandje(index) {
      this.deleteProduct(index);
    },
    calculateSubtotal(product) {
      // Ensure product price is in the correct format
      const price = typeof product.prijs === 'string' ? product.prijs : String(product.prijs);

      // Remove euro sign and any non-numeric characters
      const numericPrice = parseFloat(price.replace(/[^\d.-]/g, ''));

      return (numericPrice * product.quantity).toFixed(2);
    },
    calculateTotalPrice() {
      return this.winkelMandje.reduce((total, product) => {
        // Ensure product price is in the correct format
        const price = typeof product.prijs === 'string' ? product.prijs : String(product.prijs);

        // Remove euro sign and any non-numeric characters
        const numericPrice = parseFloat(price.replace(/[^\d.-]/g, ''));

        return total + numericPrice * product.quantity;
      }, 0).toFixed(2);
    },
    calculateTotalVAT() {
      return (parseFloat(this.calculateTotalPrice()) * 0.21).toFixed(2);
    },
    simulateOrder() {
      console.log('Bestelling gesimuleerd');
    },
  },
});
</script>

<template>
  <div v-for="(product, index) in winkelMandje" :key="product.id" class="winkelmandItem">
    <div class="winkelmandItemLinks">
      <img class="winkelmandImg" :src="product.productafbeelding" :alt="product.producttitel"/>
    </div>
    <div class="winkelmandItemRechts">
      <h3 class="winkelmandTitel">{{ product.producttitel }}</h3>
      <p class="winkelmandOmschr">{{ product.productomschrijving }}</p>
<!-- /     <p class="winkelmandKleur">Kleur: {{ product.color }}</p>-->
<!--      <img :src="product.colorImage" :alt="product.color">-->
      <h3 class="winkelmandPrijs">€{{ product.prijs }}</h3>
      <div class="winkelmandAantal">
        <button @click="updateQuantity({ index, quantity: product.quantity - 1 })" class="winkelmandMinder">-</button>
        <p class="winkelmandAantalNummer">{{ product.quantity }}</p>
        <button @click="updateQuantity({ index, quantity: product.quantity + 1 })" class="winkelmandMeer">+</button>
      </div>
      <button @click="removeFromWinkelmandje(index)">Verwijderen</button>
    </div>
  </div>

  <div class="winkelmandTotalen">
    <p>Subtotal: €{{ calculateTotalPrice() }}</p>
    <p>BTW: €{{ calculateTotalVAT() }}</p>
    <button @click="simulateOrder">Bestelling plaatsen</button>
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>

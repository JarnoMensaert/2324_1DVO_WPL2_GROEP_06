<link rel="stylesheet" href="../assets/scss/_layout.scss">
<script>
export default {
  data() {
    return {
      knopTekst: "Quickview",
      meubelTitel: "Ligzetel",
      meubelPrijs: "€ 250,00"
    }
  }
}
</script>

<template>
  <div class="product-card">
    <div class="image-container">
      <img src="path-to-your-image" alt="Chair Image" />
      <button class="favorite-button"><img src="/assets/Icons/favorite.png" alt="Favorite"></button>
    </div>
    <div class="product-details">
      <p class="product-title">Stoel Alicia khaki velvet fire retardant (FR-Quartz 903 Khaki)</p>
      <p class="product-price">€ 250,00</p>
      <RouterLink :to="/product" class="zoom-button">🔍</RouterLink>
    </div>
  </div>
</template>

<style scoped>

</style>
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
  <div class="meubelItem">
    <img src="/assets/Icons/favorite.png" alt="Favorite" class="favoriteItem">
    <img src="/assets/Icons/favorited.png" alt="Favorited" class="favoritedItem">
    <div class="meubelQuickview">
      <img src="/assets/Icons/quickview.png" alt="Quickview">
      <p>{{ knopTekst }}</p>
    </div>
    <img src="/assets/images/stoel.png" alt="Stoel" class="meubelFoto">
    <div class="meubelInfo">
      <p class="meubelTitel">{{ meubelTitel }}</p>
      <p class="meubelPrijs">{{ meubelPrijs }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>
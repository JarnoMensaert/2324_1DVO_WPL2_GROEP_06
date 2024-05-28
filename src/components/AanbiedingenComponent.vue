<script>
export default {
  data() {
    return {
      componentTitle: "Aanbiedingen",
      aanbiedingen: [
        {
          id: 1,
          aanbod: "10% korting op je verjaardag",
          img: "/assets/images/aanbiedingVerjaardag.png",
        },
        {
          id: 2,
          aanbod: "Gratis cadeau bij aankoop van meubels",
          img: "/assets/images/aanbiedingCadeau.png",
        },
        {
          id: 1,
          aanbod: "5% korting op sierkussens",
          img: "/assets/images/aanbiedingSierkussens.png",
        },
      ]
    }
  },
}
</script>

<template>
  <h1 class="componentTitle">{{ componentTitle }}</h1>
  <div class="aanbodContainer">
    <div v-for="(aanbieding, index) in aanbiedingen" :key="index" class="aanbieding">
      <img :src="aanbieding.img" :alt="aanbieding.aanbod">
      <p>{{ aanbieding.aanbod }}</p>
    </div>
  </div>
</template>
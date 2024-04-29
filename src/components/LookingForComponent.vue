<script>
export default {
  data() {
    return {
      shopNow: "Shop now ->",
      categories: [
        {
          name: "Zitmeubels",
          image: "@/assets/Images/Zitmeubels.png",
        },
        {
          name: "Eetkamer",
          image: "@/assets/Images/Eetkamer.png",
        },
        {
          name: "Slapen",
          image: "@/assets/Images/Slapen.png",
        },
        {
          name: "Tafels",
          image: "@/assets/Images/Tafels.png",
        },
        {
          name: "Kasten",
          image: "@/assets/Images/Kasten.png",
        }
      ]
    }
  }
}
</script>
<template>
  <div class="fullscreen">
    <h3>What are you looking for?</h3>
    <div class="lookingForWhat">
      <div v-for="(category, index) in categories" :key="index" class="lookingFor">
        <img :src="category.image" :alt="category.name"/>
        <div class="lookingForTekst">
          <p class="homeCategorie">{{ category.name }}</p>
          <a class="shopNow">{{ shopNow }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
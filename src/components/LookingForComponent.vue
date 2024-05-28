<script>
export default {
  data() {
    return {
      title: "What are you looking for?",
      shopNow: "Shop now ->",
      categories: [
        {
          name: "Zitmeubels",
          image: "/assets/images/Zitmeubels.png",
        },
        {
          name: "Eetkamer",
          image: "/assets/images/Eetkamer.png",
        },
        {
          name: "Slapen",
          image: "/assets/images/Slapen.png",
        },
        {
          name: "Tafels",
          image: "/assets/images/Tafels.png",
        },
        {
          name: "Kasten",
          image: "/assets/images/Kasten.png",
        }
      ]
    }
  }
}
</script>
<template>
  <div class="fullscreen">
    <h3>{{ title }}</h3>
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
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FavorietenComponent from "@/components/FavorietenComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { useFavoritesStore } from '@/stores/favoritePinia.js'; // Import the Pinia store

export default {
  data() {
    return {};
  },
  methods: {
    Home() {
      this.$router.push('/');
    },
    Favorieten() {
      this.$router.push('/favorieten');
    }
  },
  components: {
    HeaderComponent,
    FavorietenComponent,
    FooterComponent,
  },
  computed: {
    favoriteProductIds() {
      const favoritesStore = useFavoritesStore(); // Access the Pinia store
      return Object.keys(favoritesStore.favorites);
    }
  }
}
</script>

<template>
  <div>
    <HeaderComponent/>
    <div class="aboutTitle">Favorieten</div>
    <div class="breadcrumb">
      <p>
        <div @click="Home()" class="breadcrumb-link">HOME</div>
        <div class="breadcrumb-link">/</div>
        <div @click="Favorieten()" class="breadcrumb-link">FAVORIETEN</div>
      </p>
      <hr>
    </div>
    <FavorietenComponent v-for="productId in favoriteProductIds" :key="productId" :productId="productId" />
    <FooterComponent/>
  </div>
</template>

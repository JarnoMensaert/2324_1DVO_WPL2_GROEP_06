<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FavorietenComponent from "@/components/FavorietenComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { useFavoritesStore } from "@/stores/favoritePinia.js";

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
    },
    async toggleFavorite(productid) {
      try {
        const favoritesStore = useFavoritesStore(); // Access the Pinia store
        await favoritesStore.toggleFavorite(productid); // Toggle the favorite status
      } catch (error) {
        console.error('Error toggling favorite:', error);
      }
    },
    async isFavorite(productid) {
      try {
        const favoritesStore = useFavoritesStore(); // Access the Pinia store
        return await favoritesStore.isFavorite(productid); // Check if product is favorite
      } catch (error) {
        console.error('Error checking favorite:', error);
        return false; // Return false if an error occurs
      }
    }
  },
  components: {
    HeaderComponent,
    FavorietenComponent,
    FooterComponent,
  },
};
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
    <!-- Pass isFavorite and toggleFavorite methods to FavorietenComponent -->
    <FavorietenComponent
        :isFavorite="isFavorite"
        :toggleFavorite="toggleFavorite"
    />
    <FooterComponent/>
  </div>
</template>
